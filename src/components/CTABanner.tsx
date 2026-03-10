import { Zap, Send, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      {/* Gradient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-secondary/8 blur-[100px]" />
      </div>

      <div className="container relative mx-auto max-w-3xl text-center">
        <div className="reveal glass-strong rounded-3xl p-10 md:p-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            <Zap size={14} />
            Lè a rive pou ou aji
          </div>

          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Kite Lòt Moun{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Devine
            </span>
            . Ou Menm,{' '}
            <span className="text-primary">Envesti</span>.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Chak jou ki pase san Daky AI se lajan ki pèdi. Rejwenn 500+ manm ki ap fè lajan entelijan deja.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="animate-pulse-glow flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <Zap size={20} />
              Jwenn Aksè VIP
              <ArrowRight size={18} />
            </a>
            <a
              href="https://t.me/naparye_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-8 py-4 font-display text-lg font-bold text-primary transition-all hover:scale-105 hover:bg-primary/20"
            >
              <Send size={20} />
              Eseye Bot la Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
