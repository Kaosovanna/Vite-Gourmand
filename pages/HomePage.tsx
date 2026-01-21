
import React, { useState, useEffect } from 'react';
import { MENUS_DEMO } from '../constants';

const ImageCarousel = () => {
  // Utilisation exclusive des images de nos menus réels
  const images = MENUS_DEMO.map(menu => menu.image).filter(img => !!img);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return <div className="w-full h-full bg-gray-100 animate-pulse"></div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl bg-black">
      {images.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Aperçu Gastronomique ${index + 1}`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop";
            }}
          />
          {/* Overlay dégradé pour la lisibilité sans assombrir totalement */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
      ))}
      
      {/* Indicateurs discrets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/30'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      <div className="fixed top-24 w-full bg-[#111] text-accent py-3 z-40 text-center border-b border-accent/30 backdrop-blur-md">
        <div className="whitespace-nowrap flex items-center justify-center gap-12 overflow-hidden">
           <span className="text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
             ✨ Offre Prestige : -10% sur votre devis dès 5 convives supplémentaires ✨
           </span>
        </div>
      </div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary pt-10">
        <div className="absolute inset-0 z-0 bg-lys-dark opacity-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            alt="Ambiance Luxe" 
            className="w-full h-full object-cover brightness-[0.4] scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-8 flex flex-col items-center gap-6">
            <svg className="w-16 h-16 fill-accent opacity-80" viewBox="0 0 24 24"><path d="M12,2C11,2,9.5,4,9.5,7S11,10,12,10s2.5-1,2.5-3S13,2,12,2z M12,11c-4,0-6,2-6,6s2,4,6,4s6-1,6-4S16,11,12,11z" /></svg>
            <span className="inline-block px-6 py-2 border border-accent/40 rounded-full text-[10px] tracking-[0.5em] uppercase text-accent font-bold bg-accent/5 backdrop-blur-sm">
              Bordeaux • Haute Couture Culinaire
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl mb-10 tracking-tighter leading-none">
            L'Art de <span className="italic text-accent underline decoration-accent/20 underline-offset-8">Recevoir</span>
          </h1>
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('menus')}
              className="group relative px-16 py-6 bg-accent text-white font-bold tracking-[0.3em] overflow-hidden rounded-full shadow-2xl transition-all"
            >
              <span className="relative z-10 uppercase text-xs">Découvrir nos Collections</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-lys-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-32 items-center relative z-10">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-6 border-2 border-accent/20 rounded-2xl translate-x-12 translate-y-12"></div>
            <div className="relative z-10 aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <ImageCarousel />
            </div>
          </div>
          <div className="space-y-10 order-1 md:order-2">
            <h2 className="font-serif text-5xl text-primary leading-tight">Une Gastronomie <br/><span className="text-accent italic">Sans Frontières</span></h2>
            <div className="w-24 h-[1px] bg-accent"></div>
            <p className="text-gray-500 leading-relaxed text-xl font-light italic font-serif">
              "Sublimer le produit local pour créer l'émotion universelle."
            </p>
            <button 
              onClick={() => onNavigate('menus')}
              className="text-accent font-bold tracking-[0.3em] text-[11px] flex items-center gap-6 group uppercase border-b border-accent/20 pb-4"
            >
              EXPLORER LA CARTE <span className="group-hover:translate-x-4 transition-transform text-lg">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
