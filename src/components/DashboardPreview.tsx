import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const chartData = [
  { day: 'Mon', profit: 320 },
  { day: 'Tue', profit: 480 },
  { day: 'Wed', profit: 390 },
  { day: 'Thu', profit: 520 },
  { day: 'Fri', profit: 610 },
  { day: 'Sat', profit: 450 },
  { day: 'Sun', profit: 700 },
];

const bets = [
  { match: 'Arsenal vs Chelsea', pick: 'Over 2.5', odds: '1.85', result: '+$120', status: 'won' },
  { match: 'Lakers vs Celtics', pick: 'Lakers ML', odds: '2.10', result: '+$95', status: 'won' },
  { match: 'Man City vs Liverpool', pick: 'BTTS', odds: '1.72', result: '+$68', status: 'won' },
  { match: 'PSG vs Bayern', pick: 'Under 3.5', odds: '1.90', result: '-$50', status: 'lost' },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <h2 className="reveal text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Live <span className="text-primary">Betting Analytics</span>
        </h2>

        <div className="reveal reveal-delay-1 mt-12" style={{ perspective: '1200px' }}>
          <div className="glass-strong animate-float rounded-2xl p-6 shadow-[0_25px_60px_-10px_hsla(160,84%,39%,0.15)] md:p-8">
            {/* Mini chart */}
            <div className="mb-6 h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(160 84% 39%)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="hsl(160 84% 39%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="hsl(160 84% 39%)"
                    strokeWidth={2}
                    fill="url(#profitGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 font-medium">Match</th>
                    <th className="pb-3 font-medium">Pick</th>
                    <th className="pb-3 font-medium">Odds</th>
                    <th className="pb-3 text-right font-medium">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {bets.map((b, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 font-medium text-foreground">{b.match}</td>
                      <td className="py-3 text-muted-foreground">{b.pick}</td>
                      <td className="py-3 text-muted-foreground">{b.odds}</td>
                      <td className={`py-3 text-right font-semibold ${b.status === 'won' ? 'text-primary' : 'text-destructive'}`}>
                        {b.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
