import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Brain, 
  Newspaper, 
  Users, 
  ArrowRight,
  MapPin,
  Video,
  Pill,
  Calendar,
  Sparkles,
  MessageCircle,
  BookOpen,
  Activity,
  Bell,
  FileText,
  HandHeart,
  Home,
  ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const features = [
  {
    key: 'healthcare',
    title: 'features.healthcare',
    desc: 'features.healthcare.desc',
    icon: Stethoscope,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    gradient: 'from-primary/20 to-primary/5',
    link: '/healthcare',
    subFeatures: [
      { icon: MapPin, label: 'Facility Finder' },
      { icon: Video, label: 'Telemedicine' },
      { icon: Pill, label: 'Symptom Checker' },
      { icon: Calendar, label: 'Vaccine Scheduling' },
    ]
  },
  {
    key: 'mental',
    title: 'features.mental',
    desc: 'features.mental.desc',
    icon: Brain,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    gradient: 'from-secondary/20 to-secondary/5',
    link: '/mental-health',
    subFeatures: [
      { icon: Sparkles, label: 'Meditation' },
      { icon: MessageCircle, label: 'Therapist Chat' },
      { icon: BookOpen, label: 'Self-Help Guides' },
      { icon: Activity, label: 'Mood Tracking' },
    ]
  },
  {
    key: 'info',
    title: 'features.info',
    desc: 'features.info.desc',
    icon: Newspaper,
    color: 'text-accent-foreground',
    bgColor: 'bg-accent',
    gradient: 'from-accent to-accent/50',
    link: '/info-hub',
    subFeatures: [
      { icon: Bell, label: 'Real-time Alerts' },
      { icon: FileText, label: 'Guidelines' },
      { icon: Activity, label: 'Case Tracker' },
      { icon: BookOpen, label: 'Resources' },
    ]
  },
  {
    key: 'community',
    title: 'features.community',
    desc: 'features.community.desc',
    icon: Users,
    color: 'text-success',
    bgColor: 'bg-success/10',
    gradient: 'from-success/20 to-success/5',
    link: '/community',
    subFeatures: [
      { icon: HandHeart, label: 'Offer Help' },
      { icon: Home, label: 'Request Help' },
      { icon: MessageCircle, label: 'Local Chat' },
      { icon: ShoppingBag, label: 'Resource Sharing' },
    ]
  },
];

export default function FeaturesSection() {
  const { t } = useTheme();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and resources designed to help you navigate any health crisis with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.key}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 md:p-8 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-radial ${feature.gradient} opacity-50 blur-3xl transition-opacity group-hover:opacity-80`} />
              
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${feature.bgColor}`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{t(feature.title)}</h3>
                    <p className="text-sm text-muted-foreground">{t(feature.desc)}</p>
                  </div>
                </div>

                {/* Sub Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {feature.subFeatures.map((sub, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <sub.icon className={`h-4 w-4 ${feature.color}`} />
                      <span className="text-sm font-medium">{sub.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
                  <Link to={feature.link} className={`${feature.color} hover:opacity-80`}>
                    Explore {t(feature.title).split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
