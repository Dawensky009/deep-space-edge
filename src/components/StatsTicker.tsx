const stats = [
  'Win Rate: 78.4%',
  'Daily Avg Profit: $412',
  '500+ Active Members',
  'Win Rate: 78.4%',
  'Daily Avg Profit: $412',
  '500+ Active Members',
];

const StatsTicker = () => {
  return (
    <section className="relative overflow-hidden border-y border-primary/20 bg-primary/5 py-4">
      <div className="animate-ticker flex w-max gap-12">
        {[...stats, ...stats].map((stat, i) => (
          <span key={i} className="whitespace-nowrap font-display text-sm font-semibold tracking-wide text-primary sm:text-base">
            ⚡ {stat}
          </span>
        ))}
      </div>
    </section>
  );
};

export default StatsTicker;
