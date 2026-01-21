
import React from 'react';
/* Fix: Import Utilisateur instead of non-existent User */
import { Utilisateur, Role } from '../types';

/* Fix: Use Utilisateur in props interface */
export const DashboardPage: React.FC<{ user: Utilisateur, onLogout: () => void }> = ({ user, onLogout }) => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="font-serif text-4xl uppercase tracking-tight">
          Espace <span className="text-accent">{user.role}</span>
        </h1>
        <button onClick={onLogout} className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">
          Déconnexion
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <nav className="bg-white p-6 rounded-lg border border-gray-100 space-y-2">
          <button className="w-full text-left p-3 rounded bg-accent text-white font-bold text-sm">Vue d'ensemble</button>
          <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm">Profil & Paramètres</button>
          {user.role === Role.ADMIN && (
            <>
              <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm font-bold text-accent">Gestion Employés</button>
              <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm font-bold text-accent">Statistiques CA</button>
            </>
          )}
          {(user.role === Role.EMPLOYE || user.role === Role.ADMIN) && (
            <>
              <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm">Commandes Clients</button>
              <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm">Gestion du Stock</button>
            </>
          )}
          {user.role === Role.UTILISATEUR && (
            <button className="w-full text-left p-3 rounded hover:bg-gray-50 text-gray-600 text-sm">Mes Commandes</button>
          )}
        </nav>

        <main className="lg:col-span-3 space-y-8">
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl mb-8">Bonjour, {user.prenom}</h2>
            
            {user.role === Role.ADMIN && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Commandes ce mois</span>
                  <span className="text-3xl font-serif text-primary">124</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Chiffre d'affaires</span>
                  <span className="text-3xl font-serif text-accent">4,890€</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Avis en attente</span>
                  <span className="text-3xl font-serif text-primary">3</span>
                </div>
              </div>
            )}

            {user.role === Role.UTILISATEUR && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">Dernière commande</h3>
                <div className="p-6 border border-gray-100 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-bold">Festin de Noël</p>
                    <p className="text-xs text-gray-400">Prévue le 24/12/2024</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded uppercase">En préparation</span>
                </div>
              </div>
            )}
          </div>

          {/* Table placeholder for management */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="font-serif text-xl mb-6">Actions Récentes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 text-xs tracking-widest uppercase">
                    <th className="pb-4">Référence</th>
                    <th className="pb-4">Client</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Statut</th>
                    <th className="pb-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[1, 2, 3].map(i => (
                    <tr key={i}>
                      <td className="py-4 font-bold text-accent">#CMD-2024-{i}0{i}</td>
                      <td className="py-4">Jean Dupont</td>
                      <td className="py-4">12 Oct 2024</td>
                      <td className="py-4"><span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">LIVRÉ</span></td>
                      <td className="py-4"><button className="text-primary underline">Détails</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};