import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Newspaper, 
  Bell, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Clock,
  Filter,
  Search,
  Activity,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const globalStats = [
  { label: 'Total Cases', value: '678.5M', change: -2.3, color: 'text-warning' },
  { label: 'Recovered', value: '651.2M', change: 1.8, color: 'text-success' },
  { label: 'Active Cases', value: '6.8M', change: -5.1, color: 'text-primary' },
  { label: 'Vaccination Rate', value: '72.4%', change: 0.5, color: 'text-success' },
];

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'New Variant Detected',
    message: 'Health authorities monitoring a new variant. Stay updated for guidance.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'info',
    title: 'Updated Mask Guidelines',
    message: 'CDC has updated indoor mask recommendations for high-risk areas.',
    time: '5 hours ago',
  },
  {
    id: 3,
    type: 'success',
    title: 'Vaccination Milestone',
    message: '75% of the population has received at least one vaccine dose.',
    time: '1 day ago',
  },
];

const news = [
  {
    id: 1,
    title: 'WHO Releases Updated Pandemic Guidelines',
    source: 'World Health Organization',
    time: '3 hours ago',
    image: '📋',
    category: 'Guidelines',
  },
  {
    id: 2,
    title: 'New Treatment Shows Promising Results in Clinical Trials',
    source: 'Medical Journal',
    time: '6 hours ago',
    image: '💊',
    category: 'Research',
  },
  {
    id: 3,
    title: 'Travel Restrictions Eased in Several Countries',
    source: 'Travel Advisory',
    time: '8 hours ago',
    image: '✈️',
    category: 'Travel',
  },
  {
    id: 4,
    title: 'Schools Implement New Safety Protocols',
    source: 'Education Dept',
    time: '12 hours ago',
    image: '🏫',
    category: 'Education',
  },
];

const guidelines = [
  {
    icon: '😷',
    title: 'Wear a Mask',
    desc: 'In crowded indoor spaces and when required',
  },
  {
    icon: '🧼',
    title: 'Wash Hands',
    desc: 'Frequently with soap for at least 20 seconds',
  },
  {
    icon: '↔️',
    title: 'Keep Distance',
    desc: 'Maintain 6 feet distance when possible',
  },
  {
    icon: '💉',
    title: 'Get Vaccinated',
    desc: 'Stay up to date with vaccinations and boosters',
  },
  {
    icon: '🏠',
    title: 'Stay Home if Sick',
    desc: 'Isolate if experiencing symptoms',
  },
  {
    icon: '🌬️',
    title: 'Ventilation',
    desc: 'Improve indoor air flow when possible',
  },
];

export default function InfoHub() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-accent/30 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                <Newspaper className="h-4 w-4" />
                <span>Information Hub</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Informed, Stay Safe
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Real-time updates, official guidelines, and verified information from trusted health authorities worldwide.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search news, guidelines, resources..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Stats */}
        <section className="py-6 border-b border-border/40 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Global Statistics</span>
              <span className="text-xs text-muted-foreground">• Updated 1 hour ago</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {globalStats.map((stat, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="flex items-end justify-between">
                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    <span className={`flex items-center gap-0.5 text-xs ${
                      stat.change > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {stat.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {Math.abs(stat.change)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Latest Alerts</h2>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`glass-card p-4 border-l-4 ${
                    alert.type === 'warning' 
                      ? 'border-l-warning' 
                      : alert.type === 'success' 
                        ? 'border-l-success' 
                        : 'border-l-primary'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-1.5 rounded-full ${
                      alert.type === 'warning' 
                        ? 'bg-warning/10' 
                        : alert.type === 'success' 
                          ? 'bg-success/10' 
                          : 'bg-primary/10'
                    }`}>
                      {alert.type === 'warning' ? (
                        <AlertTriangle className="h-4 w-4 text-warning" />
                      ) : alert.type === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <Bell className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{alert.title}</h3>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="news">Latest News</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="news" className="space-y-4">
                {news.map((item) => (
                  <div key={item.id} className="glass-card p-5 hover-lift cursor-pointer group">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.time}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.source}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Button variant="outline">Load More News</Button>
                </div>
              </TabsContent>

              <TabsContent value="guidelines">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {guidelines.map((guideline, index) => (
                    <div key={index} className="glass-card p-5 hover-lift">
                      <div className="text-4xl mb-3">{guideline.icon}</div>
                      <h3 className="font-semibold mb-1">{guideline.title}</h3>
                      <p className="text-sm text-muted-foreground">{guideline.desc}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="glass-card p-8 text-center">
                  <Activity className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    We're compiling a comprehensive list of resources from trusted organizations.
                  </p>
                  <Button>Get Notified</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
