import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Activity, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export default function HeroSection() {
  const { t } = useTheme();

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-secondary/15 via-transparent to-transparent blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Pandemic Response Toolkit</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.title').split(',').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? (
                    <span className="gradient-text">{part},</span>
                  ) : (
                    <span className="block mt-2">{part}</span>
                  )}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="group text-base px-8">
                <Link to="/healthcare">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/info-hub">
                  {t('hero.learn')}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span>10k+ users trusted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative grid grid-cols-2 gap-4 lg:pl-8">
            {/* Floating Shield */}
            <div className="absolute -top-4 -left-4 z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg animate-float">
              <Shield className="h-10 w-10 text-primary-foreground" />
            </div>

            <div className="feature-card slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Health Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor symptoms and access telemedicine</p>
            </div>

            <div className="feature-card slide-up mt-8" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Mental Wellness</h3>
              <p className="text-sm text-muted-foreground">Meditation guides and therapist access</p>
            </div>

            <div className="feature-card slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-accent-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Real-time Data</h3>
              <p className="text-sm text-muted-foreground">Reliable pandemic updates and guidelines</p>
            </div>

            <div className="feature-card slide-up mt-8" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Connect with neighbors for support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
