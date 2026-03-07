import { BarChart3, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Pa gen devinèt. Se matematik ak AI sèlman.',
    delay: '',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Resevwa prediksyon yo sou WhatsApp ou anvan match la kòmanse.',
    delay: 'reveal-delay-1',
  },
  {
    icon: Shield,
    title: 'Bankroll Protection',
    description: 'Sistèm nou an pwoteje kapital ou ak jesyon risk Kelly Criterion.',
    delay: 'reveal-delay-2',
  },
];

const Features = () => {
  return (
    <section id="features" className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <h2 className="reveal text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Poukisa <span className="text-primary">Daky AI</span>?
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`reveal ${f.delay} glass group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_hsla(160,84%,39%,0.15)]`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
