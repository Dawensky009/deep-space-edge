import { Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          Daky <span className="text-primary">AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary">Features</a>
          <a href="#dashboard" className="text-sm text-muted-foreground transition-colors hover:text-primary">Dashboard</a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-primary">Pricing</a>
        </div>

        <a
          href="#pricing"
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          <Zap size={16} />
          Jwenn Aksè VIP
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
