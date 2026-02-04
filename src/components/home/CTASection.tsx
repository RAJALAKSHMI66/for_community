import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Free access to all basic features',
  'Real-time pandemic updates',
  'Connect with local community',
  'Mental health resources',
];

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4" />
            <span>Join the SafeGuard Community</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Stay Protected?
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Create your free account today and access all the tools you need to navigate health crises with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm"
              >
                <Check className="h-4 w-4 text-success" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-base px-8 group"
            >
              <Link to="/login">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 text-base px-8"
            >
              <Link to="/info-hub">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
