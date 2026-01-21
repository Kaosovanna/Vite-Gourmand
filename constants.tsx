
import { Menu } from './types';

export const THEMES = ['Noël', 'Nouvel An', 'Saint-Valentin', 'Pâques', 'Classique', 'Sur-Mesure', 'Végétal', 'Mariage', 'Séminaire'];
export const REGIMES = ['Classique', 'Végétarien', 'Vegan', 'Sans Gluten'];

export const MENUS_DEMO: Menu[] = [
  {
    identifiant: 1,
    titre: "Festin de Noël",
    description: "Une symphonie de saveurs hivernales : Foie gras mi-cuit au Jurançon, Chapon aux morilles et bûche signature chocolat-mandarine.",
    prixBase: 45.00,
    nbConvivesMin: 6,
    theme: "Noël",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1601118964938-228a89955311?q=80&w=2487&auto=format&fit=crop", 
    conditions: "Commander 15 jours à l'avance.",
    stock: 10
  },
  {
    identifiant: 2,
    titre: "Éveil Printanier",
    description: "La fraîcheur du potager : Asperges vertes du Blayais, Risotto aux herbes folles et déclinaison de fraises Gariguette au basilic.",
    prixBase: 38.00,
    nbConvivesMin: 4,
    theme: "Pâques",
    regime: "Végétarien",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800",
    conditions: "Disponible pour le weekend de Pâques.",
    stock: 15
  },
  {
    identifiant: 3,
    titre: "Signature Gourmande",
    description: "L'essence de notre maison : Saint-Jacques snakées, Agneau de sept heures fondant et soufflé chaud au Grand Marnier.",
    prixBase: 52.00,
    nbConvivesMin: 8,
    theme: "Classique",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1605759758891-430e7885631b?q=80&w=2487&auto=format&fit=crop",
    conditions: "Toute l'année sur réservation.",
    stock: 20
  },
  {
    identifiant: 4,
    titre: "Réveillon Étincelant",
    description: "Célébrez le passage à la nouvelle année : Huîtres du bassin, Homard bleu rôti au beurre demi-sel et cascade de mignardises au champagne.",
    prixBase: 65.00,
    nbConvivesMin: 4,
    theme: "Nouvel An",
    regime: "Classique",
    image: "https://plus.unsplash.com/premium_photo-1697925878054-ee7f62f1de9d?q=80&w=2488&auto=format&fit=crop",
    conditions: "Réservation avant le 15 décembre.",
    stock: 8
  },
  {
    identifiant: 5,
    titre: "Écrin d'Amour",
    description: "Un tête-à-tête gastronomique : Noix de Saint-Jacques à la truffe noire, Cœur de filet de bœuf Rossini et dessert 'Passion Rouge' à partager.",
    prixBase: 55.00,
    nbConvivesMin: 2,
    theme: "Saint-Valentin",
    regime: "Classique",
    image: "https://plus.unsplash.com/premium_photo-1676690624366-dc7fcce21fd2?q=80&w=2670&auto=format&fit=crop",
    conditions: "Disponible exclusivement le 14 février.",
    stock: 12
  },
  {
    identifiant: 6,
    titre: "Jardin d'Hiver",
    description: "Une ode au végétal : Velouté de potimarron aux éclats de châtaigne, Wellington de légumes oubliés et poire pochée au vin épicé.",
    prixBase: 42.00,
    nbConvivesMin: 4,
    theme: "Végétal",
    regime: "Vegan",
    image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    conditions: "Sélection de saison.",
    stock: 10
  },
  {
    identifiant: 7,
    titre: "Prestige Océanique",
    description: "Le meilleur de l'Atlantique : Plateau de fruits de mer royal, Bar en croûte de sel et agrumes, citron givré de Menton.",
    prixBase: 58.00,
    nbConvivesMin: 6,
    theme: "Classique",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1719787770623-a71007d16916?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    conditions: "Arrivage frais quotidien.",
    stock: 5
  },
  {
    identifiant: 8,
    titre: "Délicat Végétal",
    description: "Raffinement sans compromis : Carpaccio de betteraves fumées, Steak de chou-fleur rôti aux noisettes et dôme coco-mangue.",
    prixBase: 35.00,
    nbConvivesMin: 2,
    theme: "Végétal",
    regime: "Vegan",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    conditions: "Menu 100% végétal.",
    stock: 25
  },
  {
    identifiant: 9,
    titre: "Terroir Aquitain",
    description: "Authenticité bordelaise : Entrecôte à la bordelaise, Pommes sarladaises aux cèpes et Cannelé façon profiterole.",
    prixBase: 48.00,
    nbConvivesMin: 10,
    theme: "Classique",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    conditions: "Idéal pour les grandes tablées.",
    stock: 15
  },
  {
    identifiant: 10,
    titre: "Noces d'Or",
    description: "Le menu des grands événements : Médaillon de lotte à l'armoricaine, Filet de veau aux girolles et Pièce montée signature.",
    prixBase: 75.00,
    nbConvivesMin: 20,
    theme: "Mariage",
    regime: "Classique",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    conditions: "Service maître d'hôtel inclus.",
    stock: 3
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
