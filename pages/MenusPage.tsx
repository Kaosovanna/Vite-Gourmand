
import React, { useState, useMemo } from 'react';
import { MENUS_DEMO, THEMES, REGIMES } from '../constants';
import { Menu } from '../types';

export const MenusPage: React.FC<{ onSelection: (m: Menu) => void }> = ({ onSelection }) => {
  const [filtres, setFiltres] = useState({
    prixMax: 150,
    theme: '',
    regime: '',
    nbPers: 1
  });

  const menusFiltrés = useMemo(() => {
    return MENUS_DEMO.filter(m => {
      const prixOk = m.prixBase <= filtres.prixMax;
      const themeOk = !filtres.theme || m.theme === filtres.theme;
      const regimeOk = !filtres.regime || m.regime === filtres.regime;
      const persOk = m.nbPersonnesMin >= filtres.nbPers;
      return prixOk && themeOk && regimeOk && persOk;
    });
  }, [filtres]);

  return (
    <div className="min-h-screen bg-white text-primary pt-40 pb-32 relative overflow-hidden">
      {/* Filigrane Fleur de Lys sur fond blanc pur */}
      <div className="absolute inset-0 bg-lys-pattern pointer-events-none opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <div className="fleur-de-lys-divider mb-8">
            <svg className="w-8 h-8 fill-accent opacity-80" viewBox="0 0 24 24">
              <path d="M12,2C11,2,9.5,4,9.5,7S11,10,12,10s2.5-1,2.5-3S13,2,12,2z M12,11c-4,0-6,2-6,6s2,4,6,4s6-1,6-4S16,11,12,11z M4.5,9C3.5,9,2,10,2,13s2,5,3,5s2.5-2,2.5-5S5.5,9,4.5,9z M19.5,9c-1,0-2.5,1-2.5,4s2,5,3,5s3-2,3-5S20.5,9,19.5,9z" />
            </svg>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight text-primary">
            La Carte des Saisons
          </h1>
          <div className="max-w-xl mx-auto py-3 px-6 border border-accent/20 bg-accent/5 rounded-full">
            <p className="text-accent text-[11px] font-bold tracking-[0.4em] uppercase">
               L'Excellence Gastronomique à votre Table
            </p>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm overflow-hidden relative">
              <h3 className="font-serif text-2xl mb-10 border-b border-accent/20 pb-4 flex items-center gap-3 text-primary">
                <span className="text-accent text-lg">✦</span> Filtrer
              </h3>
              
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4 items-center">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Budget Maximum</label>
                    <span className="text-accent font-serif text-lg">{filtres.prixMax}€</span>
                  </div>
                  <input 
                    type="range" min="30" max="150" value={filtres.prixMax}
                    onChange={(e) => setFiltres({...filtres, prixMax: parseInt(e.target.value)})}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-gray-400 mb-4 uppercase">Événement</label>
                  <select 
                    className="w-full p-4 bg-white border border-gray-200 rounded-xl text-xs text-primary focus:border-accent outline-none appearance-none transition-all cursor-pointer"
                    onChange={(e) => setFiltres({...filtres, theme: e.target.value})}
                  >
                    <option value="">Toutes les occasions</option>
                    {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-gray-400 mb-5 uppercase">Régime Alimentaire</label>
                  <div className="space-y-4">
                    {['', ...REGIMES].map(r => (
                      <label key={r} className="flex items-center gap-4 text-sm cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border border-accent/30 flex items-center justify-center transition-all ${filtres.regime === r ? 'bg-accent' : 'group-hover:border-accent'}`}>
                          {filtres.regime === r && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                        <input 
                          type="radio" name="regime" 
                          className="hidden"
                          checked={filtres.regime === r}
                          onChange={() => setFiltres({...filtres, regime: r})}
                        />
                        <span className={`transition-colors ${filtres.regime === r ? 'text-accent font-medium' : 'text-gray-500 group-hover:text-primary'}`}>
                          {r || 'Toutes les créations'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid md:grid-cols-2 gap-12">
              {menusFiltrés.map(menu => (
                <div 
                  key={menu.identifiant} 
                  className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-700 hover:border-accent/40 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                >
                  <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
                    <img 
                      src={menu.image} 
                      alt={menu.titre} 
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    
                    <div className="absolute top-6 right-6">
                      <div className="bg-accent text-white px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                        <span className="text-[9px] font-bold tracking-widest uppercase flex items-center gap-2">
                          <span className="w-1 h-1 bg-white rounded-full animate-pulse"></span>
                          Offre Groupe dès {menu.nbPersonnesMin + 5} pers.
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-accent/30 px-5 py-2 rounded-full shadow-xl">
                      <span className="text-2xl font-serif text-accent">{menu.prixBase}€</span>
                      <span className="text-[10px] text-gray-500 ml-1 uppercase tracking-tighter">/ convive</span>
                    </div>
                  </div>

                  <div className="p-10 relative">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-[1px] w-4 bg-accent"></span>
                      <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase">{menu.theme}</span>
                    </div>
                    
                    <h3 className="font-serif text-3xl mb-4 text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                      {menu.titre}
                    </h3>
                    
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 h-12 line-clamp-2 italic">
                      {menu.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-accent/60 font-bold uppercase tracking-[0.2em] mb-1">Prestation</span>
                        <span className="text-xs text-gray-400">Min. {menu.nbPersonnesMin} convives</span>
                      </div>
                      
                      <button 
                        onClick={() => onSelection(menu)}
                        className="relative overflow-hidden px-8 py-3 group/btn border border-accent/30 hover:border-accent rounded-lg transition-all"
                      >
                        <span className="relative z-10 text-[10px] tracking-[0.3em] font-bold text-accent group-hover/btn:text-white transition-colors uppercase">
                          Découvrir
                        </span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
