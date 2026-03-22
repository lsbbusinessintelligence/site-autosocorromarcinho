import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/siteConfig";

const PHONE_URL = `tel:+55${PHONE_NUMBER}`;

const CtaSection = () => (
  <section id="contato" className="hero-gradient py-20 md:py-28 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Precisa de guincho? Estamos aqui 24 horas!
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          Entre em contato com o Auto Socorro Marcinho para reboque seguro, rápido e com preço justo em Itú e toda a região.
        </p>
        <a
          href={PHONE_URL}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#BFEFFF] text-black font-semibold text-lg hover:bg-[#A8D8EA] transition-all duration-200 shadow-lg"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'click_call', {
                event_category: 'lead',
                event_label: 'botao_ligar_cta'
              });
            }
          }}
        >
          <Phone className="w-5 h-5" />
          Solicitar Guincho Agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
