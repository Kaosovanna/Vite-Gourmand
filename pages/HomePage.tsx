
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
      // On laisse 2500ms pour un fondu de sortie et d'entrée très doux
      setTimeout(() => {
        setActive((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 2500); 
    }, 10000); // Cycle de 10 secondes
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-48 bg-white border-y border-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-lys-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-28">
          <span className="text-[10px] font-bold tracking-[0.6em] text-accent uppercase">Témoignages d'Émotion</span>
          <h2 className="font-serif text-5xl md:text-6xl mt-6 text-primary italic">Paroles de Convives</h2>
          <div className="flex justify-center mt-8">
             <div className="w-16 h-[1px] bg-accent/40"></div>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[400px]">
          <div className={`transition-all duration-[2500ms] ease-in-out flex flex-col md:flex-row items-center gap-16 md:gap-32 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="w-full md:w-[45%] aspect-[16/10] md:aspect-[4/3] rounded-sm overflow-hidden shadow-[30px_30px_0px_0px_rgba(197,160,89,0.05)] border border-gray-100 relative group">
              <img 
                src={reviews[active].img} 
                alt={reviews[active].menu} 
                className={`w-full h-full object-cover transition-transform duration-[12000ms] ease-linear ${visible ? 'scale-110' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            
            <div className="flex-1 space-y-10">
              <div className="flex gap-2">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 fill-accent opacity-80" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              
              <p className="font-serif text-3xl md:text-4xl italic text-gray-800 leading-tight tracking-tight">
                "{reviews[active].text}"
              </p>
              
              <div className="pt-6 flex items-center gap-6">
                <div className="h-[1px] w-12 bg-accent/60"></div>
                <div>
                  <h4 className="font-bold text-primary text-[11px] uppercase tracking-[0.4em]">{reviews[active].name}</h4>
                  <p className="text-accent text-[9px] font-bold tracking-[0.2em] mt-1.5 uppercase opacity-80">
                    Menu dégusté : {reviews[active].menu}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de progression élégante */}
        <div className="flex justify-center gap-6 mt-16">
          {reviews.map((_, i) => (
            <button 
              key={i} 
              className={`group relative h-8 flex items-center transition-all duration-700`}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setActive(i); setVisible(true); }, 500);
              }}
            >
              <div className={`h-[1px] transition-all duration-1000 ${i === active ? 'w-16 bg-accent' : 'w-6 bg-gray-200 group-hover:bg-accent/40'}`}></div>
            </button>
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
            className="w-full h-full object-cover brightness-[0.3] animate-pulse-slow"
            alt="Ambiance Luxe"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <span className="inline-block mb-10 px-10 py-3 border border-accent/30 rounded-full text-[10px] tracking-[0.6em] uppercase text-accent font-bold bg-black/20 backdrop-blur-lg">
            Bordeaux • Haute Gastronomie Nomade
          </span>
          <h1 className="font-serif text-7xl md:text-[10rem] text-white mb-14 tracking-tighter leading-none">
            L'Art de <span className="italic text-accent font-light">Savourer</span>
          </h1>
          <button 
            onClick={() => onNavigate('menus')} 
            className="group relative px-16 py-7 bg-accent text-white font-bold tracking-[0.5em] overflow-hidden rounded-sm shadow-2xl transition-all"
          >
            <span className="relative z-10 uppercase text-[11px]">Consulter nos Collections</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </section>

      {/* Philosophie Section */}
      <section className="py-56 bg-white relative">
        <div className="absolute inset-0 bg-lys-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-12 border border-accent/10 rounded-sm translate-x-16 translate-y-16"></div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.08)]">
              <ImageCarousel />
            </div>
          </div>
          <div className="space-y-16 order-1 md:order-2">
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-[0.5em] text-accent uppercase italic block">Manifeste Culinaire</span>
              <h2 className="font-serif text-6xl md:text-7xl text-primary leading-[1.1]">Éveil des <br/><span className="text-accent italic font-light">Sens</span></h2>
            </div>
            <div className="w-24 h-[1px] bg-accent/40"></div>
            <QuoteCarousel />
            <button 
              onClick={() => onNavigate('menus')} 
              className="text-accent font-bold tracking-[0.4em] text-[11px] flex items-center gap-8 group uppercase border-b border-accent/10 pb-6 hover:border-accent transition-all"
            >
              LA CARTE SIGNATURE <span className="group-hover:translate-x-6 transition-transform text-2xl font-light">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - La pièce maîtresse lente et élégante */}
      <Testimonials />
    </div>
  );
};
