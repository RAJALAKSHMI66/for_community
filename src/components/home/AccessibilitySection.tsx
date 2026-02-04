import React from 'react';
import { Globe, Eye, Volume2, Smartphone, Keyboard, Languages } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const accessibilityFeatures = [
  {
    icon: Languages,
    title: '7+ Languages',
    desc: 'Support for English, Spanish, French, German, Chinese, Arabic, and Hindi',
  },
  {
    icon: Eye,
    title: 'Screen Reader',
    desc: 'Fully compatible with popular screen readers for visually impaired users',
  },
  {
    icon: Volume2,
    title: 'Voice Control',
    desc: 'Navigate and interact using voice commands',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Optimized for all devices and screen sizes',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    desc: 'Full keyboard accessibility for motor impaired users',
  },
  {
    icon: Globe,
    title: 'RTL Support',
    desc: 'Right-to-left text support for Arabic and Hebrew',
  },
];

export default function AccessibilitySection() {
  const { t } = useTheme();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              <Globe className="h-4 w-4" />
              <span>Universal Access</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('accessibility.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('accessibility.desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessibilityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-5 hover-lift fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
