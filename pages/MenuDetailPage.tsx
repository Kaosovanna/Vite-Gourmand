
import React from 'react';
import { Menu } from '../types';

export const MenuDetailPage: React.FC<{ menu: Menu, onOrder: (m: Menu) => void, onBack: () => void }> = ({ menu, onOrder, onBack }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 min-h-screen bg-white">
      <button onClick={onBack} className="text-accent text-sm font-bold tracking-widest mb-12 flex items-center gap-2 hover:-translate-x-2 transition-transform uppercase">
        ← RETOUR À LA CARTE
      </button>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <img src={menu.image} alt={menu.titre} className="w-full h-full object-cover img-vivante" />
          </div>
        </div>

        <div className="bg-primaire p-12 md:p-16 rounded-[2.5rem] shadow-2xl border border-accent/10 flex flex-col justify-center">
          <div className="mb-10">
            <div className="flex gap-4 mb-8">
              <span className="px-4 py-1 bg-accent text-primaire text-[9px] font-bold tracking-[0.2em] rounded-full uppercase">{menu.theme}</span>
              <span className="px-4 py-1 border border-accent/30 text-accent text-[9px] font-bold tracking-[0.2em] rounded-full uppercase">{menu.regime}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl mb-8 text-accent leading-none">{menu.titre}</h1>
            <p className="text-gray-300 text-xl font-light leading-relaxed italic mb-10 opacity-90">
              {menu.description}
            </p>
            <div className="text-5xl font-serif text-accent mb-2">{menu.prixBase}€</div>
            <p className="text-accent/50 text-[10px] uppercase tracking-[0.3em] mb-12">Minimum {menu.nbConvivesMin} convives</p>
          </div>

          <div className="space-y-8 bg-white/5 p-8 rounded-2xl border border-accent/10 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center shrink-0 mt-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-accent font-bold uppercase tracking-tighter">Offre Groupe :</span> -10% dès {menu.nbConvivesMin + 5} convives.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-accent flex items-center justify-center shrink-0 mt-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-accent font-bold uppercase tracking-tighter">Conditions :</span> {menu.conditions}
              </p>
            </div>
          </div>

          <button onClick={() => onOrder(menu)} className="w-full py-6 bg-accent text-primaire font-bold tracking-[0.4em] uppercase hover:bg-white transition-all rounded-xl shadow-lg">
            Réserver cette Signature
          </button>
        </div>
      </div>
    </div>
  );
};
