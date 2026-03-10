import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle } from 'lucide-react';

const analyses = [
  {
    "id": 7865,
    "match": "Girona vs Athletic Bilbao",
    "league": "\ud83c\uddea\ud83c\uddf8 La Liga",
    "prediction": "Athletic Bilbao",
    "odds": 2.65,
    "confidence": 39,
    "result": "won",
    "profit": "+$106",
    "date": "10 March 2026"
  },
  {
    "id": 5658,
    "match": "Oviedo vs Valencia",
    "league": "\ud83c\uddea\ud83c\uddf8 La Liga",
    "prediction": "Valencia",
    "odds": 2.55,
    "confidence": 41,
    "result": "won",
    "profit": "+$102",
    "date": "10 March 2026"
  },
  {
    "id": 148,
    "match": "Mallorca vs Espanyol",
    "league": "\ud83c\uddea\ud83c\uddf8 La Liga",
    "prediction": "Mallorca",
    "odds": 2.4,
    "confidence": 43,
    "result": "won",
    "profit": "+$96",
    "date": "10 March 2026"
  },
  {
    "id": 8932,
    "match": "Real Madrid vs Elche CF",
    "league": "\ud83c\uddea\ud83c\uddf8 La Liga",
    "prediction": "Real Madrid",
    "odds": 1.24,
    "confidence": 84,
    "result": "won",
    "profit": "+$49",
    "date": "10 March 2026"
  },
  {
    "id": 7019,
    "match": "Atl\u00e9tico Madrid vs Tottenham Hotspur",
    "league": "\ud83c\udfc6 Champions League",
    "prediction": "Atl\u00e9tico Madrid",
    "odds": 1.64,
    "confidence": 64,
    "result": "won",
    "profit": "+$65",
    "date": "10 March 2026"
  },
  {
    "id": 5849,
    "match": "Atalanta BC vs Bayern Munich",
    "league": "\ud83c\udfc6 Champions League",
    "prediction": "Bayern Munich",
    "odds": 1.57,
    "confidence": 66,
    "result": "won",
    "profit": "+$62",
    "date": "10 March 2026"
  },
  {
    "id": 2405,
    "match": "Galatasaray vs Liverpool",
    "league": "\ud83c\udfc6 Champions League",
    "prediction": "Liverpool",
    "odds": 1.7,
    "confidence": 61,
    "result": "won",
    "profit": "+$68",
    "date": "10 March 2026"
  },
  {
    id: 1,
    match: 'Manchester City vs Arsenal',
    league: 'Premier League',
    prediction: 'Over 2.5 Goals',
    odds: 1.85,
    confidence: 87,
    result: 'won',
    profit: '+$74',
    date: '10 Mars 2026',
  },
  {
    id: 2,
    match: 'Barcelona vs Real Madrid',
    league: 'La Liga',
    prediction: 'BTTS - Yes',
    odds: 1.72,
    confidence: 82,
    result: 'won',
    profit: '+$58',
    date: '9 Mars 2026',
  },
  {
    id: 3,
    match: 'PSG vs Marseille',
    league: 'Ligue 1',
    prediction: 'PSG -1.5',
    odds: 2.10,
    confidence: 75,
    result: 'won',
    profit: '+$88',
    date: '9 Mars 2026',
  },
  {
    id: 4,
    match: 'Bayern Munich vs Dortmund',
    league: 'Bundesliga',
    prediction: 'Over 3.5 Goals',
    odds: 2.25,
    confidence: 71,
    result: 'lost',
    profit: '-$40',
    date: '8 Mars 2026',
  },
  {
    id: 5,
    match: 'Inter Milan vs Juventus',
    league: 'Serie A',
    prediction: 'Under 2.5 Goals',
    odds: 1.95,
    confidence: 79,
    result: 'won',
    profit: '+$76',
    date: '8 Mars 2026',
  },
  {
    id: 6,
    match: 'Liverpool vs Chelsea',
    league: 'Premier League',
    prediction: 'Liverpool ML',
    odds: 1.65,
    confidence: 84,
    result: 'won',
    profit: '+$52',
    date: '7 Mars 2026',
  },
];

const RecentAnalyses = () => {
  const wins = analyses.filter((a) => a.result === 'won').length;
  const totalProfit = analyses.reduce((sum, a) => {
    const val = parseFloat(a.profit.replace(/[^-\d.]/g, ''));
    return sum + val;
  }, 0);

  return (
    <section className="relative px-4 py-20 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Clock size={14} />
            Dènye Analiz yo
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Rezilta{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reyèl
            </span>{' '}
            Bot la
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Gade dènye prediksyon AI nou an ak rezilta yo. Transparans total — pa gen sekrè.
          </p>
        </div>

        {/* Summary stats */}
        <div className="mb-8 grid grid-cols-3 gap-4 sm:mx-auto sm:max-w-md">
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{wins}/{analyses.length}</p>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">+${totalProfit}</p>
            <p className="text-xs text-muted-foreground">Total Profit</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-secondary">
              {Math.round((wins / analyses.length) * 100)}%
            </p>
            <p className="text-xs text-muted-foreground">Accuracy</p>
          </div>
        </div>

        {/* Analyses cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {analyses.map((analysis) => (
            <div
              key={analysis.id}
              className="glass group rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{analysis.league}</p>
                  <p className="mt-0.5 font-display text-sm font-semibold text-foreground">
                    {analysis.match}
                  </p>
                </div>
                {analysis.result === 'won' ? (
                  <CheckCircle size={20} className="shrink-0 text-primary" />
                ) : (
                  <XCircle size={20} className="shrink-0 text-red-400" />
                )}
              </div>

              <div className="mb-3 rounded-lg bg-muted/30 px-3 py-2">
                <p className="text-xs text-muted-foreground">Prediksyon</p>
                <p className="font-semibold text-foreground">{analysis.prediction}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">
                    Odds: <span className="text-foreground">{analysis.odds}</span>
                  </span>
                  <span className="text-muted-foreground">
                    AI:{' '}
                    <span
                      className={
                        analysis.confidence >= 80 ? 'text-primary' : 'text-secondary'
                      }
                    >
                      {analysis.confidence}%
                    </span>
                  </span>
                </div>
                <span
                  className={`flex items-center gap-1 font-bold ${
                    analysis.result === 'won' ? 'text-primary' : 'text-red-400'
                  }`}
                >
                  {analysis.result === 'won' ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {analysis.profit}
                </span>
              </div>

              <p className="mt-2 text-right text-xs text-muted-foreground">{analysis.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentAnalyses;
