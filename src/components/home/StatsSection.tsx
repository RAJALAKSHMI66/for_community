import React from 'react';
import { TrendingUp, TrendingDown, Activity, Syringe, HeartPulse, Building2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const stats = [
  {
    key: 'stats.cases',
    value: '1.2M',
    change: -12,
    icon: Activity,
    color: 'text-warning',
    bgColor: 'bg-warning/10',
  },
  {
    key: 'stats.vaccinated',
    value: '78%',
    change: 5.2,
    icon: Syringe,
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    key: 'stats.recovered',
    value: '4.5M',
    change: 8.3,
    icon: HeartPulse,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    key: 'stats.resources',
    value: '12,450',
    change: 2.1,
    icon: Building2,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];

export default function StatsSection() {
  const { t } = useTheme();

  return (
    <section className="py-12 border-y border-border/40 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className="stat-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  stat.change > 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(stat.change)}%
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{t(stat.key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
