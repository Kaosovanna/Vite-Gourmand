
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    // Récupération des statistiques agrégées depuis MongoDB via le backend
    api.get('/admin/stats').then(data => setStats(data));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="font-serif text-4xl mb-8">Tableau de Bord Analytique</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">CA par Menu (MongoDB Data)</h3>
          <div className="space-y-4">
            {stats.map((s, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-medium">{s.menuTitle}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-accent h-full" style={{ width: `${(s.totalRevenue / 5000) * 100}%` }}></div>
                  </div>
                  <span className="text-sm font-bold">{s.totalRevenue}€</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          <p className="text-gray-400 italic text-sm text-center">Visualisation graphique (Chart.js) intégrable ici</p>
        </div>
      </div>
    </div>
  );
};
