
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
      setVisible(false); // Commence le fondu de sortie
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setVisible(true); // Commence le fondu d'entrée
      }, 2000); // Temps du fondu
    }, 10000); // Intervalle de 10 secondes
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
    { name: "Marc-Antoine D.", menu: "Festin de Noël", img: MENUS_DEMO[0].image, text: "Un réveillon hors du commun. Le chapon aux morilles était d'une tendreté absolue." },
    { name: "Éléonore R.", menu: "Éveil Printanier", img: MENUS_DEMO[3].image, text: "La fraîcheur des asperges était saisissante. Un menu végétarien digne des plus grands." },
    { name: "Jean-Philippe T.", menu: "Signature Gourmande", img: MENUS_DEMO[4].image, text: "Les Saint-Jacques snakées sont une merveille. Un amour du produit noble." }
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(prev => (prev + 1) % reviews.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-gray-50/30 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] text-accent uppercase">L'Excellence Reconnue</span>
          <h2 className="font-serif text-4xl mt-4 text-primary italic">Paroles de Convives</h2>
        </div>
        <div className="relative h-[450px] md:h-[300px]">
          {reviews.map((rev, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row items-center gap-12 ${i === active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                <img src={rev.img} alt={rev.menu} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => <svg key={s} className="w-5 h-5 fill-accent" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                </div>
                <p className="font-serif text-2xl italic text-gray-700 leading-relaxed">"{rev.text}"</p>
                <div>
                  <h4 className="font-bold text-primary text-sm uppercase tracking-widest">{rev.name}</h4>
                  <p className="text-accent text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">Dégustation : {rev.menu}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.4] animate-pulse-slow"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-white"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="inline-block mb-6 px-6 py-2 border border-accent/40 rounded-full text-[10px] tracking-[0.5em] uppercase text-accent font-bold bg-black/20 backdrop-blur-sm">
            Bordeaux • Haute Couture Culinaire
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-10 tracking-tighter">
            L'Art de <span className="italic text-accent">Recevoir</span>
          </h1>
          <button onClick={() => onNavigate('menus')} className="px-12 py-5 bg-accent text-white font-bold tracking-[0.3em] rounded-full hover:bg-white hover:text-primary transition-all uppercase text-xs">
            Découvrir nos Collections
          </button>
        </div>
      </section>

      <section className="py-40 bg-white relative">
        <div className="absolute inset-0 bg-lys-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative">
            <div className="absolute -inset-6 border-2 border-accent/10 rounded-2xl translate-x-8 translate-y-8"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel />
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="font-serif text-5xl text-primary leading-tight italic">Gastronomie <br/><span className="text-accent not-italic">Sans Frontières</span></h2>
            <div className="w-24 h-[1px] bg-accent"></div>
            <QuoteCarousel />
            <button onClick={() => onNavigate('menus')} className="text-accent font-bold tracking-[0.3em] text-[11px] flex items-center gap-6 group uppercase border-b border-accent/20 pb-4">
              EXPLORER LA CARTE <span className="group-hover:translate-x-4 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};
