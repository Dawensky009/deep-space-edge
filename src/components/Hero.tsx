import { Zap, Send } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Mesh gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Sispann Parye, Kòmanse Envesti.{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fè Done yo Travay pou Ou.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          Daky AI analize plis pase 10,000 match chak jou pou detekte opòtinite kote bookmakers yo fè erè. Objektif nou?{' '}
          <span className="font-semibold text-secondary">$400 pa jou</span> nan pòch ou.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="animate-pulse-glow flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Zap size={22} />
            Jwenn Aksè VIP Kounye a
          </a>
          <a
            href="https://t.me/naparye_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-105 hover:bg-primary/20"
          >
            <Send size={22} />
            Telegram Bot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
