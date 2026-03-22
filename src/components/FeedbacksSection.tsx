import { motion } from "framer-motion";

const feedbackImages = [
  { src: "/images/ricardo-branco/RICARDOBRANCO-SITE03.jpeg", alt: "Atendimento de guincho Ricardo Branco 1" },
  { src: "/images/ricardo-branco/RICARDOBRANCO-SITE04.jpeg", alt: "Atendimento de guincho Ricardo Branco 2" },
  { src: "/images/ricardo-branco/RICARDOBRANCO-SITE05.jpeg", alt: "Atendimento de guincho Ricardo Branco 3" },
  { src: "/images/ricardo-branco/RICARDOBRANCO-SITE06.jpeg", alt: "Atendimento de guincho Ricardo Branco 4" },
  { src: "/images/ricardo-branco/RICARDOBRANCO-SITE07.jpeg", alt: "Atendimento de guincho Ricardo Branco 5" },
];

const FeedbacksSection = () => (
  <section id="feedbacks" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Mais <span className="text-gradient">Atendimentos Reais</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Registros de reboque e socorro veicular executados com profissionalismo e agilidade em Volta Redonda e região.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {feedbackImages.slice(0, 3).map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto w-full">
          {feedbackImages.slice(3).map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index + 3) * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeedbacksSection;
