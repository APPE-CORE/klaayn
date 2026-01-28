"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, ShoppingBag, Cpu, Sparkles, 
  Zap, PenTool, Search, CheckCircle2, 
  Terminal, Globe, ShieldCheck, Activity, 
  Layers, BarChart3, ArrowRight
} from "lucide-react";

// --- TYPES & DATA ---

type ServiceId = "vitrine" | "ecommerce" | "saas";

interface Service {
  id: ServiceId;
  title: string;
  icon: React.ElementType;
  desc: string;
}

const SERVICES: Service[] = [
  { id: "vitrine", title: "Site Vitrine / Brand", icon: Monitor, desc: "Identité forte, WebGL, Animations." },
  { id: "ecommerce", title: "E-commerce", icon: ShoppingBag, desc: "Shopify/Next.js, Conversion, Performance." },
  { id: "saas", title: "App / SaaS", icon: Terminal, desc: "Dashboard, Outils Métier, Logiciel." },
];

const OPTIONS = [
  { id: "ai", title: "Intégration IA", icon: Cpu, desc: "Chatbots, Automation." },
  { id: "3d", title: "Expérience 3D", icon: Globe, desc: "Three.js, Immersion." },
  { id: "seo", title: "SEO Sémantique", icon: Search, desc: "Dominance Google." },
  { id: "copy", title: "Copywriting", icon: PenTool, desc: "Textes de vente." },
  { id: "maintenance", title: "Souveraineté", icon: ShieldCheck, desc: "Maintenance & Sécu." },
];

const BUDGETS = ["< de 5k", "5k - 10k", "10k - 20k", "+ de 20k"];
const TIMELINES = ["Urgent (< 1 mois)", "Normal (1-2 mois)", "Confortable (3+ mois)"];

