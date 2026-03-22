import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20BA5A] transition-all duration-200 shadow-lg"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'click_whatsapp', {
                event_category: 'lead',
                event_label: 'botao_whatsapp_cta'
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Guincho Agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
