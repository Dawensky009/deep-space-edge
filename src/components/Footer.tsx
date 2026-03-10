import { Send, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-bold text-foreground">
              Daky <span className="text-primary">AI</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI-powered sports analytics. Sispann devine, kòmanse envesti ak done.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 font-display text-sm font-semibold text-foreground">Navigasyon</p>
            <div className="flex flex-col gap-2.5">
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary">Features</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-primary">Kijan Li Mache</a>
              <a href="#dashboard" className="text-sm text-muted-foreground transition-colors hover:text-primary">Dashboard</a>
              <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-primary">Pricing</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="mb-4 font-display text-sm font-semibold text-foreground">Sipò</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://t.me/naparye_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Send size={14} />
                Telegram Bot
              </a>
              <a href="#pricing" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Zap size={14} />
                Jwenn Aksè VIP
              </a>
            </div>
          </div>

          {/* CTA mini */}
          <div>
            <p className="mb-4 font-display text-sm font-semibold text-foreground">Rejwenn Nou</p>
            <p className="mb-4 text-sm text-muted-foreground">
              500+ manm ki ap fè lajan entelijan chak jou.
            </p>
            <a
              href="https://t.me/naparye_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              <Send size={16} />
              Kòmanse Kounye a
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Daky AI Analytics. All rights reserved.
          </p>
          <p className="font-display text-sm font-semibold text-muted-foreground">
            Join the <span className="text-primary">1%</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
