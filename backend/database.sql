
-- Création de la base de données relationnelle MySQL
CREATE DATABASE IF NOT EXISTS vite_et_gourmand;
USE vite_et_gourmand;

-- Table des rôles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO roles (libelle) VALUES ('utilisateur'), ('employe'), ('admin');

-- Table des utilisateurs
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gsm VARCHAR(20),
    adresse TEXT,
    role_id INT DEFAULT 1,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Table des menus
CREATE TABLE menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    description TEXT,
    prix_base DECIMAL(10,2) NOT NULL,
    nb_personnes_min INT DEFAULT 1,
    theme VARCHAR(50),
    regime VARCHAR(50),
    image_url TEXT,
    conditions TEXT,
    stock_disponible INT DEFAULT 0
);

-- Table des plats
CREATE TABLE plats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    type ENUM('entrée', 'plat', 'dessert') NOT NULL,
    photo_url TEXT
);

-- Association menus <-> plats
CREATE TABLE menu_plats (
    menu_id INT,
    plat_id INT,
    PRIMARY KEY (menu_id, plat_id),
    FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE CASCADE,
    FOREIGN KEY (plat_id) REFERENCES plats(id) ON DELETE CASCADE
);

-- Table des commandes
CREATE TABLE commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    menu_id INT,
    date_commande DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_prestation DATE NOT NULL,
    heure_livraison TIME NOT NULL,
    lieu_livraison TEXT NOT NULL,
    nb_personnes INT NOT NULL,
    prix_total DECIMAL(10,2) NOT NULL,
    statut VARCHAR(50) DEFAULT 'attente',
    motif_annulation TEXT,
    FOREIGN KEY (user_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

-- Données de démo
INSERT INTO menus (titre, description, prix_base, nb_personnes_min, theme, regime, stock_disponible)
VALUES ('Festin de Noël', 'Tradition et raffinement', 45.00, 6, 'Noël', 'Classique', 20);

INSERT INTO utilisateurs (nom, prenom, email, password, role_id)
VALUES ('Gourmand', 'José', 'admin@vite.fr', '$2b$10$demo_hash', 3);
