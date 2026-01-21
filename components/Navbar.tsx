
import React, { useState } from 'react';
import { Utilisateur } from '../types';

export const Navbar: React.FC<{ naviguerVers: (page: string) => void, utilisateur: Utilisateur | null }> = ({ naviguerVers, utilisateur }) => {
  const [estOuvert, setEstOuvert] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <button 
              onClick={() => naviguerVers('accueil')} 
              className="font-serif text-3xl font-bold tracking-tighter text-primaire"
            >
              Vite <span className="text-accent">&</span> Gourmand
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => naviguerVers('accueil')} className="text-[11px] font-bold tracking-[0.3em] hover:text-accent transition-colors uppercase">Accueil</button>
            <button onClick={() => naviguerVers('menus')} className="text-[11px] font-bold tracking-[0.3em] hover:text-accent transition-colors uppercase">La Carte</button>
            <button onClick={() => naviguerVers('contact')} className="text-[11px] font-bold tracking-[0.3em] hover:text-accent transition-colors uppercase">Contact</button>
            
            {utilisateur ? (
              <button 
                onClick={() => naviguerVers('tableau-de-bord')} 
                className="px-6 py-3 bg-primaire text-white text-[10px] font-bold tracking-[0.2em] rounded-sm hover:bg-accent transition-all uppercase"
              >
                Espace {utilisateur.role}
              </button>
            ) : (
              <button 
                onClick={() => naviguerVers('connexion')} 
                className="px-6 py-3 bg-accent text-white text-[10px] font-bold tracking-[0.2em] rounded-sm hover:bg-primaire transition-all uppercase"
              >
                Connexion
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setEstOuvert(!estOuvert)} className="text-primaire p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={estOuvert ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {estOuvert && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-8 space-y-6 flex flex-col items-start animate-fade-in shadow-xl">
          <button onClick={() => { naviguerVers('accueil'); setEstOuvert(false); }} className="text-xl font-serif">Accueil</button>
          <button onClick={() => { naviguerVers('menus'); setEstOuvert(false); }} className="text-xl font-serif">La Carte</button>
          <button onClick={() => { naviguerVers('contact'); setEstOuvert(false); }} className="text-xl font-serif">Contact</button>
          <button onClick={() => { naviguerVers('connexion'); setEstOuvert(false); }} className="text-xl font-serif text-accent">Compte Client</button>
        </div>
      )}
    </nav>
  );
};
