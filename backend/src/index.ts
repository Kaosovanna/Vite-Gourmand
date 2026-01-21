
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
// @ts-ignore - PrismaClient is generated dynamically at runtime, ignore build-time type error if prisma generate hasn't run
import { PrismaClient } from '@prisma/client';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import menuRoutes from './routes/menus';
import statsRoutes from './routes/stats';

const app = express();
// Initialize Prisma client
const prisma = new PrismaClient();

app.use(cors());

// Fix: Use express.json() directly as middleware. 
// The error usually occurs when TypeScript cannot correctly infer the overload for app.use with certain versions of express/body-parser.
app.use(express.json() as any);

// Connexion MongoDB pour l'analytique
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB: Connecté'))
    .catch(err => console.error('MongoDB Error:', err));
}

// Routes API v1
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/menus', menuRoutes);
app.use('/api/v1/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
