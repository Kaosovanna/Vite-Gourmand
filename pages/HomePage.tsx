
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MENUS_DEMO } from '../constants';

const TEMOIGNAGES = [
  {
    id: 1,
    nom: "Hélène de V.",
    menu: "Festin de Noël",
    avis: "Une expérience hors du temps. Le foie gras au Jurançon est une merveille absolue. Le service était d'une discrétion et d'un professionnalisme rares.",
    note: 5
  },
  {
    id: 2,
    nom: "Jean-Philippe R.",
    menu: "Signature Gourmande",
    avis: "Pour mon anniversaire, j'ai choisi la Signature. Les Saint-Jacques étaient snakées à la perfection. Mes invités en parlent encore.",
    note: 5
  },
  {
    id: 3,
    nom: "Sophie & Marc",
    menu: "Noces d'Or",
    avis: "Un mariage sublimé par la qualité des mets. La pièce montée était non seulement magnifique mais délicieuse. Merci pour tout l'accompagnement.",
    note: 5
  },
  {
    id: 4,
    nom: "Cabinet d'Avocats L.",
    menu: "Séminaire Prestige",
    avis: "Organisation impeccable pour notre cocktail de fin d'année. La finesse des pièces cocktail a impressionné tous nos collaborateurs.",
    note: 5
  },
  {
    id: 5,
    nom: "Famille Desmond",
    menu: "Jardin d'Hiver",
    avis: "Une alternative végétale qui n'a rien à envier aux menus classiques. Créativité et saveurs étaient au rendez-vous. Exceptionnel.",
    note: 5
  },
  {
    id: 6,
    nom: "Pierre-Antoine B.",
    menu: "Terroir Aquitain",
    avis: "Le goût de l'authentique. L'entrecôte à la bordelaise était d'une tendreté exemplaire. Un vrai hommage à notre belle région.",
    note: 5
  }
];

