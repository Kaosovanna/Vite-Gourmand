
import React, { useState, useEffect } from 'react';
import { Menu, Utilisateur } from '../types';

export const OrderPage: React.FC<{ menu: Menu, user: Utilisateur, onSubmit: (d: any) => void }> = ({ menu, user, onSubmit }) => {
  const [formData, setFormData] = useState({
    nbConvives: menu.nbConvivesMin,
    adresse: user.adresse,
    date: '',
    heure: '20:00',
    lieu: 'Bordeaux'
  });

  const [tarifs, setTarifs] = useState({
    totalMenu: 0,
    livraison: 0,
    totalFinal: 0,
    reduction: 0
  });

  useEffect(() => {
    let prixMenu = menu.prixBase * formData.nbConvives;
    let reduction = 0;
    
    if (formData.nbConvives >= (menu.nbConvivesMin + 5)) {
      reduction = prixMenu * 0.1;
      prixMenu -= reduction;
    }

    let livraison = 15;
    if (formData.lieu.toLowerCase() === 'bordeaux') {
      livraison = 0; // Offert sur Bordeaux
    }

    setTarifs({
      totalMenu: prixMenu + reduction,
      reduction,
      livraison,
      totalFinal: prixMenu + livraison
    });
  }, [formData, menu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...formData, ...tarifs});
  };

  return (
    <div className="pt-40 pb-32 max-w-5xl mx-auto px-6">
      <h1 className="font-serif text-5xl mb-16 text-center text-primaire">Finaliser votre Réservation</h1>
      
      <div className="bg-white p-12 rounded-sm shadow-2xl border border-gray-50 grid md:grid-cols-2 gap-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-8">Détails de la prestation</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Date</label>
                <input required type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full p-4 border border-gray-100 rounded-sm text-sm focus:border-accent outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Heure</label>
                <input required type="time" value={formData.heure} onChange={(e) => setFormData({...formData, heure: e.target.value})} className="w-full p-4 border border-gray-100 rounded-sm text-sm focus:border-accent outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Nombre de convives (Min. {menu.nbConvivesMin})</label>
              <input required type="number" min={menu.nbConvivesMin} value={formData.nbConvives} onChange={(e) => setFormData({...formData, nbConvives: parseInt(e.target.value)})} className="w-full p-4 border border-gray-100 rounded-sm text-sm focus:border-accent outline-none" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">Ville de réception</label>
              <input required type="text" value={formData.lieu} onChange={(e) => setFormData({...formData, lieu: e.target.value})} className="w-full p-4 border border-gray-100 rounded-sm text-sm focus:border-accent outline-none" />
            </div>
          </div>

          <button className="w-full py-6 bg-primaire text-white font-bold tracking-[0.5em] uppercase hover:bg-accent transition-all rounded-sm text-[10px]">
            Confirmer ma demande
          </button>
        </form>

        <div className="bg-gray-50 p-10 rounded-sm flex flex-col justify-between border border-gray-100">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-10">Récapitulatif de collection</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light italic">{menu.titre} (x{formData.nbConvives})</span>
                <span className="font-medium">{(menu.prixBase * formData.nbConvives).toFixed(2)}€</span>
              </div>
              {tarifs.reduction > 0 && (
                <div className="flex justify-between text-sm text-green-600 italic">
                  <span>Remise Privilège (-10%)</span>
                  <span>-{tarifs.reduction.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light italic">Frais de déplacement</span>
                <span className="font-medium">{tarifs.livraison === 0 ? 'Inclus' : `${tarifs.livraison.toFixed(2)}€`}</span>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 mt-10">
            <div className="flex justify-between items-baseline mb-6">
              <span className="font-serif text-2xl text-primaire">Total TTC</span>
              <span className="font-serif text-4xl text-accent">{tarifs.totalFinal.toFixed(2)}€</span>
            </div>
            <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-widest">
              Un acompte de 30% sera demandé après validation du devis par notre maître d'hôtel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
