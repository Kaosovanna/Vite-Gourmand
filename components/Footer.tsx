
import React from 'react';
import { HORAIRES } from '../constants';

export const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-6">Vite & Gourmand</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Traiteur d'exception à Bordeaux depuis 25 ans. Nous sublimons vos événements avec passion et gourmandise.
          </p>
          <address className="not-italic text-gray-400">
            123 Rue de la Gastronomie<br />
            33000 Bordeaux, France<br />
            +33 5 56 00 00 00
          </address>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Horaires de service</h4>
          <ul className="space-y-2">
            {HORAIRES.map((h) => (
              <li key={h.jour} className="flex justify-between text-gray-400 text-sm">
                <span>{h.jour}</span>
                <span>{h.ouverture === 'Fermé' ? h.ouverture : `${h.ouverture} - ${h.fermeture}`}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-accent">Informations</h4>
          <ul className="space-y-3">
            <li><button onClick={() => onNavigate('legal')} className="text-gray-400 hover:text-white transition-colors">Mentions Légales</button></li>
            <li><button onClick={() => onNavigate('cgv')} className="text-gray-400 hover:text-white transition-colors">CGV</button></li>
            <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors">Contactez-nous</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Vite & Gourmand. Tous droits réservés. Conformité RGPD & RGAA.</p>
      </div>
    </footer>
  );
};