export const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const [imagesIA, setImagesIA] = useState<{ [key: string]: string }>({});
  const [chargement, setChargement] = useState(true);
  const [indexTemoignage, setIndexTemoignage] = useState(0);
  const [indexPhotoMenu, setIndexPhotoMenu] = useState(0);
  const [indexHero, setIndexHero] = useState(0);

  const menusSelectionnes = MENUS_DEMO.slice(0, 5);

  useEffect(() => {
    const genererImagesIA = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const requetes = [
          { 
            key: 'temoignages', 
            prompt: "Artistic close-up of high-end luxury cuisine, copper textures, soft steam, dark sophisticated background, golden lighting accents, 8k." 
          }
        ];

        const nouvellesImages: { [key: string]: string } = {};

        for (const req of requetes) {
          const reponse = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: {
              parts: [{ text: req.prompt }]
            },
            config: { imageConfig: { aspectRatio: "16:9" } }
          });

          for (const partie of reponse.candidates[0].content.parts) {
            if (partie.inlineData) {
              nouvellesImages[req.key] = `data:image/png;base64,${partie.inlineData.data}`;
              break;
            }
          }
        }

        setImagesIA(nouvellesImages);
      } catch (e) {
        console.error("Erreur génération IA:", e);
        setImagesIA({
          temoignages: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
        });
      } finally {
        setChargement(false);
      }
    };
    genererImagesIA();
  }, []);

  const suivantHero = useCallback(() => {
    setIndexHero((prev) => (prev + 1) % menusSelectionnes.length);
  }, [menusSelectionnes.length]);

  const suivantTemoignage = useCallback(() => {
    setIndexTemoignage((prev) => (prev + 1) % TEMOIGNAGES.length);
  }, []);

  const suivantPhotoMenu = useCallback(() => {
    setIndexPhotoMenu((prev) => (prev + 1) % menusSelectionnes.length);
  }, [menusSelectionnes.length]);

  useEffect(() => {
    const intervalleH = setInterval(suivantHero, 8000);
    const intervalleT = setInterval(suivantTemoignage, 10000);
    const intervalleP = setInterval(suivantPhotoMenu, 10000);
    
    return () => {
      clearInterval(intervalleH);
      clearInterval(intervalleT);
      clearInterval(intervalleP);
    };
  }, [suivantHero, suivantTemoignage, suivantPhotoMenu]);

  return (
    <div className="w-full bg-white selection:bg-accent selection:text-white">
      {/* Section Héro - CARROUSEL DE MENUS IMMERSIF */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primaire">
        <div className="absolute inset-0 z-0">
          {menusSelectionnes.map((menu, idx) => (
            <div 
              key={`hero-${menu.identifiant}`}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === indexHero ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={menu.image} 
                className="w-full h-full object-cover brightness-[0.4] contrast-[1.1] img-vivante" 
                alt={menu.titre} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primaire/80"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="overflow-hidden mb-8">
            <span className="inline-block px-10 py-3 border border-accent/40 rounded-full text-[10px] tracking-[0.7em] uppercase text-accent font-bold bg-black/40 backdrop-blur-md animate-fade-in">
              Bordeaux • Signature Gastronomique
            </span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-14 tracking-tighter leading-tight drop-shadow-2xl">
            L'Art de <span className="italic text-accent font-light">Recevoir</span>
          </h1>

          <div className="flex flex-col items-center gap-10">
            <button 
              onClick={() => onNavigate('menus')} 
              className="group relative px-20 py-7 bg-accent text-white font-bold tracking-[0.5em] rounded-sm transition-all overflow-hidden shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:shadow-accent/50"
            >
              <span className="relative z-10 uppercase text-[11px]">Explorer la Collection</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            {/* Pagination du Hero */}
            <div className="flex gap-3">
              {menusSelectionnes.map((_, i) => (
                <button 
                  key={`dot-${i}`}
                  onClick={() => setIndexHero(i)}
                  className={`h-1 transition-all duration-1000 rounded-full ${indexHero === i ? 'w-12 bg-accent' : 'w-4 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Intro */}
      <section className="py-48 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-7xl text-primaire mb-10 italic">Une Signature, une Émotion.</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-14"></div>
          <p className="text-gray-500 text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Depuis 25 ans, Vite & Gourmand réinvente le service traiteur à Bordeaux. Chaque instant est une œuvre d'art, chaque bouchée un voyage sensoriel vers l'excellence.
          </p>
        </div>
      </section>

      {/* Section Paroles de Convives */}
      <section className="py-40 bg-primaire relative overflow-hidden min-h-[800px] flex items-center">
        <div className="absolute inset-0 z-0">
          {!chargement && (
            <img src={imagesIA.temoignages} className="w-full h-full object-cover opacity-20 brightness-50 grayscale" alt="Ambiance cuisine de luxe" />
          )}
        </div>
        <div className="absolute inset-0 motif-lys opacity-5 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="mb-24">
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 italic">Paroles de Convives</h2>
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-bold">L'Excellence vécue par nos hôtes</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-[1200ms] ease-in-out" 
                style={{ transform: `translateX(-${indexTemoignage * 100}%)` }}
              >
                {TEMOIGNAGES.map((t) => (
                  <div key={t.id} className="w-full flex-shrink-0 px-4 md:px-16">
                    <div className="bg-white/5 backdrop-blur-2xl border border-accent/10 p-16 md:p-24 rounded-[4rem] transition-all duration-700 hover:border-accent/40">
                      <div className="flex justify-center mb-12">
                        {[...Array(t.note)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-accent fill-current mx-1.5" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white font-serif italic text-3xl md:text-5xl leading-tight mb-16 px-4">"{t.avis}"</p>
                      <div className="inline-block pt-10 border-t border-accent/30">
                        <p className="text-white font-serif text-3xl mb-3">{t.nom}</p>
                        <p className="text-[11px] text-accent font-bold uppercase tracking-[0.4em]">Signature : {t.menu}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 gap-5">
            {TEMOIGNAGES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndexTemoignage(i)} 
                className={`h-1.5 transition-all duration-700 rounded-full ${indexTemoignage === i ? 'w-20 bg-accent' : 'w-6 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section finale avec carrousel de menus */}
      <section className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <h3 className="font-serif text-6xl md:text-8xl text-primaire leading-none italic">
              Prêt pour une expérience <br/>
              <span className="text-accent not-italic">inoubliable ?</span>
            </h3>
            <p className="text-gray-500 font-light text-2xl leading-relaxed">Nos maîtres d'hôtel et chefs transforment vos réceptions en moments de légende. Chaque détail est ciselé pour l'exception.</p>
            <div className="flex flex-wrap gap-8 pt-6">
              <button onClick={() => onNavigate('menus')} className="px-14 py-7 bg-primaire text-white text-[12px] font-bold tracking-widest uppercase rounded-sm hover:bg-accent transition-all shadow-2xl">Consulter la Carte</button>
              <button onClick={() => onNavigate('contact')} className="px-14 py-7 border border-primaire text-primaire text-[12px] font-bold tracking-widest uppercase rounded-sm hover:bg-primaire hover:text-white transition-all">Prendre Rendez-vous</button>
            </div>
          </div>
          
          <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] group">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-primaire/80 via-transparent to-transparent"></div>
            
            <div className="w-full h-full relative">
              {menusSelectionnes.map((menu, idx) => (
                <div 
                  key={`footer-carousel-${menu.identifiant}`}
                  className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${idx === indexPhotoMenu ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
                >
                  <img src={menu.image} className="w-full h-full object-cover img-vivante brightness-95" alt={menu.titre} />
                  <div className="absolute bottom-16 left-16 right-16 z-20 text-white">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">Collection Signature</span>
                    <h4 className="font-serif text-4xl italic leading-tight">{menu.titre}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-12 right-12 z-20 flex flex-col gap-3">
              {menusSelectionnes.map((_, i) => (
                <div key={`footer-dot-${i}`} className={`w-1.5 h-10 rounded-full transition-all duration-700 ${indexPhotoMenu === i ? 'bg-accent h-16' : 'bg-white/30'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
