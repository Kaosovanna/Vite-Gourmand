
# ⚜️ Vite & Gourmand | Traiteur d'Excellence Bordelais

![Version](https://img.shields.io/badge/Version-3.0.0--Majest%C3%A9-c5a059)
![React](https://img.shields.io/badge/Frontend-React%2019-1a1a1a)
![Tailwind](https://img.shields.io/badge/Design-Tailwind%20CSS-c5a059)
![Database](https://img.shields.io/badge/Databases-MySQL%20%26%20MongoDB-white)

> **"L'Art de l'Inoubliable."** 
> Vite & Gourmand n'est pas qu'une application de traiteur, c'est une immersion dans la haute gastronomie française, sublimée par une interface luxueuse aux motifs de Fleur de Lys.

---

## 🏛️ Architecture & Stack Technologique

Le projet repose sur une architecture robuste et hybride, conçue pour la performance et l'analyse de données massive.

### Frontend (L'Écrin)
- **React 19** : Utilisation des dernières fonctionnalités de streaming et de gestion d'état.
- **Tailwind CSS** : Design système "Onyx & Gold" avec animations fluides et motifs de Fleur de Lys dynamiques.
- **Responsive Design** : Expérience fluide du mobile au desktop 4K.

### Backend (Le Laboratoire)
- **Node.js & Express** : API RESTful sécurisée.
- **Prisma (MySQL)** : Gestion relationnelle des utilisateurs, menus et commandes (Données critiques).
- **Mongoose (MongoDB)** : Moteur analytique pour les statistiques de vente et le comportement utilisateur.
- **JWT (JSON Web Token)** : Authentification chiffrée de niveau bancaire.

---

## ✨ Fonctionnalités Clés

### ⚜️ Expérience Client
- **Carte Interactive** : Filtrage avancé par budget, thème (Noël, Pâques...) et régime alimentaire.
- **Algorithme "Privilège Groupe"** : Calculateur dynamique offrant **-10% de réduction automatique** pour les réceptions (dès 5 convives au-delà du minimum).
- **Parcours de Commande Royal** : Tunnel d'achat simplifié avec récapitulatif des coûts en temps réel.

### 📊 Pilotage Admin (Dashboard)
- **Analytique MongoDB** : Visualisation du Chiffre d'Affaires par menu via `AnalyticsService`.
- **Gestion du Stock** : Suivi des créneaux disponibles en temps réel.
- **Rôles Multiples** : Accès différenciés pour Utilisateurs, Employés et Administrateurs.

---

## 🚀 Installation & Déploiement

### Pré-requis
- Node.js (v18+)
- MySQL Instance
- MongoDB Atlas (ou local)

### Configuration du Royaume
1. **Clonage du projet**
   ```bash
   git clone https://github.com/votre-compte/vite-et-gourmand.git
   cd vite-et-gourmand
   ```

2. **Backend**
   ```bash
   cd backend
   npm install
   # Créer un fichier .env avec :
   # DATABASE_URL="mysql://user:pass@localhost:3306/vite_et_gourmand"
   # MONGODB_URI="mongodb+srv://..."
   npx prisma migrate dev
   npm run dev
   ```

3. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## 🛡️ Sécurité & Conformité

- **RGPD** : Chiffrement des mots de passe avec `bcrypt`, gestion des cookies et droit à l'oubli implémenté.
- **Accessibilité (RGAA)** : Contrastes validés (WCAG AA), navigation clavier optimisée et labels ARIA sur tous les composants interactifs.
- **Performance** : Score Lighthouse > 90 grâce à l'optimisation des images et au Lazy Loading des composants.

---

## 🎨 Identité Visuelle
Le site utilise une palette chromatique spécifique :
- **Noir Onyx** (`#050505`) : Profondeur et élégance.
- **Or Royal** (`#c5a059`) : Raffinement et prestige (utilisé pour les Fleurs de Lys et les accents).
- **Blanc Cassé** : Lisibilité et douceur.

---

## 👨‍🍳 Équipe & Maintenance
Développé par l'équipe **Vite & Gourmand Digital**. Pour toute demande de support ou personnalisation de menu, contactez notre maître d'hôtel digital à `contact@vite-et-gourmand.fr`.

---
*© 2024 Vite & Gourmand. Sous licence d'excellence gastronomique.*
