const Footer = () => {
  return (
    <footer className="border-t border-border px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-display text-2xl font-bold text-foreground">
          Join the <span className="text-primary">1%</span>.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Stop gambling. Start investing with data.
        </p>

        <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="transition-colors hover:text-primary">Features</a>
          <a href="#dashboard" className="transition-colors hover:text-primary">Dashboard</a>
          <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Daky AI Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
