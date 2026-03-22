import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const reviewImages = [
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO01.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 1" },
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO02.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 2" },
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO03.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 3" },
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO04.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 4" },
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO05.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 5" },
  { src: "/images/marcinho-guincho/MARCINHOAVALIACAO06.jpeg", alt: "Avaliação real de cliente - Marcinho Guincho 6" },
];

const TestimonialsSection = () => (
  <section id="avaliacoes" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Depoimentos de <span className="text-gradient">Clientes Reais</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Clientes satisfeitos com nosso atendimento 24h em Itú — 52 avaliações com nota 4.9 no Google.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 font-semibold text-foreground">
            <span className="text-yellow-500">★★★★★</span>
            Nota 4.9 no Google
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-muted-foreground">
            52 avaliações de clientes reais
          </span>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3">
        {reviewImages.map((img, index) => (
          <motion.figure
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-2xl bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "click_whatsapp", {
                event_category: "lead",
                event_label: "botao_whatsapp_depoimentos",
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

export default TestimonialsSection;
