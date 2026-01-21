
import mongoose from 'mongoose';

const StatsSchema = new mongoose.Schema({
  menuId: Number,
  menuTitle: String,
  totalRevenue: Number,
  orderCount: Number,
  period: String,
});

const StatModel = mongoose.model('MenuStats', StatsSchema);

export const AnalyticsService = {
  // Agrégation des données après chaque commande réussie
  syncOrderToAnalytics: async (orderData: any) => {
    const { menuId, total, menuTitle } = orderData;
    
    await StatModel.findOneAndUpdate(
      { menuId, period: new Date().toISOString().slice(0, 7) }, // Par mois
      { 
        $inc: { totalRevenue: total, orderCount: 1 },
        $set: { menuTitle }
      },
      { upsert: true }
    );
  },

  getGlobalStats: async () => {
    return await StatModel.find().sort({ totalRevenue: -1 });
  }
};
