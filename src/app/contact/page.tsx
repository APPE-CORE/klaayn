"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, ShoppingBag, Cpu, Sparkles, 
  Zap, PenTool, Search, CheckCircle2, 
  Terminal, Globe, ShieldCheck, Activity, 
  Layers, Send
} from "lucide-react";
import Button from "@/components/ui/Button";

// --- TYPES & DATA ---

type ServiceId = "vitrine" | "ecommerce" | "saas";

interface Service {
  id: ServiceId;
  title: string;
  icon: React.ElementType;
  desc: string;
}

const SERVICES: Service[] = [
  { id: "vitrine", title: "Site Vitrine / Brand", icon: Monitor, desc: "Identité forte, React, Next.js, Branding" },
  { id: "ecommerce", title: "E-commerce", icon: ShoppingBag, desc: "Shopify, Conversion, ROI, Performance." },
  { id: "saas", title: "App / SaaS", icon: Terminal, desc: "Dashboard, Outils Métier, Logiciel." },
];

const OPTIONS = [
  { id: "ai", title: "Intégration IA", icon: Cpu, desc: "Chatbots, Automation." },
  { id: "3d", title: "Expérience 3D", icon: Globe, desc: "Three.js, Immersion." },
  { id: "seo", title: "SEO Sémantique", icon: Search, desc: "Dominance Google." },
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

  const isReady = Boolean(
      selectedService && 
      budget && 
      timeline && 
      formData.firstname.trim() !== "" && 
      formData.lastname.trim() !== "" && 
      formData.email.trim() !== "" && 
      formData.company.trim() !== "" &&
      formData.message.trim() !== ""
  );

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
    <main className="bg-[var(--color-void)] min-h-screen pt-32 pb-32 md:pt-40 md:pb-40 text-[var(--color-txt-main)]">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 mb-16 md:mb-24 flex flex-col items-center text-center overflow-visible">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="badge-pill mb-6 flex items-center gap-2.5 px-4 py-1.5"
          >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]"></span>
              <span className="text-label-tech text-[var(--color-txt-main)] opacity-90">INITIALISATION</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-[var(--color-txt-main)] pb-4"
          >
              Configurons <br className="md:hidden" />
              <span 
                className="inline-block pb-2 pr-2"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--color-brand), var(--color-action))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                votre projet !
              </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-large text-[var(--color-txt-muted)] max-w-2xl"
          >
            Chaque détail compte. Précisez vos besoins ci-dessous pour que nous puissions concevoir une architecture calibrée sur vos objectifs.
          </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
        
        {/* --- COLONNE GAUCHE : LE CONFIGURATEUR --- */}
        <div className="lg:col-span-8 flex flex-col gap-20 md:gap-28">
            
            {/* 1. ARCHITECTURE */}
            <section id="section-architecture">
                <SectionTitle title="Architecture" subtitle="Quel type de système construisons-nous ?" error={formErrors.service || undefined} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {SERVICES.map((service) => (
                        <div 
                            key={service.id}
                            onClick={() => {
                                setSelectedService(service.id);
                                if(formErrors.service) setFormErrors({...formErrors, service: null});
                            }}
                            className={`group cursor-pointer relative p-6 rounded-[var(--radius-card)] border transition-all duration-300 overflow-hidden flex flex-col items-start text-left
                            ${selectedService === service.id 
                                ? "border-[var(--color-brand)] bg-[var(--color-brand)]/5" 
                                : formErrors.service 
                                    ? "border-red-500/50 bg-red-500/5"
                                    : "border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] hover:border-[var(--color-txt-dim)] hover:bg-[var(--color-surface)]/[0.05]"
                            }`}
                        >
                            <div className="w-full flex justify-between items-start mb-6">
                                <service.icon className={`transition-colors duration-300 ${selectedService === service.id ? "text-[var(--color-brand)]" : "text-[var(--color-txt-dim)] group-hover:text-[var(--color-txt-main)]"}`} size={22} strokeWidth={1.5} />
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${selectedService === service.id ? "border-[var(--color-brand)] bg-[var(--color-brand)]" : "border-[var(--color-border)]"}`}>
                                    {selectedService === service.id && <CheckCircle2 size={10} className="text-[var(--color-txt-main)]" />}
                                </div>
                            </div>
                            <h3 className="text-h4 text-[var(--color-txt-main)] mb-2">{service.title}</h3>
                            <p className="text-body-sm text-[var(--color-txt-muted)]">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. UPGRADES */}
            <section>
                <SectionTitle title="Upgrades" subtitle="Ajoutez des modules de performance à votre système." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {OPTIONS.map((opt) => (
                        <div 
                            key={opt.id}
                            onClick={() => toggleOption(opt.id)}
                            className={`cursor-pointer relative p-4 md:p-5 rounded-[var(--radius-card)] border transition-all duration-300 flex items-start gap-4 text-left
                            ${selectedOptions.includes(opt.id)
                                ? "border-[var(--color-brand)] bg-[var(--color-brand)]/5" 
                                : "border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] hover:border-[var(--color-txt-dim)] hover:bg-[var(--color-surface)]/[0.05]"
                            }`}
                        >
                            <div className={`mt-0.5 transition-colors ${selectedOptions.includes(opt.id) ? "text-[var(--color-brand)]" : "text-[var(--color-txt-dim)]"}`}>
                                <opt.icon size={20} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-body text-[var(--color-txt-main)]">{opt.title}</h4>
                                    {selectedOptions.includes(opt.id) && <motion.div initial={{scale:0}} animate={{scale:1}}><Sparkles size={14} className="text-[var(--color-brand)]"/></motion.div>}
                                </div>
                                <p className="text-body-sm text-[var(--color-txt-muted)]">{opt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CALIBRATION */}
            <section>
                <SectionTitle title="Calibration" subtitle="Définissez les paramètres de la mission." />
                
                <div className="space-y-10">
                    {/* Budget */}
                    <div>
                        <label className="text-label-tech text-[var(--color-txt-dim)] mb-4 block">Investissement Prévu</label>
                        <div className="flex flex-wrap gap-3">
                            {BUDGETS.map((b) => (
                                <button 
                                    key={b}
                                    onClick={() => setBudget(b)}
                                    className={`px-6 py-3.5 rounded-[var(--radius-card)] text-body transition-all duration-300 border
                                    ${budget === b 
                                        ? "border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-txt-main)]" 
                                        : "border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] text-[var(--color-txt-dim)] hover:text-[var(--color-txt-main)] hover:border-[var(--color-txt-dim)] hover:bg-[var(--color-surface)]/[0.05]"
                                    }`}
                                >
                                    {b}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <label className="text-label-tech text-[var(--color-txt-dim)] mb-4 block">Horizon Temporel</label>
                        <div className="flex flex-wrap gap-3">
                            {TIMELINES.map((t) => (
                                <button 
                                    key={t}
                                    onClick={() => setTimeline(t)}
                                    className={`px-6 py-3.5 rounded-[var(--radius-card)] text-body transition-all duration-300 border
                                    ${timeline === t 
                                        ? "border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-txt-main)]" 
                                        : "border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] text-[var(--color-txt-dim)] hover:text-[var(--color-txt-main)] hover:border-[var(--color-txt-dim)] hover:bg-[var(--color-surface)]/[0.05]"
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
                <SectionTitle title="Pilote" subtitle="À qui avons-nous l'honneur ?" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                        <label className="text-label-tech text-[var(--color-txt-muted)] mb-2 block text-left">
                            Transmission
                            {formErrors.message && <span className="text-red-500 ml-2 animate-pulse">* Requis</span>}
                        </label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            // MISE À JOUR : Ajout de hover:border-[var(--color-txt-dim)]
                            className={`w-full bg-[var(--color-surface)]/[0.02] rounded-[var(--radius-card)] p-5 text-body text-[var(--color-txt-main)] placeholder-[var(--color-txt-dim)] focus:outline-none transition-all resize-none text-left
                            ${formErrors.message 
                                ? "border border-red-500 focus:border-red-500 focus:ring-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                                : "border border-[var(--color-border)] hover:border-[var(--color-txt-dim)] focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
                            }`}
                            placeholder="Détaillez votre vision, vos cibles, vos ambitions..."
                        />
                    </div>
                </div>
            </section>

            {/* SUBMIT SECTION (MOBILE SEULEMENT) */}
            <div className="pt-2 pb-12 space-y-10 lg:hidden">
                <div>
                    <SummaryCard 
                        selectedService={selectedService} 
                        selectedOptions={selectedOptions} 
                        budget={budget} 
                        timeline={timeline}
                        isReady={isReady} 
                    />
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="w-full px-6">
                        <Button onClick={handleSubmit} icon={Send} className="w-full justify-center">Transmettre les paramètres</Button>
                    </div>
                    <p className="mt-6 text-body-sm text-[var(--color-txt-dim)] text-center flex items-center justify-center gap-2 w-full">
                        <Zap size={12} className="text-[var(--color-brand)]"/> Réponse sous 24h ouvrées. Confidentialité absolue.
                    </p>
                </div>
            </div>

        </div>

        {/* --- COLONNE DROITE : LE RÉCAPITULATIF (PC ONLY - STICKY) --- */}
        <div className="hidden lg:block lg:col-span-4 relative h-full">
            <div className="sticky top-36 w-full space-y-6">
                
                <SummaryCard 
                    selectedService={selectedService} 
                    selectedOptions={selectedOptions} 
                    budget={budget} 
                    timeline={timeline}
                    isReady={isReady} 
                />

                <div className="flex flex-col items-center w-full pt-4">
                    <div className="w-full px-6">
                        <Button onClick={handleSubmit} icon={Send} className="w-full justify-center">Transmettre les paramètres</Button>
                    </div>
                    <p className="mt-5 text-body-sm text-[var(--color-txt-dim)] text-center flex items-center justify-center gap-2 w-full">
                        <Zap size={12} className="text-[var(--color-brand)]"/> Réponse sous 24h ouvrées.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </main>
  );
}

// --- SOUS-COMPOSANTS PURIFIÉS ---

function SectionTitle({ title, subtitle, error }: { title: string, subtitle: string, error?: string }) {
    return (
        <div className="flex flex-col mb-8">
            <h2 className={`text-h2 ${error ? "text-red-500" : "text-[var(--color-txt-main)]"} flex items-center gap-3 mb-2`}>
                {title} {error && <span className="text-body-sm font-mono text-red-500 animate-pulse">! {error}</span>}
            </h2>
            <p className="text-body text-[var(--color-txt-muted)]">{subtitle}</p>
            <div className="w-full h-[1px] bg-[var(--color-border)] mt-6" />
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
            <label className="text-label-tech text-[var(--color-txt-muted)] mb-2 block text-left">
                {label}
                {error && <span className="text-red-500 ml-2 animate-pulse">* {error}</span>}
            </label>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                // MISE À JOUR : Ajout de hover:border-[var(--color-txt-dim)]
                className={`w-full bg-[var(--color-surface)]/[0.02] rounded-[var(--radius-card)] px-5 py-4 text-body text-[var(--color-txt-main)] placeholder-[var(--color-txt-dim)] focus:outline-none transition-all text-left
                ${error 
                    ? "border border-red-500 focus:border-red-500 focus:ring-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]" 
                    : "border border-[var(--color-border)] hover:border-[var(--color-txt-dim)] focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]"
                }`}
            />
        </div>
    );
}

function SummaryCard({ selectedService, selectedOptions, budget, timeline, isReady }: any) {
    const currentServiceObject = SERVICES.find(s => s.id === selectedService);

    return (
        <div className="relative w-full rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] overflow-hidden">
            
            {/* Header du Panel */}
            <div className="border-b border-[var(--color-border)] px-6 py-5 flex items-center justify-between bg-[var(--color-surface)]/[0.02]">
                 <div className="flex items-center gap-3">
                    <Activity size={16} className="text-[var(--color-brand)]" />
                    <span className="text-label-bold text-[var(--color-txt-main)]">
                        Récapitulatif
                    </span>
                 </div>
            </div>

            <div className="p-6 space-y-8">
                
                {/* Architecture */}
                <div className="space-y-3">
                    <span className="text-label-tech text-[var(--color-txt-dim)] flex items-center gap-2">
                        <Layers size={12} /> Architecture
                    </span>
                    
                    {currentServiceObject ? (
                        <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
                            <span className="text-body text-[var(--color-txt-main)]">{currentServiceObject.title}</span>
                            <currentServiceObject.icon size={16} className="text-[var(--color-brand)]" />
                        </div>
                    ) : (
                        <div className="py-5 mt-2 flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/[0.02] text-[var(--color-txt-dim)] transition-all">
                            <Layers size={20} className="mb-2 opacity-40" />
                            <span className="text-body-sm font-mono italic">// En attente...</span>
                        </div>
                    )}
                </div>

                {/* Options */}
                <div className="space-y-3">
                    <span className="text-label-tech text-[var(--color-txt-dim)] flex items-center gap-2">
                        <Cpu size={12} /> Modules
                    </span>
                    
                    <div className="min-h-[40px] flex flex-col gap-2">
                        <AnimatePresence mode="popLayout">
                            {selectedOptions.length > 0 ? (
                                selectedOptions.map((optId: string) => (
                                    <motion.div 
                                        key={optId}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="flex items-center justify-between text-body-sm py-1"
                                    >
                                        <span className="text-[var(--color-txt-muted)] flex items-center gap-2">
                                            <span className="text-[var(--color-txt-dim)] opacity-50 font-mono">-</span>
                                            {OPTIONS.find(o => o.id === optId)?.title}
                                        </span>
                                        <CheckCircle2 size={14} className="text-[var(--color-brand)]" />
                                    </motion.div>
                                ))
                            ) : (
                                <span className="text-[var(--color-txt-dim)] text-body-sm font-mono py-1 italic">-- Aucun --</span>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Métriques (Budget & Time) */}
                <div className="pt-4 border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-label-tech text-[var(--color-txt-dim)]">Budget</span>
                        <span className={`text-body ${budget ? "text-[var(--color-txt-main)]" : "text-[var(--color-txt-dim)] font-mono italic"}`}>
                            {budget || "---"}
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-label-tech text-[var(--color-txt-dim)]">Timeline</span>
                        <span className={`text-body ${timeline ? "text-[var(--color-txt-main)]" : "text-[var(--color-txt-dim)] font-mono italic"}`}>
                            {timeline ? timeline.split('(')[0].trim() : "---"}
                        </span>
                    </div>
                </div>

                {/* Status Bar */}
                <div className={`mt-4 rounded-[var(--radius-card)] px-4 py-3 flex items-center justify-center border transition-colors duration-500 ${
                    isReady 
                    ? "bg-[var(--color-main-ecom)]/5 border-[var(--color-main-ecom)]/30" 
                    : "bg-[var(--color-action)]/5 border-[var(--color-action)]/30"
                }`}>
                    <span className={`text-label-bold text-center ${isReady ? "text-[var(--color-main-ecom)]" : "text-[var(--color-action)]"}`}>
                        {isReady ? "Prêt pour transmission" : "En attente de paramètres"}
                    </span>
                </div>

            </div>
        </div>
    );
}