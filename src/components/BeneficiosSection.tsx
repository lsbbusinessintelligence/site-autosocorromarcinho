import { motion } from "framer-motion";
import { Star, MapPin, Shield, DollarSign } from "lucide-react";

const benefits = [
  { icon: Star, title: "Nota 4.9 no Google", desc: "52 avaliações com nota 4.9 — alta satisfação de clientes reais em Itú e região." },
  { icon: MapPin, title: "Atendimento em Itú e Região", desc: "Cobertura completa em Itú e toda a região com chegada rápida aonde você estiver." },
  { icon: Shield, title: "Cuidado Especial com Motos", desc: "Equipamento e expertise para rebocar motocicletas com total segurança e atenção." },
  { icon: DollarSign, title: "Transparência no Orçamento", desc: "Preço justo e sem surpresas. Orçamento claro antes de qualquer atendimento." },
];

const BeneficiosSection = () => (
  <section id="porque" className="py-20 md:py-28 bg-secondary/50 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Por que escolher o <span className="text-gradient">Auto Socorro Marcinho?</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 mx-auto">
              <b.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;
