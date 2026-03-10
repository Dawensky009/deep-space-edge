import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Trophy, TrendingUp, History, Settings, LogOut } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('daky_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Si pa gen user, voye l sou paj dakey la
      navigate('/');
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background font-body pt-24 pb-12">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          
          {/* Sidebar Profil */}
          <aside className="space-y-6">
            <Card className="glass border-primary/20">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 rounded-full border-2 border-primary p-1">
                    {user.photo_url ? (
                      <img src={user.photo_url} alt="profile" className="h-full w-full rounded-full object-cover" />
                    ) : (
                      <div className="h-full w-full rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={40} className="text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    VIP
                  </div>
                </div>
                <h2 className="font-display text-xl font-bold text-foreground">{user.first_name} {user.last_name}</h2>
                <p className="text-sm text-muted-foreground">@{user.username || 'paryè_pro'}</p>
                <div className="mt-4 flex gap-2 w-full">
                   <Button variant="outline" className="w-full text-xs h-8 gap-1">
                     <Settings size={14} /> Edit
                   </Button>
                </div>
              </CardContent>
            </Card>

            <nav className="glass rounded-xl overflow-hidden border border-border/30">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium bg-primary/10 text-primary border-l-2 border-primary">
                <User size={18} /> Paj Pwofil
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                <History size={18} /> Istorik Match
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                <Trophy size={18} /> Reyisit (Achievements)
              </button>
              <button 
                onClick={() => { localStorage.removeItem('daky_user'); navigate('/'); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors"
              >
                <LogOut size={18} /> Dekonekte
              </button>
            </nav>
          </aside>

          {/* Kontni Pwofil */}
          <main className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="glass border-none bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Pwofi Total</p>
                  <p className="text-2xl font-bold text-primary">+$1,240</p>
                </CardContent>
              </Card>
              <Card className="glass border-none bg-secondary/5">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold text-secondary">78.5%</p>
                </CardContent>
              </Card>
              <Card className="glass border-none bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">Paryaj Total</p>
                  <p className="text-2xl font-bold text-foreground">154</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-border/30">
              <CardHeader>
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  <TrendingUp size={20} className="text-primary" />
                  Dènye Aktivite ou yo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/10">
                      <div>
                        <p className="text-sm font-semibold">Match {i === 1 ? 'Real Madrid vs Liverpool' : 'Chelsea vs Arsenal'}</p>
                        <p className="text-xs text-muted-foreground">Analiz AI swiv nan dat 10 Mas</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-primary/20 text-primary uppercase">Ganyen</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 w-full text-primary">Wè tout istorik la</Button>
              </CardContent>
            </Card>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
