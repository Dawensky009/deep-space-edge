import { useState, useEffect } from 'react';
import { Zap, Menu, X, User } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Kijan Li Mache', href: '#how-it-works' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Pricing', href: '#pricing' },
];

declare global {
  interface Window {
    onTelegramAuth: (user: any) => void;
  }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Tcheke si gen yon user deja nan localStorage
    const savedUser = localStorage.getItem('daky_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Callback pou Telegram Widget
    window.onTelegramAuth = (userData) => {
      console.log('User loged in:', userData);
      setUser(userData);
      localStorage.setItem('daky_user', JSON.stringify(userData));
    };

    // Dinamikman chaje Telegram Script la
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute('data-telegram-login', "DakyBettingBot"); // Chanje sa ak non bot ou an
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    script.async = true;
    
    const container = document.getElementById('telegram-login-container');
    if (container && !user) {
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('daky_user');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          Daky <span className="text-primary">AI</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {!user ? (
            <div id="telegram-login-container"></div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                {user.photo_url ? (
                  <img src={user.photo_url} alt="profile" className="h-full w-full rounded-full object-cover" />
                ) : (
                  <User size={18} />
                )}
              </div>
              <span className="hidden text-sm font-medium text-foreground sm:block">{user.first_name}</span>
              <button onClick={handleLogout} className="text-xs text-muted-foreground hover:text-red-400">Logout</button>
            </div>
          )}
          
          <a
            href="#pricing"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 sm:flex"
          >
            <Zap size={16} />
            Jwenn Aksè VIP
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/30 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <Zap size={16} />
              Jwenn Aksè VIP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

