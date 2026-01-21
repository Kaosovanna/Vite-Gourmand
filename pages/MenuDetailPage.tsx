
import React from 'react';
import { Menu } from '../types';

export const MenuDetailPage: React.FC<{ menu: Menu, onOrder: (m: Menu) => void, onBack: () => void }> = ({ menu, onOrder, onBack }) => {
  const getSecondaryImages = (theme: string) => {
    switch(theme) {
      case 'Noël':
        return [
          "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600"
        ];
      case 'Pâques':
        return [
          "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1546767062-f8486dbc1dad?auto=format&fit=crop&q=80&w=600"
        ];
      case 'Évènement':
        return [
          "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600"
        ];
      default:
        return [
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
        ];
    }
  };

  const secondaryImages = getSecondaryImages(menu.theme);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <button onClick={onBack} className="text-accent text-sm font-bold tracking-widest mb-12 flex items-center gap-2 hover:-translate-x-2 transition-transform uppercase">
        ← RETOUR AUX CARTES
      </button>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-100 relative">
            <img 
              src={menu.image} 
              alt={menu.titre} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 right-4 bg-accent/90 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Réduction dès {menu.nbPersonnesMin + 5} convives
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {secondaryImages.map((src, idx) => (
              <img 
                key={idx} 
                src={src} 
                className="rounded shadow-md aspect-square object-cover cursor-pointer hover:opacity-80 transition-opacity bg-gray-200" 
                alt={`${menu.titre} vue ${idx + 1}`} 
              />
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-widest rounded uppercase">{menu.theme}</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold tracking-widest rounded uppercase">{menu.regime}</span>
            </div>
            <h1 className="font-serif text-5xl mb-4 text-primary leading-tight">{menu.titre}</h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">{menu.description}</p>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-serif text-accent">{menu.prixBase}€</span>
              <span className="text-gray-400 text-sm italic font-light">par convive (min. {menu.nbPersonnesMin} pers.)</span>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg shadow-xl relative overflow-hidden">
            <h3 className="font-serif text-2xl mb-6 relative z-10">Planifier votre prestation</h3>
            <ul className="space-y-4 mb-10 text-gray-300 text-sm font-light relative z-10">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>
                <span>Privilège groupe : <strong>-10% automatiquement</strong> dès {menu.nbPersonnesMin + 5} convives</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {menu.conditions}
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                Disponibilité : {menu.stock} créneaux restants
              </li>
            </ul>
            <button 
              onClick={() => onOrder(menu)}
              className="w-full py-4 bg-accent text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all rounded relative z-10"
            >
              RÉSERVER CETTE SIGNATURE
            </button>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h4 className="font-bold text-[10px] tracking-[0.4em] text-gray-400 mb-6 uppercase">La Signature du Chef</h4>
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-600 font-light">
              <div>
                <p className="font-bold text-primary mb-2 uppercase text-xs tracking-wider">Provenance</p>
                <p>Circuit court : nous privilégions les producteurs de Nouvelle-Aquitaine pour une fraîcheur absolue.</p>
              </div>
              <div>
                <p className="font-bold text-primary mb-2 uppercase text-xs tracking-wider">Allergènes</p>
                <div className="flex flex-wrap gap-2">
                  {['Gluten', 'Lactose', 'Coque'].map(a => <span key={a} className="bg-gray-100 px-2 py-1 rounded text-[10px] font-medium">{a}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
