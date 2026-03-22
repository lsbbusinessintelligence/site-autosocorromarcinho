const items = [
  { label: "Home", href: "#home" },
  { label: "Nossos Servicos", href: "#servicos" },
  { label: "Por que contratar", href: "#porque" },
  { label: "Trabalhos", href: "#obras" },
  { label: "Depoimentos", href: "#avaliacoes" },
  { label: "Fale Conosco", href: "#contato" },
];

const TopSectionsNav = () => (
  <div className="fixed top-0 inset-x-0 z-40 border-b border-white/20 bg-primary/90 backdrop-blur-md">
    <div className="container py-3">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <a
          href="#home"
          className="shrink-0 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 p-1"
          aria-label="Ir para o topo"
        >
          <img
            src="/images/marcinho-guincho/MARCINHO-LOGO.png"
            alt="Logo Auto Socorro Marcinho Guincho"
            className="w-[3rem] h-[3rem] rounded-full object-contain bg-white p-1"
          />
        </a>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 inline-flex items-center justify-center text-center rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground transition hover:bg-white hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopSectionsNav;
