
import React, { useState, useMemo } from 'react';
import { MENUS_DEMO, THEMES, REGIMES } from '../constants';
import { Menu } from '../types';

export const MenusPage: React.FC<{ onSelection: (m: Menu) => void }> = ({ onSelection }) => {
  const [filtres, setFiltres] = useState({
    prixMax: 150,
    theme: '',
    regime: '',
    nbConvives: 1
  });

  const menusFiltrés = useMemo(() => {
    return MENUS_DEMO.filter(m => {
      const prixOk = m.prixBase <= filtres.prixMax;
      const themeOk = !filtres.theme || m.theme === filtres.theme;
      const regimeOk = !filtres.regime || m.regime === filtres.regime;
      const convivesOk = m.nbConvivesMin >= filtres.nbConvives;
      return prixOk && themeOk && regimeOk && convivesOk;
    });
  }, [filtres]);

  return (
    <div className="min-h-screen bg-white text-primaire pt-40 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 motif-lys opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight text-primaire">
            La Carte des Saisons
          </h1>
          <div className="max-w-xl mx-auto py-3 px-6 border border-accent/20 bg-accent/5 rounded-full">
            <p className="text-accent text-[11px] font-bold tracking-[0.4em] uppercase">
               L'Excellence Gastronomique à domicile
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h3 className="font-serif text-2xl mb-10 border-b border-accent/20 pb-4 text-primaire italic">Filtres</h3>
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Budget Max</label>
                    <span className="text-accent font-serif">{filtres.prixMax}€</span>
                  </div>
                  <input type="range" min="30" max="150" value={filtres.prixMax} onChange={(e) => setFiltres({...filtres, prixMax: parseInt(e.target.value)})} className="w-full accent-accent" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-gray-400 mb-4 uppercase">Événement</label>
                  <select className="w-full p-4 bg-white border border-gray-200 rounded-xl text-xs outline-none" onChange={(e) => setFiltres({...filtres, theme: e.target.value})}>
                    <option value="">Toutes les occasions</option>
                    {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 grid md:grid-cols-2 gap-12">
            {menusFiltrés.map(menu => (
              <div key={menu.identifiant} className="group relative bg-primaire rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl border border-primaire">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={menu.image} alt={menu.titre} className="w-full h-full object-cover img-vivante brightness-90 group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 bg-primaire text-accent">
                  <div className="flex items-center gap-2 mb-4 opacity-60">
                    <span className="h-[1px] w-4 bg-accent"></span>
                    <span className="text-[9px] tracking-[0.3em] font-bold uppercase">{menu.theme}</span>
                  </div>
                  <h3 className="font-serif text-3xl mb-4 text-accent leading-tight">{menu.titre}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 h-12 line-clamp-2 italic">
                    {menu.description}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-accent/10">
                    <span className="text-2xl font-serif">{menu.prixBase}€ <small className="text-[10px] uppercase tracking-tighter opacity-60">/ convive</small></span>
                    <button onClick={() => onSelection(menu)} className="px-6 py-2 border border-accent/40 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-accent hover:text-primaire transition-all">
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};
