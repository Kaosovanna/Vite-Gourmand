
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage as PageAccueil } from './pages/HomePage';
import { MenusPage as PageMenus } from './pages/MenusPage';
import { MenuDetailPage as PageDetailMenu } from './pages/MenuDetailPage';
import { OrderPage as PageCommande } from './pages/OrderPage';
import { DashboardPage as PageTableauDeBord } from './pages/DashboardPage';
import { LoginPage as PageConnexion } from './pages/LoginPage';
import { Menu, Utilisateur } from './types';

const Application: React.FC = () => {
  const [pageActuelle, setPageActuelle] = useState('accueil');
  const [menuSelectionne, setMenuSelectionne] = useState<Menu | null>(null);
  const [utilisateurConnecte, setUtilisateurConnecte] = useState<Utilisateur | null>(null);

  const naviguerVers = (page: string) => {
    setPageActuelle(page);
    window.scrollTo(0, 0);
  };

  const selectionnerMenu = (menu: Menu) => {
    setMenuSelectionne(menu);
    naviguerVers('detail-menu');
  };

  const initierCommande = (menu: Menu) => {
    if (!utilisateurConnecte) {
      naviguerVers('connexion');
    } else {
      setMenuSelectionne(menu);
      naviguerVers('commander');
    }
  };

  const gererConnexion = (u: Utilisateur) => {
    setUtilisateurConnecte(u);
    naviguerVers('tableau-de-bord');
  };

  const gererDeconnexion = () => {
    setUtilisateurConnecte(null);
    naviguerVers('accueil');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar naviguerVers={naviguerVers} utilisateur={utilisateurConnecte} />
      
      <main className="flex-grow">
        {/* Fix: HomePage expects onNavigate prop */}
        {pageActuelle === 'accueil' && <PageAccueil onNavigate={naviguerVers} />}
        {pageActuelle === 'menus' && <PageMenus onSelection={selectionnerMenu} />}
        {/* Fix: MenuDetailPage expects onOrder and onBack props */}
        {pageActuelle === 'detail-menu' && menuSelectionne && (
          <PageDetailMenu 
            menu={menuSelectionne} 
            onOrder={initierCommande} 
            onBack={() => naviguerVers('menus')} 
          />
        )}
        {/* Fix: LoginPage expects onLogin and onBack props */}
        {pageActuelle === 'connexion' && <PageConnexion onLogin={gererConnexion} onBack={() => naviguerVers('accueil')} />}
        {/* Fix: OrderPage expects user and onSubmit props */}
        {pageActuelle === 'commander' && menuSelectionne && utilisateurConnecte && (
          <PageCommande 
            menu={menuSelectionne} 
            user={utilisateurConnecte} 
            onSubmit={(donnees) => {
              console.log('Commande enregistrée:', donnees);
              alert('Votre commande a été confirmée avec succès !');
              naviguerVers('tableau-de-bord');
            }} 
          />
        )}
        {/* Fix: DashboardPage expects user and onLogout props */}
        {pageActuelle === 'tableau-de-bord' && utilisateurConnecte && (
          <PageTableauDeBord user={utilisateurConnecte} onLogout={gererDeconnexion} />
        )}
        {pageActuelle === 'contact' && (
          <div className="pt-32 pb-24 max-w-2xl mx-auto px-4">
            <h1 className="font-serif text-4xl mb-8">Nous Contacter</h1>
            <form className="space-y-6 bg-white p-8 rounded shadow-xl border border-gray-100">
              <input type="text" placeholder="Sujet de votre message" className="w-full p-4 border border-gray-200 rounded outline-none focus:border-accent" />
              <input type="email" placeholder="Votre adresse email" className="w-full p-4 border border-gray-200 rounded outline-none focus:border-accent" />
              <textarea placeholder="Votre message..." rows={5} className="w-full p-4 border border-gray-200 rounded outline-none focus:border-accent"></textarea>
              <button type="submit" className="w-full py-4 bg-primary text-white font-bold tracking-widest uppercase rounded hover:bg-accent transition-colors">
                ENVOYER LE MESSAGE
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Fix: Footer expects onNavigate prop */}
      <Footer onNavigate={naviguerVers} />
    </div>
  );
};

export default Application;