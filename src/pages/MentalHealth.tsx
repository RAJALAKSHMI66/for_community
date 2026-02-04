import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Brain, 
  Sparkles, 
  MessageCircle, 
  BookOpen,
  Activity,
  Play,
  Clock,
  Heart,
  Smile,
  Frown,
  Meh,
  Phone,
  ArrowRight,
  X,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const moods = [
  { icon: Smile, label: 'Great', color: 'text-success', bg: 'bg-success/10' },
  { icon: Meh, label: 'Okay', color: 'text-warning', bg: 'bg-warning/10' },
  { icon: Frown, label: 'Low', color: 'text-destructive', bg: 'bg-destructive/10' },
];

const meditations = [
  {
    id: 1,
    title: 'Calm Breathing',
    duration: '5 min',
    category: 'Stress Relief',
    image: '🌊',
  },
  {
    id: 2,
    title: 'Morning Mindfulness',
    duration: '10 min',
    category: 'Daily Practice',
    image: '🌅',
  },
  {
    id: 3,
    title: 'Anxiety Relief',
    duration: '8 min',
    category: 'Anxiety',
    image: '🍃',
  },
  {
    id: 4,
    title: 'Better Sleep',
    duration: '15 min',
    category: 'Sleep',
    image: '🌙',
  },
];

const therapists = [
  { id: 1, name: 'Dr. Priya Sharma', specialty: 'Anxiety & Depression', rating: 4.9, available: true },
  { id: 2, name: 'Dr. Rajesh Kumar', specialty: 'Stress Management', rating: 4.8, available: true },
  { id: 3, name: 'Dr. Anita Desai', specialty: 'Family Therapy', rating: 4.7, available: false },
];

const selfHelpGuides = [
  { id: 1, title: 'Managing Pandemic Anxiety', reads: '12.5k', time: '10 min' },
  { id: 2, title: 'Building Resilience', reads: '8.2k', time: '15 min' },
  { id: 3, title: 'Coping with Isolation', reads: '15.3k', time: '8 min' },
  { id: 4, title: 'Sleep Hygiene Tips', reads: '9.8k', time: '5 min' },
];

const supportGroups = [
  { id: 1, name: 'Anxiety Support Circle', members: 234, nextSession: 'Tomorrow, 6 PM' },
  { id: 2, name: 'COVID Recovery Group', members: 156, nextSession: 'Wed, 7 PM' },
  { id: 3, name: 'Healthcare Workers Support', members: 89, nextSession: 'Fri, 5 PM' },
];

const resources = [
  {
    icon: MessageCircle,
    title: 'Talk to a Therapist',
    desc: 'Connect with licensed mental health professionals',
    action: 'Book Session',
    color: 'bg-primary/10 text-primary',
    modalType: 'therapist',
  },
  {
    icon: BookOpen,
    title: 'Self-Help Guides',
    desc: 'Evidence-based techniques for managing stress',
    action: 'Browse Guides',
    color: 'bg-secondary/10 text-secondary',
    modalType: 'guides',
  },
  {
    icon: Activity,
    title: 'Mood Tracker',
    desc: 'Track your emotional patterns over time',
    action: 'Start Tracking',
    color: 'bg-accent text-accent-foreground',
    modalType: 'mood',
  },
  {
    icon: Heart,
    title: 'Support Groups',
    desc: 'Join community support sessions',
    action: 'Find Groups',
    color: 'bg-success/10 text-success',
    modalType: 'groups',
  },
];

