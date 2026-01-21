
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
  ATTENTE_MATERIEL = 'en attente retour matériel',
  TERMINEE = 'terminée',
  ANNULEE = 'annulée'
}

export interface Menu {
  identifiant: number;
  titre: string;
  description: string;
  prixBase: number;
  nbPersonnesMin: number;
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

export interface Commande {
  identifiant: number;
  menuIdentifiant: number;
  utilisateurIdentifiant: number;
  datePrestation: string;
  heurePrestation: string;
  lieu: string;
  nbPersonnes: number;
  prixTotal: number;
  statut: StatutCommande;
  motifAnnulation?: string;
}
