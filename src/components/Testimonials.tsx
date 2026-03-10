import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean-Pierre M.',
    role: 'Itilizatè Elite depi 6 mwa',
    text: 'Mwen te toujou pèdi lajan nan betting. Depi mwen kòmanse ak Daky AI, mwen fè $8,400 nan 3 mwa. Sa chanje lavi mwen nèt.',
    profit: '+$8,400',
    avatar: 'JP',
  },
  {
    name: 'Marie-Claire D.',
    role: 'Itilizatè Elite depi 1 ane',
    text: "Bot la bay prediksyon presiz anpil. Mwen swiv li chak jou epi rezilta a pale pou kont li. Pi bon envestisman mwen te janm fè.",
    profit: '+$22,100',
    avatar: 'MC',
  },
  {
    name: 'Patrick R.',
    role: 'Itilizatè Elite depi 4 mwa',
    text: "Mwen te skeptik o kòmansman. Men apre premye semèn nan, mwen te wè rezilta. Kounye a mwen fè lajan chak jou san strès.",
    profit: '+$5,800',
    avatar: 'PR',
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
            Sa Manm Nou Yo{' '}
            <span className="text-primary">Ap Di</span>
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-muted-foreground">
            Veritab temwayaj moun ki itilize Daky AI chak jou.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ''} glass group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_hsla(160,84%,39%,0.12)]`}
            >
              {/* Quote icon */}
              <Quote size={28} className="mb-4 text-primary/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between border-t border-border/50 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <span className="font-display text-sm font-bold text-primary">{t.profit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
