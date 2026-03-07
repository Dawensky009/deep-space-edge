import { Check, X, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/mwa',
    description: 'Kòmanse gratis, wè rezilta.',
    features: [
      { text: '1 prediksyon pa jou', included: true },
      { text: 'Aksè a statistik debaz', included: true },
      { text: 'WhatsApp alerts', included: false },
      { text: 'Bankroll Manager', included: false },
      { text: 'Full AI access', included: false },
    ],
    cta: 'Kòmanse Gratis',
    highlighted: false,
  },
  {
    name: 'Elite',
    price: '$97',
    period: '/mwa',
    description: 'Tout pouvwa AI a nan men ou.',
    features: [
      { text: 'Prediksyon ilimite', included: true },
      { text: 'Full AI analytics', included: true },
      { text: 'WhatsApp alerts an tan reyèl', included: true },
      { text: 'Bankroll Manager (Kelly Criterion)', included: true },
      { text: 'Sipò VIP prioritè', included: true },
    ],
    cta: 'Jwenn Aksè Elite',
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <h2 className="reveal text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Chwazi Plan <span className="text-primary">Ou</span>
        </h2>
        <p className="reveal reveal-delay-1 mt-4 text-center text-muted-foreground">
          Envesti nan tèt ou. Kòmanse fè lajan entelijan.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal glass group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'ring-2 ring-primary shadow-[0_0_50px_hsla(160,84%,39%,0.15)]'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check size={16} className="shrink-0 text-primary" />
                    ) : (
                      <X size={16} className="shrink-0 text-muted-foreground/40" />
                    )}
                    <span className={f.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'animate-pulse-glow bg-primary text-primary-foreground'
                    : 'border border-border bg-muted text-foreground hover:border-primary/50'
                }`}
              >
                {plan.highlighted && <Zap size={16} />}
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
