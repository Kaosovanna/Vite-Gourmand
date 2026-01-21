
import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1575549594211-18c207567781?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt={`Ambiance ${index + 1}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      <div className="fixed top-24 w-full bg-[#111] text-accent py-3 z-40 text-center border-b border-accent/30 backdrop-blur-md">
        <div className="whitespace-nowrap flex items-center justify-center gap-12">
           <svg className="w-4 h-4 fill-accent opacity-50" viewBox="0 0 24 24"><path d="M12,2C11,2,9.5,4,9.5,7S11,10,12,10s2.5-1,2.5-3S13,2,12,2z M12,11c-4,0-6,2-6,6s2,4,6,4s6-1,6-4S16,11,12,11z" /></svg>
           <span className="text-[10px] font-bold tracking-[0.3em] uppercase">✨ Offre Prestige : -10% pour les réceptions de groupe (Min + 5 convives) ✨</span>
           <svg className="w-4 h-4 fill-accent opacity-50" viewBox="0 0 24 24"><path d="M12,2C11,2,9.5,4,9.5,7S11,10,12,10s2.5-1,2.5-3S13,2,12,2z M12,11c-4,0-6,2-6,6s2,4,6,4s6-1,6-4S16,11,12,11z" /></svg>
        </div>
      </div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary pt-10">
        <div className="absolute inset-0 z-0 bg-lys-dark opacity-20"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop" 
            alt="Gastronomie haut de gamme" 
            className="w-full h-full object-cover brightness-[0.25] scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-8 flex flex-col items-center gap-6">
            <svg className="w-16 h-16 fill-accent opacity-80" viewBox="0 0 24 24"><path d="M12,2C11,2,9.5,4,9.5,7S11,10,12,10s2.5-1,2.5-3S13,2,12,2z M12,11c-4,0-6,2-6,6s2,4,6,4s6-1,6-4S16,11,12,11z" /></svg>
            <span className="inline-block px-6 py-2 border border-accent/40 rounded-full text-[10px] tracking-[0.5em] uppercase text-accent font-bold bg-accent/5 backdrop-blur-sm">
              Bordeaux • Excellence Gastronomique
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl mb-10 tracking-tighter leading-none">
            L'Art de <span className="italic text-accent underline decoration-accent/20 underline-offset-8">l'Inoubliable</span>
          </h1>
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('menus')}
              className="group relative px-16 py-6 bg-accent text-white font-bold tracking-[0.3em] overflow-hidden rounded-full shadow-2xl transition-all"
            >
              <span className="relative z-10 uppercase text-xs">Explorer les Collections</span>
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
            <h2 className="font-serif text-5xl text-primary leading-tight">La Gastronomie <br/><span className="text-accent italic">Sans Compromis</span></h2>
            <div className="w-24 h-[1px] bg-accent"></div>
            <p className="text-gray-600 leading-relaxed text-xl font-light italic font-serif">
              "Chaque bouchée est un hommage à la terre."
            </p>
            <button 
              onClick={() => onNavigate('menus')}
              className="text-accent font-bold tracking-[0.3em] text-[11px] flex items-center gap-6 group uppercase border-b border-accent/20 pb-4"
            >
              VOIR LES CRÉATIONS <span className="group-hover:translate-x-4 transition-transform text-lg">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
