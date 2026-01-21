
import React, { useState } from 'react';
/* Fix: Import Utilisateur instead of non-existent User */
import { Role, Utilisateur } from '../types';

/* Fix: Use Utilisateur in props interface */
export const LoginPage: React.FC<{ onLogin: (u: Utilisateur) => void, onBack: () => void }> = ({ onLogin, onBack }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth logic
    const mockUser: Utilisateur = { 
      identifiant: 1, 
      nom: 'Dupont', 
      prenom: 'Jean', 
      email, 
      role: Role.UTILISATEUR, 
      telephone: '0612345678', 
      adresse: '12 Rue de la Paix, 33000 Bordeaux' 
    };
    onLogin(mockUser);
  };

  return (
    <div className="pt-32 pb-24 flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <h2 className="font-serif text-3xl mb-2 text-center">
          {isRegistering ? 'Créer un compte' : 'Bienvenue'}
        </h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase text-center mb-8">
          Vite & Gourmand
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Prénom" className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm focus:bg-white focus:border-accent outline-none" />
              <input required type="text" placeholder="Nom" className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm focus:bg-white focus:border-accent outline-none" />
            </div>
          )}
          
          <input 
            required type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm focus:bg-white focus:border-accent outline-none" 
          />
          
          <div className="relative">
            <input 
              required type="password" placeholder="Mot de passe" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-100 rounded text-sm focus:bg-white focus:border-accent outline-none" 
            />
            {isRegistering && (
              <p className="text-[10px] text-gray-400 mt-2 italic">
                Min. 10 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial.
              </p>
            )}
          </div>

          {!isRegistering && (
            <button type="button" className="text-xs text-accent hover:underline">Mot de passe oublié ?</button>
          )}

          <button className="w-full py-4 bg-primary text-white font-bold tracking-widest uppercase rounded hover:bg-accent transition-all shadow-lg">
            {isRegistering ? 'S\'INSCRIRE' : 'SE CONNECTER'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-50 text-center">
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-sm text-gray-400 hover:text-accent transition-colors"
          >
            {isRegistering ? 'Déjà un compte ? Connectez-vous' : 'Pas encore de compte ? Créer un compte'}
          </button>
        </div>
      </div>
    </div>
  );
};