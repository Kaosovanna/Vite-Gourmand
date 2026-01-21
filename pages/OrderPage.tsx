
import React, { useState, useEffect } from 'react';
/* Fix: Import Utilisateur instead of non-existent User */
import { Menu, Utilisateur } from '../types';

/* Fix: Change user type to Utilisateur and update props interface */
export const OrderPage: React.FC<{ menu: Menu, user: Utilisateur, onSubmit: (d: any) => void }> = ({ menu, user, onSubmit }) => {
  const [formData, setFormData] = useState({
    nbPers: menu.nbPersonnesMin,
    adresse: user.adresse,
    date: '',
    heure: '12:00',
    lieu: 'Bordeaux'
  });

  const [prices, setPrices] = useState({
    totalMenu: 0,
    livraison: 0,
    totalFinal: 0,
    reduction: 0
  });

  useEffect(() => {
    let prixMenu = menu.prixBase * formData.nbPers;
    let reduction = 0;
    
    if (formData.nbPers >= (menu.nbPersonnesMin + 5)) {
      reduction = prixMenu * 0.1;
      prixMenu -= reduction;
    }

    let livraison = 5;
    if (formData.lieu.toLowerCase() !== 'bordeaux') {
      livraison += 15; // Simulation simplifiée: Bordeaux = 5€, Autre = 20€
    }

    setPrices({
      totalMenu: prixMenu + reduction,
      reduction,
      livraison,
      totalFinal: prixMenu + livraison
    });
  }, [formData, menu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...formData, ...prices});
  };

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="font-serif text-4xl mb-12 text-center">Finaliser votre commande</h1>
      
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 grid md:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xs font-bold tracking-widest text-accent uppercase mb-8">Informations de Prestation</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Prénom</label>
              <input type="text" value={user.prenom} disabled className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm text-gray-500" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Nom</label>
              <input type="text" value={user.nom} disabled className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Date souhaitée</label>
            <input 
              required type="date" value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded text-sm focus:border-accent outline-none" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Heure</label>
              <input 
                required type="time" value={formData.heure}
                onChange={(e) => setFormData({...formData, heure: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded text-sm focus:border-accent outline-none" 
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Nombre de convives</label>
              <input 
                required type="number" min={menu.nbPersonnesMin} value={formData.nbPers}
                onChange={(e) => setFormData({...formData, nbPers: parseInt(e.target.value)})}
                className="w-full p-3 border border-gray-200 rounded text-sm focus:border-accent outline-none" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase">Lieu de livraison</label>
            <input 
              required type="text" value={formData.lieu}
              placeholder="Ex: Bordeaux, Mérignac..."
              onChange={(e) => setFormData({...formData, lieu: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded text-sm focus:border-accent outline-none" 
            />
          </div>

          <button className="w-full py-4 bg-primary text-white font-bold tracking-widest uppercase hover:bg-accent transition-all rounded shadow-lg">
            Confirmer la commande
          </button>
        </form>

        <div className="bg-gray-50 p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold tracking-widest text-accent uppercase mb-8">Récapitulatif</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{menu.titre} (x{formData.nbPers})</span>
                <span className="font-bold">{prices.totalMenu.toFixed(2)}€</span>
              </div>
              {prices.reduction > 0 && (
                <div className="flex justify-between text-sm text-green-600 italic">
                  <span>Réduction groupe (-10%)</span>
                  <span>-{prices.reduction.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Livraison</span>
                <span className="font-bold">{prices.livraison.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex justify-between items-baseline">
              <span className="font-serif text-xl">Total TTC</span>
              <span className="font-serif text-3xl text-accent">{prices.totalFinal.toFixed(2)}€</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
              En confirmant, vous acceptez nos CGV. Un email de confirmation vous sera envoyé instantanément.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};