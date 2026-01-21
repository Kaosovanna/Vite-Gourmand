
export enum Role {
  UTILISATEUR = 'utilisateur',
  EMPLOYE = 'employe',
  ADMIN = 'admin'
}

export enum StatutCommande {
  ATTENTE = 'en attente',
  ACCEPTE = 'accepté',
  PREPARATION = 'en préparation',
  LIVRAISON = 'en cours de livraison',
  LIVRE = 'livré',
  TERMINEE = 'terminée',
  ANNULEE = 'annulée'
}

export interface Menu {
  identifiant: number;
  titre: string;
  description: string;
  prixBase: number;
  nbConvivesMin: number;
  theme: string;
  regime: string;
  image: string;
  conditions: string;
  stock: number;
}

export interface Utilisateur {
  identifiant: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  role: Role;
}
