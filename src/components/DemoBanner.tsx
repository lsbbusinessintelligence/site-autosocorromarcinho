import { Phone, Zap } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 border-b border-primary/25 backdrop-blur-sm">
      <div className="container py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary flex-shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-foreground">
              <span className="font-semibold">Socorro 24 horas:</span> ligue agora para a Ricardo Branco Guincho.
              <span className="hidden sm:inline"> Reboque rápido em Volta Redonda, Barra Mansa e região.</span>
            </p>
          </div>
          <a
            href="tel:+5524981236037"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#BFEFFF] hover:bg-[#A8D8EA] text-black font-semibold text-sm rounded-md transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_call', {
                  event_category: 'lead',
                  event_label: 'demo_banner_ligar'
                });
              }
            }}
          >
            <Phone className="w-4 h-4" />
            Ligar agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;
