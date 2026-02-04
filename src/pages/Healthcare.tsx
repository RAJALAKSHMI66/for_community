import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  Star, 
  Navigation,
  Stethoscope,
  Video,
  Pill,
  Calendar,
  ChevronRight,
  Filter,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const allFacilities = [
  {
    id: 1,
    name: 'AIIMS Delhi',
    type: 'Government Hospital',
    distance: '2.5 km',
    rating: 4.8,
    reviews: 2340,
    address: 'Ansari Nagar East, New Delhi, Delhi 110029',
    phone: '+91 11 2658 8500',
    hours: '24/7 Emergency',
    services: ['COVID Testing', 'Vaccination', 'Emergency Care', 'ICU'],
    waitTime: '~30 min',
  },
  {
    id: 2,
    name: 'Apollo Hospital',
    type: 'Private Hospital',
    distance: '4.2 km',
    rating: 4.6,
    reviews: 1890,
    address: 'Sarita Vihar, Delhi Mathura Road, New Delhi 110076',
    phone: '+91 11 2987 1234',
    hours: '24/7',
    services: ['COVID Testing', 'Telemedicine', 'Vaccination', 'Multi-Specialty'],
    waitTime: '~15 min',
  },
  {
    id: 3,
    name: 'Safdarjung Hospital',
    type: 'Government Hospital',
    distance: '3.1 km',
    rating: 4.5,
    reviews: 1560,
    address: 'Ansari Nagar West, New Delhi, Delhi 110029',
    phone: '+91 11 2673 0000',
    hours: '24/7 Emergency',
    services: ['COVID Testing', 'Emergency Care', 'Vaccination'],
    waitTime: '~45 min',
  },
  {
    id: 4,
    name: 'Max Super Speciality Hospital',
    type: 'Private Hospital',
    distance: '5.8 km',
    rating: 4.7,
    reviews: 1234,
    address: 'Press Enclave Road, Saket, New Delhi 110017',
    phone: '+91 11 2651 5050',
    hours: '24/7',
    services: ['COVID Testing', 'Telemedicine', 'ICU', 'Emergency Care'],
    waitTime: '~20 min',
  },
  {
    id: 5,
    name: 'Fortis Hospital',
    type: 'Private Hospital',
    distance: '6.5 km',
    rating: 4.6,
    reviews: 980,
    address: 'Sector B, Pocket 1, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi 110070',
    phone: '+91 11 4277 6222',
    hours: '24/7',
    services: ['COVID Testing', 'Vaccination', 'Telemedicine', 'Diagnostics'],
    waitTime: '~25 min',
  },
  {
    id: 6,
    name: 'Sir Ganga Ram Hospital',
    type: 'Private Hospital',
    distance: '7.2 km',
    rating: 4.5,
    reviews: 876,
    address: 'Rajinder Nagar, New Delhi, Delhi 110060',
    phone: '+91 11 2575 0000',
    hours: '24/7',
    services: ['Emergency Care', 'ICU', 'Multi-Specialty'],
    waitTime: '~35 min',
  },
];

const quickActions = [
  {
    icon: MapPin,
    title: 'Find Nearby',
    desc: 'Locate healthcare facilities',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Video,
    title: 'Telemedicine',
    desc: 'Virtual doctor visits',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Pill,
    title: 'Symptom Checker',
    desc: 'Check your symptoms',
    color: 'bg-accent text-accent-foreground',
  },
  {
    icon: Calendar,
    title: 'Book Vaccine',
    desc: 'Schedule vaccination',
    color: 'bg-success/10 text-success',
  },
];

export default function Healthcare() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedFacilities, setDisplayedFacilities] = useState(allFacilities.slice(0, 3));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleNearMe = () => {
    setIsSearching(true);
    toast({
      title: "Locating nearby facilities...",
      description: "Using your current location in India",
    });
    
    setTimeout(() => {
      setDisplayedFacilities(allFacilities.slice(0, 3));
      setIsSearching(false);
      toast({
        title: "Found facilities near you",
        description: `${allFacilities.length} healthcare facilities in Delhi NCR`,
      });
    }, 1500);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Enter a search term",
        description: "Please enter a location, facility name, or service",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setTimeout(() => {
      const filtered = allFacilities.filter(
        f => f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             f.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
             f.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setDisplayedFacilities(filtered.length > 0 ? filtered : allFacilities.slice(0, 3));
      setIsSearching(false);
      toast({
        title: filtered.length > 0 ? "Search results" : "No exact matches",
        description: filtered.length > 0 
          ? `Found ${filtered.length} facilities matching "${searchQuery}"` 
          : "Showing nearby facilities instead",
      });
    }, 1000);
  };

  const handleLoadMore = () => {
    if (displayedFacilities.length >= allFacilities.length) {
      toast({
        title: "All facilities loaded",
        description: "You've seen all available facilities",
      });
      return;
    }

    setIsLoadingMore(true);
    setTimeout(() => {
      const nextFacilities = allFacilities.slice(0, displayedFacilities.length + 3);
      setDisplayedFacilities(nextFacilities);
      setIsLoadingMore(false);
      toast({
        title: "More facilities loaded",
        description: `Showing ${nextFacilities.length} of ${allFacilities.length} facilities`,
      });
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: action,
      description: `Opening ${action.toLowerCase()} feature...`,
    });
  };

  const handleCall = (phone: string, name: string) => {
    window.open(`tel:${phone}`, '_self');
    toast({
      title: `Calling ${name}`,
      description: phone,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Stethoscope className="h-4 w-4" />
                <span>Healthcare Resources</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Find Healthcare Near You
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Access COVID testing, vaccination centers, telemedicine, and emergency care facilities across India.
              </p>
              
              {/* Search */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by location, facility, or service..."
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button size="lg" className="h-12 px-6" onClick={handleNearMe} disabled={isSearching}>
                  {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : <Navigation className="h-5 w-5 mr-2" />}
                  Near Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.title)}
                  className="glass-card p-4 hover-lift text-left group"
                >
                  <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Nearby Facilities</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {displayedFacilities.map((facility) => (
                <div key={facility.id} className="glass-card p-5 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Map Preview */}
                    <div className="w-full md:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{facility.name}</h3>
                            <Badge variant="secondary">{facility.type}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {facility.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-warning fill-warning" />
                              {facility.rating} ({facility.reviews})
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {facility.hours}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{facility.address}</p>
                          <div className="flex flex-wrap gap-2">
                            {facility.services.map((service, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-success mb-2">
                            <AlertCircle className="h-4 w-4" />
                            <span>Wait: {facility.waitTime}</span>
                          </div>
                          <Button 
                            size="sm" 
                            className="gap-1"
                            onClick={() => handleCall(facility.phone, facility.name)}
                          >
                            <Phone className="h-4 w-4" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="gap-2" 
                onClick={handleLoadMore}
                disabled={isLoadingMore || displayedFacilities.length >= allFacilities.length}
              >
                {isLoadingMore ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Load More Facilities
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
              {displayedFacilities.length >= allFacilities.length && (
                <p className="text-sm text-muted-foreground mt-2">All facilities loaded</p>
              )}
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="py-8 bg-destructive/10 border-y border-destructive/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-destructive/20">
                  <Phone className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold">Medical Emergency?</h3>
                  <p className="text-sm text-muted-foreground">
                    Call emergency services immediately
                  </p>
                </div>
              </div>
              <Button 
                variant="destructive" 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('tel:112', '_self')}
              >
                <Phone className="h-5 w-5" />
                Call 112
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
