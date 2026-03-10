import { Bot, BarChart3, DollarSign, Send } from 'lucide-react';

const steps = [
  {
    icon: Send,
    step: '01',
    title: 'Kòmanse Bot la',
    description: 'Ouvè @naparye_bot sou Telegram epi aktive kont ou an 30 segonn.',
  },
  {
    icon: Bot,
    step: '02',
    title: 'AI Analize',
    description: 'Bot la skann 10,000+ match, idantifye erè bookmakers, epi kreye prediksyon.',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Resevwa Alert',
    description: 'Jwenn prediksyon presiz ak odds, konfyans AI, ak montan pou mize dirèkteman sou Telegram.',
  },
  {
    icon: DollarSign,
    step: '04',
    title: 'Kolekte Pwofi',
    description: 'Swiv prediksyon yo epi gade kont ou grandi chak jou. Mwayèn: $400/jou.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-4 py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
            Kijan Li{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mache
            </span>
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-muted-foreground">
            4 etap senp pou kòmanse fè lajan entelijan.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''} group relative text-center`}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/40 to-transparent lg:block" />
              )}

              {/* Step number */}
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_hsla(160,84%,39%,0.15)]">
                <s.icon size={28} className="text-primary" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                  {s.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
