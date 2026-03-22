import { motion } from "framer-motion";
import { Truck, Wrench, BatteryCharging, Zap, Car, Bike } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Reboque de Carros",
    desc: "Reboque completo e seguro para carros com profissionais treinados, disponível 24h em Itú e região.",
  },
  {
    icon: Bike,
    title: "Reboque de Motocicletas",
    desc: "Cuidado especial no transporte de motos, com equipamento adequado e total segurança para sua moto.",
  },
  {
    icon: Truck,
    title: "Auto Socorro 24h",
    desc: "Atendimento de emergência 24 horas para qualquer situação. Ligou, atendemos.",
  },
  {
    icon: Zap,
    title: "Auxílio para Pane Elétrica",
    desc: "Diagnóstico e suporte em situações de pane elétrica para retomar sua viagem com segurança.",
  },
  {
    icon: BatteryCharging,
    title: "Recarga de Bateria (Chupeta)",
    desc: "Recarga rápida de bateria no local, sem precisar acionar reboque na maioria dos casos.",
  },
  {
    icon: Wrench,
    title: "Troca de Pneus",
    desc: "Troca de pneus com rapidez e segurança na sua localização atual, sem espera.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Soluções completas de reboque e auto socorro para atender com rapidez em Itú e toda a região.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