export default function Contact() {
  // STATE MANAGEMENT
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string | null>>({}); 
  
  // FORM DATA
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: ""
  });

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(item => item !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
        setFormErrors({ ...formErrors, [e.target.name]: null });
    }
  };

  const handleSubmit = () => {
      const errors: Record<string, string> = {};
      
      if (!selectedService) errors.service = "Architecture requise.";
      if (!formData.email.includes("@")) errors.email = "Email invalide.";
      if (!formData.message) errors.message = "Message vide.";
      
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
          console.log("Transmission...", { selectedService, selectedOptions, budget, timeline, formData });
          alert("PROTOCOLE LANCÉ (Simulation)");
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  return (
    <main className="bg-void min-h-screen pt-32 pb-32 md:pt-40 md:pb-40">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-[0_0_15px_var(--color-brand)]"></span>
              <span className="text-label-tech text-brand">INITIALISATION DU PROJET</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-5xl md:text-7xl text-white mb-6"
          >
              Configurons votre <br />
              <span className="text-txt-muted">Avantage Déloyal.</span>
          </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 relative">
        
        {/* --- COLONNE GAUCHE : LE CONFIGURATEUR --- */}
        <div className="lg:col-span-8 flex flex-col gap-24 md:gap-32">
            
            {/* 1. ARCHITECTURE */}
            <section id="section-architecture">
                <NumberTitle number="01" title="Architecture" subtitle="Quel type de système construisons-nous ?" error={formErrors.service || undefined} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                    {SERVICES.map((service) => (
                        <div 
                            key={service.id}
                            onClick={() => {
                                setSelectedService(service.id);
                                if(formErrors.service) setFormErrors({...formErrors, service: null});
                            }}
                            className={`group cursor-pointer relative p-6 rounded-xl border transition-all duration-300 overflow-hidden flex flex-col items-center text-center md:items-start md:text-left
                            ${selectedService === service.id 
                                ? "border-brand bg-brand/5 shadow-[0_0_30px_rgba(124,31,172,0.15)]" 
                                : formErrors.service 
                                    ? "border-red-500/50 bg-red-500/5"
                                    : "border-white/10 bg-white/5 hover:border-brand/50 hover:bg-white/10"
                            }`}
                        >
                            <div className="w-full flex justify-between items-start mb-4">
                                <service.icon className={`transition-colors ${selectedService === service.id ? "text-brand" : "text-txt-muted group-hover:text-white"}`} size={24} />
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${selectedService === service.id ? "border-brand bg-brand" : "border-white/20"}`}>
                                    {selectedService === service.id && <CheckCircle2 size={12} className="text-white" />}
                                </div>
                            </div>
                            <h3 className="text-xl font-display text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-txt-muted leading-tight">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. UPGRADES */}
            <section>
                <NumberTitle number="02" title="Upgrades" subtitle="Ajoutez des modules de performance." />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                    {OPTIONS.map((opt) => (
                        <div 
                            key={opt.id}
                            onClick={() => toggleOption(opt.id)}
                            className={`cursor-pointer relative p-5 md:p-6 rounded-xl border transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left gap-3
                            ${selectedOptions.includes(opt.id)
                                ? "border-brand bg-brand/5" 
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                            }`}
                        >
                            <div className="w-full flex justify-between items-center">
                                <opt.icon size={20} className={selectedOptions.includes(opt.id) ? "text-brand" : "text-txt-muted"} />
                                {selectedOptions.includes(opt.id) && <motion.div initial={{scale:0}} animate={{scale:1}}><Sparkles size={14} className="text-brand"/></motion.div>}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{opt.title}</h4>
                                <p className="text-sm text-txt-muted mt-1 leading-tight">{opt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CALIBRATION */}
            <section>
                <NumberTitle number="03" title="Calibration" subtitle="Définissez les paramètres de la mission." />
                
                <div className="mt-8 md:mt-10 space-y-10">
                    {/* Budget */}
                    <div>
                        <label className="text-xs font-mono text-brand uppercase mb-4 block text-center md:text-left">Investissement Prévu</label>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {BUDGETS.map((b) => (
                                <button 
                                    key={b}
                                    onClick={() => setBudget(b)}
                                    className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300
                                    ${budget === b 
                                        ? "border-brand bg-brand text-white shadow-[0_0_20px_rgba(124,31,172,0.4)]" 
                                        : "border-white/10 bg-white/5 text-txt-muted hover:text-white hover:border-white/30"
                                    }`}
                                >
                                    {b}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <label className="text-xs font-mono text-brand uppercase mb-4 block text-center md:text-left">Horizon Temporel</label>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {TIMELINES.map((t) => (
                                <button 
                                    key={t}
                                    onClick={() => setTimeline(t)}
                                    className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300
                                    ${timeline === t 
                                        ? "border-brand bg-brand text-white shadow-[0_0_20px_rgba(124,31,172,0.4)]" 
                                        : "border-white/10 bg-white/5 text-txt-muted hover:text-white hover:border-white/30"
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. IDENTITÉ */}
            <section>
                <NumberTitle number="04" title="Pilote" subtitle="Qui prend les commandes ?" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10">
                    <Input name="firstname" label="Prénom" placeholder="Thomas" value={formData.firstname} onChange={handleInputChange} />
                    <Input name="lastname" label="Nom" placeholder="Anderson" value={formData.lastname} onChange={handleInputChange} />
                    
                    <Input 
                        name="email" 
                        label="Email Pro" 
                        placeholder="neo@matrix.com" 
                        type="email" 
                        fullWidth 
                        value={formData.email} 
                        onChange={handleInputChange}
                        error={formErrors.email || undefined}
                    />
                    
                    <Input name="company" label="Société" placeholder="MetaCortex Inc." fullWidth value={formData.company} onChange={handleInputChange} />
                    
                    <div className="md:col-span-2">
                        <label className="text-xs font-mono text-txt-muted uppercase mb-2 block ml-1 text-left">
                            Transmission (Message Personnel)
                            {formErrors.message && <span className="text-red-500 ml-2 animate-pulse">* Requis</span>}
                        </label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className={`w-full bg-white/5 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all resize-none text-left
                            ${formErrors.message 
                                ? "border border-red-500 focus:border-red-500 focus:ring-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]" 
                                : "border border-white/10 focus:border-brand focus:ring-brand"
                            }`}
                            placeholder="Détaillez votre vision, vos cibles, vos ambitions..."
                        />
                    </div>
                </div>
            </section>

            {/* SUBMIT SECTION (MOBILE SEULEMENT) */}
            <div className="pt-6 pb-12 space-y-10 lg:hidden">
                {/* Mobile Summary */}
                <div>
                    <SummaryCard 
                        selectedService={selectedService} 
                        selectedOptions={selectedOptions} 
                        budget={budget} 
                        timeline={timeline} 
                    />
                </div>

                <div className="flex flex-col items-center md:items-start w-full">
                    
                    {/* LE CTA FINAL - Design Orange & Non-Uppercase */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      className="group relative w-full md:w-auto flex items-center justify-between gap-8 pl-6 pr-6 py-5 rounded-xl transition-all duration-300 overflow-hidden
                        border border-white/10 bg-white/5 
                        
                        /* --- ÉTAT HOVER (PC) - ORANGE --- */
                        hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                        
                        /* --- ÉTAT ACTIVE (MOBILE TOUCH) - ORANGE --- */
                        active:border-orange-500 active:bg-orange-500/10 active:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                      "
                    >
                          {/* Effet Shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                          {/* Contenu */}
                          <div className="flex flex-col items-start relative z-10 overflow-hidden">
                              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-orange-500 transition-colors duration-300">
                                  Action
                              </span>
                              <span className="text-lg md:text-xl font-bold font-sans text-white tracking-wide group-hover:text-white transition-colors duration-300 mt-1 whitespace-nowrap">
                                  Lancer le protocole
                              </span>
                          </div>

                          {/* Icône ArrowRight (Rotation pure) */}
                          <div className="relative z-10 shrink-0">
                              <ArrowRight 
                                size={28} 
                                className="text-white/70 group-hover:text-white transition-all duration-500 ease-out 
                                group-hover:-rotate-45" 
                              />
                          </div>

                    </motion.button>

                    <p className="mt-6 text-xs text-txt-muted text-center md:text-left flex items-center justify-center md:justify-start gap-2 w-full">
                        <Zap size={12} className="text-brand"/> Réponse sous 24h ouvrées. Confidentialité garantie.
                    </p>
                </div>
            </div>

        </div>

        {/* --- COLONNE DROITE : LE RÉCAPITULATIF (PC ONLY - STICKY) --- */}
        <div className="hidden lg:block lg:col-span-4 relative h-full">
            {/* MODIFICATION : -mt-[20px] pour rehausser de 10px supplémentaires */}
            <div className="sticky top-36 w-full space-y-6 -mt-[20px]">
                
                {/* 1. LA CARTE RECAP */}
                <SummaryCard 
                    selectedService={selectedService} 
                    selectedOptions={selectedOptions} 
                    budget={budget} 
                    timeline={timeline} 
                />

                {/* 2. LE BOUTON D'ENVOI (PC SEULEMENT) */}
                <div className="flex flex-col items-center w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      className="group relative w-full flex items-center justify-between gap-8 pl-6 pr-6 py-5 rounded-xl transition-all duration-300 overflow-hidden
                        border border-white/10 bg-white/5 
                        
                        /* --- ÉTAT HOVER (PC) - ORANGE --- */
                        hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                        
                        /* --- ÉTAT ACTIVE (MOBILE TOUCH) - ORANGE --- */
                        active:border-orange-500 active:bg-orange-500/10 active:shadow-[0_0_20px_rgba(249,115,22,0.4)]
                      "
                    >
                          {/* Effet Shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                          {/* Contenu */}
                          <div className="flex flex-col items-start relative z-10 overflow-hidden">
                              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest group-hover:text-orange-500 transition-colors duration-300">
                                  Action
                              </span>
                              <span className="text-lg md:text-xl font-bold font-sans text-white tracking-wide group-hover:text-white transition-colors duration-300 mt-1 whitespace-nowrap">
                                  Lancer le protocole
                              </span>
                          </div>

                          {/* Icône ArrowRight */}
                          <div className="relative z-10 shrink-0">
                              <ArrowRight 
                                size={28} 
                                className="text-white/70 group-hover:text-white transition-all duration-500 ease-out 
                                group-hover:-rotate-45" 
                              />
                          </div>

                    </motion.button>

                    {/* Texte de réassurance centré */}
                    <p className="mt-4 text-xs text-txt-muted text-center flex items-center justify-center gap-2 w-full">
                        <Zap size={12} className="text-brand"/> Réponse sous 24h ouvrées. Confidentialité garantie.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </main>
  );
}

// --- SOUS-COMPOSANTS ---

function NumberTitle({ number, title, subtitle, error }: { number: string, title: string, subtitle: string, error?: string }) {
    return (
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-4">
            <span className={`text-sm font-mono pt-1 opacity-60 ${error ? "text-red-500" : "text-brand"}`}>/{number}</span>
            <div>
                <h2 className={`text-2xl md:text-3xl font-display ${error ? "text-red-500" : "text-white"}`}>
                    {title} {error && <span className="text-sm font-mono ml-2 text-red-500 animate-pulse">! {error}</span>}
                </h2>
                <p className="text-txt-muted text-sm mt-1 leading-relaxed max-w-md">{subtitle}</p>
            </div>
        </div>
    );
}

interface InputProps {
    label: string;
    placeholder: string;
    type?: string;
    fullWidth?: boolean;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function Input({ label, placeholder, type = "text", fullWidth = false, name, value, onChange, error }: InputProps) {
    return (
        <div className={fullWidth ? "md:col-span-2" : ""}>
            <label className="text-xs font-mono text-txt-muted uppercase mb-2 block ml-1 text-left">
                {label}
                {error && <span className="text-red-500 ml-2 animate-pulse">* {error}</span>}
            </label>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full bg-white/5 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-all text-left
                ${error 
                    ? "border border-red-500 focus:border-red-500 focus:ring-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]" 
                    : "border border-white/10 focus:border-brand focus:ring-brand"
                }`}
            />
        </div>
    );
}

// --- SUMMARY CARD COMPONENT (MODIFIÉ : SANS GRAIN) ---
function SummaryCard({ selectedService, selectedOptions, budget, timeline }: any) {
    const currentServiceObject = SERVICES.find(s => s.id === selectedService);

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#101010] shadow-2xl"
        >
            {/* TEXTURE REMOVED (Grain removed as requested) */}
            {/* Seul le Glow est conservé pour la profondeur, mais sans le bruit */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            {/* HEADER */}
            <div className="relative border-b border-white/5 px-6 py-5 flex items-center justify-between bg-white/[0.02]">
                 <div className="flex items-center gap-3">
                    <Activity size={16} className="text-brand animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                        PROJECT_SCOPE
                    </span>
                 </div>
                 <div className="flex items-center gap-1.5 opacity-50">
                     <div className="w-1 h-1 rounded-full bg-white"></div>
                     <div className="w-1 h-1 rounded-full bg-white"></div>
                     <div className="w-1 h-1 rounded-full bg-white"></div>
                 </div>
            </div>

            {/* CORPS */}
            <div className="relative p-6 space-y-8">
                
                {/* 1: ARCHITECTURE */}
                <div className="space-y-3">
                    <span className="text-[10px] font-mono text-txt-muted uppercase flex items-center gap-2">
                        <Layers size={10} /> Architecture Core
                    </span>
                    
                    {currentServiceObject ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            key={selectedService || "empty"}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                                <currentServiceObject.icon size={20} className="text-brand" />
                            </div>
                            <div>
                                <div className="text-base font-bold text-white leading-tight">
                                    {currentServiceObject.title}
                                </div>
                                <div className="text-[10px] text-txt-muted mt-1 font-mono">
                                    ID: {currentServiceObject.id.toUpperCase()}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="p-4 rounded-lg border border-white/5 border-dashed flex items-center justify-center text-txt-muted text-xs font-mono italic h-[74px]">
                            // En attente de sélection...
                        </div>
                    )}
                </div>

                {/* 2: MODULES */}
                <div className="space-y-3">
                    <span className="text-[10px] font-mono text-txt-muted uppercase flex items-center gap-2">
                        <Cpu size={10} /> Modules Installés
                    </span>
                    
                    <div className="min-h-[60px] flex flex-col gap-2">
                        <AnimatePresence mode="popLayout">
                            {selectedOptions.length > 0 ? (
                                selectedOptions.map((optId: string) => (
                                    <motion.div 
                                        key={optId}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="flex items-center justify-between text-sm py-1.5 border-b border-white/5 last:border-0"
                                    >
                                        <span className="text-white/80 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand rounded-full"></span>
                                            {OPTIONS.find(o => o.id === optId)?.title}
                                        </span>
                                        <CheckCircle2 size={12} className="text-white/20" />
                                    </motion.div>
                                ))
                            ) : (
                                <span className="text-white/20 text-xs font-mono py-2">-- Aucun module additionnel --</span>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3: GRID */}
                <div className="grid grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/5">
                    <div className="bg-[#080808] p-3 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-txt-muted uppercase">Investissement</span>
                        <span className={`text-sm font-bold ${budget ? "text-white" : "text-white/30"}`}>
                            {budget || "---"}
                        </span>
                    </div>
                    <div className="bg-[#080808] p-3 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-txt-muted uppercase">Délai Est.</span>
                        <span className={`text-sm font-bold ${timeline ? "text-white" : "text-white/30"}`}>
                            {timeline ? timeline.split('(')[0].trim() : "---"}
                        </span>
                    </div>
                </div>

                {/* 4: STATUS */}
                <div className={`mt-2 rounded px-3 py-2 flex items-center justify-between border ${
                    selectedService && budget 
                    ? "bg-brand/10 border-brand/20" 
                    : "bg-white/5 border-white/5"
                }`}>
                     <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${selectedService && budget ? "bg-brand animate-pulse" : "bg-red-500"}`}></div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${selectedService && budget ? "text-brand" : "text-txt-muted"}`}>
                            {selectedService && budget ? "SYSTEM_READY" : "AWAITING_INPUT"}
                        </span>
                     </div>
                     {selectedService && budget && <BarChart3 size={12} className="text-brand" />}
                </div>

            </div>
        </motion.div>
    );
}