export default function MentalHealth() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [weeklyProgress, setWeeklyProgress] = useState(65);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [moodHistory, setMoodHistory] = useState<{mood: number, date: Date}[]>([]);
  const { toast } = useToast();

  const handleMeditationStart = (title: string) => {
    toast({
      title: "Starting meditation",
      description: `${title} is loading...`,
    });
    setWeeklyProgress(prev => Math.min(100, prev + 10));
  };

  const handleResourceAction = (modalType: string) => {
    setActiveModal(modalType);
  };

  const handleBookTherapist = (name: string) => {
    toast({
      title: "Session booked!",
      description: `Your appointment with ${name} has been scheduled.`,
    });
    setActiveModal(null);
  };

  const handleLogMood = () => {
    if (selectedMood !== null) {
      setMoodHistory(prev => [...prev, { mood: selectedMood, date: new Date() }]);
      toast({
        title: "Mood logged",
        description: `Your mood has been recorded. Keep tracking for insights!`,
      });
      setActiveModal(null);
    }
  };

  const handleJoinGroup = (name: string) => {
    toast({
      title: "Joined group!",
      description: `You've joined ${name}. You'll receive a reminder before the next session.`,
    });
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-secondary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Brain className="h-4 w-4" />
                <span>Mental Health Support</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Your Mind Matters
              </h1>
              <p className="text-lg text-muted-foreground">
                Access meditation guides, therapist connections, and stress-relief tools designed to support your mental well-being during challenging times.
              </p>
            </div>
          </div>
        </section>

        {/* Mood Check-in */}
        <section className="py-8 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold mb-4 text-center">How are you feeling today?</h2>
              <div className="flex justify-center gap-4 mb-6">
                {moods.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(index)}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                      selectedMood === index 
                        ? `${mood.bg} ring-2 ring-offset-2 ring-offset-background ring-current ${mood.color}` 
                        : 'hover:bg-muted'
                    }`}
                  >
                    <mood.icon className={`h-10 w-10 ${mood.color} mb-2`} />
                    <span className="text-sm font-medium">{mood.label}</span>
                  </button>
                ))}
              </div>
              {selectedMood !== null && (
                <div className="text-center fade-in">
                  <p className="text-sm text-muted-foreground mb-3">
                    Thank you for checking in. Here are some resources that might help:
                  </p>
                  <Button size="sm" className="gap-2" onClick={() => setActiveModal('mood')}>
                    Get Personalized Tips
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Weekly Progress */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Weekly Wellness Goal</h3>
                  <p className="text-sm text-muted-foreground">Complete 7 mindfulness sessions</p>
                </div>
                <span className="text-2xl font-bold text-primary">{weeklyProgress}%</span>
              </div>
              <Progress value={weeklyProgress} className="h-3" />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>{Math.round(weeklyProgress / 100 * 7)} of 7 sessions completed</span>
                <span>3 days left</span>
              </div>
            </div>
          </div>
        </section>

        {/* Guided Meditations */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Guided Meditations</h2>
                <p className="text-muted-foreground">Take a moment to breathe and relax</p>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {meditations.map((meditation) => (
                <div key={meditation.id} className="glass-card p-5 hover-lift group cursor-pointer">
                  <div className="text-5xl mb-4">{meditation.image}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock className="h-3 w-3" />
                    <span>{meditation.duration}</span>
                    <span>•</span>
                    <span>{meditation.category}</span>
                  </div>
                  <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                    {meditation.title}
                  </h3>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="w-full gap-2"
                    onClick={() => handleMeditationStart(meditation.title)}
                  >
                    <Play className="h-4 w-4" />
                    Start
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Mental Health Resources</h2>
              <p className="text-muted-foreground">Professional support and self-help tools at your fingertips</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center mb-4`}>
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-primary"
                    onClick={() => handleResourceAction(resource.modalType)}
                  >
                    {resource.action}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crisis Support */}
        <section className="py-8 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/20">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Need immediate support?</h3>
                  <p className="text-sm text-muted-foreground">
                    Crisis counselors are available 24/7
                  </p>
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('tel:9152987821', '_self')}
              >
                <Phone className="h-5 w-5" />
                iCall: 9152987821
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Therapist Modal */}
      <Dialog open={activeModal === 'therapist'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Therapist Session</DialogTitle>
            <DialogDescription>
              Connect with licensed mental health professionals in India
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {therapists.map(therapist => (
              <div key={therapist.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium">{therapist.name}</h4>
                  <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                  <p className="text-xs text-muted-foreground">⭐ {therapist.rating}</p>
                </div>
                <Button 
                  size="sm" 
                  disabled={!therapist.available}
                  onClick={() => handleBookTherapist(therapist.name)}
                >
                  {therapist.available ? 'Book' : 'Unavailable'}
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Self-Help Guides Modal */}
      <Dialog open={activeModal === 'guides'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Self-Help Guides</DialogTitle>
            <DialogDescription>
              Evidence-based techniques for managing stress and anxiety
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {selfHelpGuides.map(guide => (
              <div 
                key={guide.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
                onClick={() => {
                  toast({ title: "Opening guide", description: guide.title });
                  setActiveModal(null);
                }}
              >
                <div>
                  <h4 className="font-medium">{guide.title}</h4>
                  <p className="text-xs text-muted-foreground">{guide.reads} reads • {guide.time} read</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mood Tracker Modal */}
      <Dialog open={activeModal === 'mood'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Mood Tracker</DialogTitle>
            <DialogDescription>
              Track your emotional patterns to gain insights over time
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex justify-center gap-4 mb-6">
              {moods.map((mood, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMood(index)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                    selectedMood === index 
                      ? `${mood.bg} ring-2 ring-current ${mood.color}` 
                      : 'hover:bg-muted'
                  }`}
                >
                  <mood.icon className={`h-8 w-8 ${mood.color} mb-1`} />
                  <span className="text-xs font-medium">{mood.label}</span>
                </button>
              ))}
            </div>
            <Button className="w-full" onClick={handleLogMood} disabled={selectedMood === null}>
              <Check className="h-4 w-4 mr-2" />
              Log Today's Mood
            </Button>
            {moodHistory.length > 0 && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                You've logged {moodHistory.length} mood entries
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Support Groups Modal */}
      <Dialog open={activeModal === 'groups'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Support Groups</DialogTitle>
            <DialogDescription>
              Join community support sessions led by professionals
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {supportGroups.map(group => (
              <div key={group.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium">{group.name}</h4>
                  <p className="text-xs text-muted-foreground">{group.members} members • Next: {group.nextSession}</p>
                </div>
                <Button size="sm" onClick={() => handleJoinGroup(group.name)}>
                  Join
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
