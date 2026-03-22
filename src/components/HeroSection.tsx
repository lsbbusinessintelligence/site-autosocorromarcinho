import { motion } from "framer-motion";
import { MessageCircle, Check, Truck, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const HeroSection = () => (
  <section id="home" className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center scroll-mt-28">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5 rounded-full bg-white/10 border border-white/20 px-3 py-2">
            <img
              src="/images/marcinho-guincho/MARCINHO-LOGO.png"
              alt="Logo Auto Socorro Marcinho Guincho"
              className="w-12 h-12 rounded-full object-contain bg-white p-1 border border-white/40"
            />
            <span className="text-xs md:text-sm text-primary-foreground/90 font-medium">
              Marcinho Guincho | Reboque 24 Horas
            </span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Truck className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Auto Socorro e Guincho 24 Horas em Itú e Região
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl">
            Reboque especializado para carros e motos com atendimento ágil e seguro. A confiança que você precisa na hora do aperto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20BA5A] transition-all duration-200 shadow-lg"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_whatsapp', {
                  event_category: 'lead',
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Guincho Agora
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento 24 horas em Itú e toda a região
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Reboque especializado para carros e motos
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Preço justo e transparente, sem surpresas
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Segurança e cuidado com seu veículo
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
        >
          <div className="bg-[#1a0f00] rounded-3xl shadow-2xl p-6 max-w-md border border-[#3a2000]">
            <div className="relative overflow-hidden rounded-2xl bg-[#1a0f00]">
              <img
                src="/images/marcinho-guincho/MARCINHOFOTOSITE01.jpeg"
                alt="Serviço de guincho Marcinho"
                className="w-full h-auto"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-[#1a0f00] mt-4">
              <img
                src="/images/marcinho-guincho/MARCINHOFOTOSITE02.jpeg"
                alt="Reboque profissional Marcinho Guincho"
                className="w-full h-auto"
              />
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-white font-semibold text-base mb-2">
                "Atendimento rápido e profissional!"
              </p>
              <p className="text-white/60 text-sm">
                52 avaliações com nota 4.9 no Google
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-card/90 border border-accent/20 px-5 py-2 text-sm text-foreground shadow">
            <ShieldCheck className="w-4 h-4 text-accent" />
            Reboque seguro e ágil, 24 horas por dia
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
