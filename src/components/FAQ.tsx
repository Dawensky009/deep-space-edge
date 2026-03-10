import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "Kijan Daky AI fonksyone?",
    a: "Daky AI itilize algoritm machine learning avanse pou analize plis pase 10,000 match chak jou. Li idantifye kote bookmakers yo fè erè nan odds yo epi ba ou prediksyon ki gen plis chans genyen.",
  },
  {
    q: "Èske mwen bezwen eksperyans nan betting?",
    a: "Non! Bot la fè tout analiz la pou ou. Ou jis bezwen swiv enstriksyon li bay yo. Menm si ou nouvo, AI a ap gide ou etap pa etap.",
  },
  {
    q: "Konbyen mwen ka fè pa jou?",
    a: "Mwayèn itilizatè Elite nou yo fè ant $200 a $600 pa jou. Sa depann de kantite kapital ou envesti ak kombyen prediksyon ou swiv.",
  },
  {
    q: "Èske lajan mwen an sekirize?",
    a: "Absoliman. Nou itilize sistèm Kelly Criterion pou pwoteje bankroll ou. Sa vle di ou pa janm riske plis pase sa ou ka pèmèt ou pèdi. Jesyon risk se priyorite #1 nou.",
  },
  {
    q: "Kijan mwen resevwa prediksyon yo?",
    a: "Ou resevwa prediksyon yo dirèkteman sou Telegram bot nou an (@naparye_bot). Ou jwenn alert anvan chak match ak tout detay: odds, konfyans AI, ak montan pou mize.",
  },
  {
    q: "Èske mwen ka anile abònman mwen nenpòt ki lè?",
    a: "Wi, ou ka anile nenpòt ki lè san okenn penalite. Pa gen kontra — ou lib pou kite oswa retounen lè ou vle.",
  },
];

const FAQ = () => {
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
            Kesyon{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frekante
            </span>
          </h2>
          <p className="reveal reveal-delay-1 mt-4 text-muted-foreground">
            Tout sa ou bezwen konnen anvan ou kòmanse.
          </p>
        </div>

        <Accordion type="single" collapsible className="reveal reveal-delay-1 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl border-none px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-sm font-semibold text-foreground hover:text-primary hover:no-underline sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
