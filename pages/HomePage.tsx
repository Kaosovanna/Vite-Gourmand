
import React, { useState, useEffect } from 'react';
import { MENUS_DEMO } from '../constants';

const QuoteCarousel = () => {
  const quotes = [
    "Sublimer le produit local pour créer l'émotion universelle.",
    "La cuisine est le miroir de l'âme, une quête perpétuelle du goût vrai.",
    "Chaque assiette raconte une histoire de terroir, de patience et de passion.",
    "L'excellence n'est pas un acte, mais une habitude que nous cultivons.",
    "Le luxe, c'est la simplicité portée à son plus haut degré de raffinement."
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true);
      }, 2000);
    }, 10000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="h-32 flex items-center">
      <p className={`quote-transition text-gray-500 leading-relaxed text-2xl font-light italic font-serif ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        "{quotes[index]}"
      </p>
    </div>
  );
};

const ImageCarousel = () => {
  const images = MENUS_DEMO.map(menu => menu.image).filter(img => !!img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl bg-white">
      {images.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img} alt="Plat" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    { 
      name: "Marc-Antoine D.", 
      menu: "Festin de Noël", 
      img: MENUS_DEMO[0].image, 
      text: "Un réveillon hors du commun. Le chapon aux morilles était d'une tendreté absolue, une véritable prouesse culinaire." 
    },
    { 
      name: "Éléonore R.", 
      menu: "Éveil Printanier", 
      img: MENUS_DEMO[3].image, 
      text: "La fraîcheur des asperges était saisissante. Un menu végétarien digne des plus grandes tables étoilées." 
    },
    { 
      name: "Jean-Philippe T.", 
      menu: "Signature Gourmande", 
      img: MENUS_DEMO[4].image, 
      text: "Les Saint-Jacques snakées sont une merveille. On ressent tout l'amour du produit noble dans chaque bouchée." 
    }
  ];
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 2000); // 2 secondes de fondu pour l'élégance
    }, 10000); // 10 secondes entre chaque avis
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-40 bg-white border-y border-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-lys-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase">L'Excellence Reconnue</span>
          <h2 className="font-serif text-5xl mt-4 text-primary italic">Paroles de Convives</h2>
          <div className="flex justify-center mt-6">
             <div className="w-12 h-[1px] bg-accent/30"></div>
          </div>
        </div>

        <div className="relative h-[550px] md:h-[350px]">
          <div className={`quote-transition flex flex-col md:flex-row items-center gap-16 md:gap-24 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-full md:w-2/5 aspect-[4/3] rounded-sm overflow-hidden shadow-[20px_20px_0px_0px_rgba(197,160,89,0.1)] border border-gray-100">
              <img 
                src={reviews[active].img} 
                alt={reviews[active].menu} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              
              <p className="font-serif text-3xl italic text-gray-800 leading-snug">
                "{reviews[active].text}"
              </p>
              
              <div className="pt-4">
                <h4 className="font-bold text-primary text-xs uppercase tracking-[0.3em]">{reviews[active].name}</h4>
                <div className="flex items-center gap-3 mt-2">
                  <span className="h-[1px] w-6 bg-accent"></span>
                  <p className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                    Expérience : {reviews[active].menu}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateurs de progression */}
        <div className="flex justify-center gap-4 mt-12">
          {reviews.map((_, i) => (
            <div 
              key={i} 
              className={`h-[2px] transition-all duration-1000 rounded-full ${i === active ? 'w-12 bg-accent' : 'w-4 bg-gray-200'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.35] animate-pulse-slow"
            alt="Ambiance"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block mb-8 px-8 py-2.5 border border-accent/40 rounded-full text-[10px] tracking-[0.5em] uppercase text-accent font-bold bg-black/30 backdrop-blur-md">
            Bordeaux • Haute Couture Culinaire
          </span>
          <h1 className="font-serif text-7xl md:text-9xl text-white mb-12 tracking-tighter leading-none">
            L'Art de <span className="italic text-accent">Recevoir</span>
          </h1>
          <button 
            onClick={() => onNavigate('menus')} 
            className="group relative px-14 py-6 bg-accent text-white font-bold tracking-[0.4em] overflow-hidden rounded-full shadow-2xl transition-all"
          >
            <span className="relative z-10 uppercase text-[10px]">Découvrir nos Collections</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </section>

      {/* Philosophie Section */}
      <section className="py-48 bg-white relative">
        <div className="absolute inset-0 bg-lys-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative">
            <div className="absolute -inset-10 border border-accent/10 rounded-sm translate-x-12 translate-y-12"></div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <ImageCarousel />
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase italic">Notre Héritage</span>
              <h2 className="font-serif text-6xl text-primary leading-tight">Gastronomie <br/><span className="text-accent italic font-light">Sans Frontières</span></h2>
            </div>
            <div className="w-20 h-[1px] bg-accent"></div>
            <QuoteCarousel />
            <button 
              onClick={() => onNavigate('menus')} 
              className="text-accent font-bold tracking-[0.3em] text-[10px] flex items-center gap-6 group uppercase border-b border-accent/20 pb-4 hover:border-accent transition-colors"
            >
              EXPLORER LA CARTE <span className="group-hover:translate-x-4 transition-transform text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};
