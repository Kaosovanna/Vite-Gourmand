import { Menu } from './types';

export const THEMES = ['Noël', 'Nouvel An', 'Saint-Valentin', 'Pâques', 'Classique', 'Sur-Mesure'];
export const REGIMES = ['Classique', 'Végétarien', 'Vegan'];

export const MENUS_DEMO: Menu[] = [
  {
    identifiant: 1,
    titre: "Festin de Noël",
    description: "Une symphonie de saveurs hivernales : Foie gras mi-cuit, Chapon aux morilles et bûche signature chocolat-mandarine.",
    prixBase: 45.00,
    nbPersonnesMin: 6,
    theme: "Noël",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1601118964938-228a89955311?q=80&w=2487&auto=format&fit=crop", 
    conditions: "Commander 15 jours à l'avance.",
    stock: 10
  },
  {
    identifiant: 4,
    titre: "Réveillon Étincelant",
    description: "Célébrez le passage à la nouvelle année : Huîtres du bassin, Homard bleu rôti et cascade de mignardises au champagne.",
    prixBase: 65.00,
    nbPersonnesMin: 4,
    theme: "Nouvel An",
    regime: "Classique",
    image: "https://plus.unsplash.com/premium_photo-1697925878054-ee7f62f1de9d?q=80&w=2488&auto=format&fit=crop",
    conditions: "Réservation avant le 15 décembre.",
    stock: 8
  },
  {
    identifiant: 5,
    titre: "Écrin d'Amour",
    description: "Un tête-à-tête gastronomique : Noix de Saint-Jacques à la truffe, Cœur de filet de bœuf et dessert 'Passion Rouge' à partager.",
    prixBase: 55.00,
    nbPersonnesMin: 2,
    theme: "Saint-Valentin",
    regime: "Classique",
    image: "https://plus.unsplash.com/premium_photo-1676690624366-dc7fcce21fd2?q=80&w=2670&auto=format&fit=crop",
    conditions: "Disponible exclusivement le 14 février, réservé 15 jours à l'avance",
    stock: 12
  },
  {
    identifiant: 2,
    titre: "Éveil Printanier",
    description: "La fraîcheur du potager : Asperges vertes du Blayais, Risotto aux herbes folles et déclinaison de fraises Gariguette.",
    prixBase: 38.00,
    nbPersonnesMin: 4,
    theme: "Pâques",
    regime: "Végétarien",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800",
    conditions: "Disponible pour le weekend de Pâques.",
    stock: 15
  },
  {
    identifiant: 3,
    titre: "Signature Gourmande",
    description: "Nos incontournables : Saint-Jacques snakées, Filet de bœuf de Bazas et Fondant au cœur coulant caramel beurre salé.",
    prixBase: 42.00,
    nbPersonnesMin: 2,
    theme: "Classique",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1605759758891-430e7885631b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    conditions: "Réservé une table.",
    stock: 20
  },
  {
    identifiant: 6,
    titre: "Création à la Demande",
    description: "Votre événement sur-mesure. Notre chef élabore avec vous un menu unique selon vos envies et les produits du marché.",
    prixBase: 75.00,
    nbPersonnesMin: 10,
    theme: "Sur-Mesure",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1648297346835-8a7f7dd44528?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    conditions: "Réservation OBLIGATOIRE : Prévenir 1 mois à l'avance pour l'élaboration du menu.",
    stock: 5
  }
];

export const HORAIRES = [
  { jour: 'Lundi', ouverture: 'Fermé', fermeture: '' },
  { jour: 'Mardi', ouverture: '12:00', fermeture: '21:00' },
  { jour: 'Mercredi', ouverture: '12:00', fermeture: '21:00' },
  { jour: 'Jeudi', ouverture: '12:00', fermeture: '21:00' },
  { jour: 'Vendredi', ouverture: '12:00', fermeture: '21:00' },
  { jour: 'Samedi', ouverture: '12:00', fermeture: '21:00' },
  { jour: 'Dimanche', ouverture: 'Fermé', fermeture: '' },
];