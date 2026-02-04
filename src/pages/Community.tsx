import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Users, 
  HandHeart, 
  Home, 
  MessageCircle, 
  ShoppingBag,
  MapPin,
  Clock,
  Heart,
  Share2,
  Filter,
  Plus,
  Send,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialHelpOffers = [
  {
    id: 1,
    user: 'Priya S.',
    avatar: 'PS',
    type: 'offer',
    category: 'Groceries',
    title: 'Offering grocery delivery in South Delhi',
    message: 'I can pick up groceries from local markets for anyone who needs help. Available Mon-Fri afternoons.',
    location: 'South Delhi',
    time: '2 hours ago',
    likes: 12,
    liked: false,
  },
  {
    id: 2,
    user: 'Rahul M.',
    avatar: 'RM',
    type: 'request',
    category: 'Medical',
    title: 'Need help picking up prescription',
    message: 'Looking for someone to help pick up medication from Apollo Pharmacy, Connaught Place.',
    location: 'Central Delhi',
    time: '4 hours ago',
    likes: 5,
    liked: false,
  },
  {
    id: 3,
    user: 'Ananya K.',
    avatar: 'AK',
    type: 'offer',
    category: 'Emotional Support',
    title: 'Available to chat and support',
    message: 'If anyone is feeling isolated or anxious, I\'m here to talk. Virtual chai sessions welcome!',
    location: 'All Delhi NCR',
    time: '6 hours ago',
    likes: 24,
    liked: false,
  },
  {
    id: 4,
    user: 'Vikram R.',
    avatar: 'VR',
    type: 'offer',
    category: 'Transportation',
    title: 'Offering rides to medical appointments',
    message: 'Can drive seniors or immunocompromised neighbors to their doctor appointments in Gurgaon.',
    location: 'Gurgaon',
    time: '1 day ago',
    likes: 18,
    liked: false,
  },
];

const communityStats = [
  { label: 'Active Helpers', value: '4,567', icon: HandHeart },
  { label: 'Requests Fulfilled', value: '12,890', icon: Home },
  { label: 'Neighbors Connected', value: '45,678', icon: Users },
  { label: 'Items Shared', value: '8,234', icon: ShoppingBag },
];

const localUpdates = [
  {
    id: 1,
    user: 'Delhi Health Dept.',
    message: 'Free COVID testing at Rajiv Chowk Metro Station. Walk-ins welcome 9 AM - 6 PM.',
    time: '1 hour ago',
  },
  {
    id: 2,
    user: 'Community Board',
    message: 'Ration distribution this Saturday 10am-2pm at Nehru Stadium.',
    time: '3 hours ago',
  },
  {
    id: 3,
    user: 'Local Pharmacy',
    message: 'MedPlus Pharmacy offering free delivery for seniors. Call 1800-123-4567.',
    time: '5 hours ago',
  },
];

const categories = ['Groceries', 'Medical', 'Transportation', 'Emotional Support', 'Childcare', 'Pet Care', 'Other'];

export default function Community() {
  const [helpOffers, setHelpOffers] = useState(initialHelpOffers);
  const [newMessage, setNewMessage] = useState('');
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    category: '',
    location: '',
  });
  const { toast } = useToast();

  const handleLike = (id: number) => {
    setHelpOffers(prev => prev.map(post => {
      if (post.id === id) {
        const newLiked = !post.liked;
        return {
          ...post,
          liked: newLiked,
          likes: newLiked ? post.likes + 1 : post.likes - 1
        };
      }
      return post;
    }));
  };

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'SafeGuard Community',
        text: title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share this post with others",
      });
    }
  };

  const handleRespond = (userName: string) => {
    toast({
      title: "Message sent!",
      description: `Your response has been sent to ${userName}`,
    });
  };

  const handlePostUpdate = () => {
    if (!newMessage.trim()) {
      toast({
        title: "Enter a message",
        description: "Please write something to share",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Update posted!",
      description: "Your update is now visible to your community",
    });
    setNewMessage('');
  };

  const handleSubmitOffer = () => {
    if (!formData.title || !formData.message || !formData.category || !formData.location) {
      toast({
        title: "Fill all fields",
        description: "Please complete all required fields",
        variant: "destructive",
      });
      return;
    }

    const newPost = {
      id: Date.now(),
      user: 'You',
      avatar: 'YO',
      type: 'offer' as const,
      category: formData.category,
      title: formData.title,
      message: formData.message,
      location: formData.location,
      time: 'Just now',
      likes: 0,
      liked: false,
    };

    setHelpOffers(prev => [newPost, ...prev]);
    setShowOfferModal(false);
    setFormData({ title: '', message: '', category: '', location: '' });
    toast({
      title: "Help offer posted!",
      description: "Thank you for offering to help your community",
    });
  };

  const handleSubmitRequest = () => {
    if (!formData.title || !formData.message || !formData.category || !formData.location) {
      toast({
        title: "Fill all fields",
        description: "Please complete all required fields",
        variant: "destructive",
      });
      return;
    }

    const newPost = {
      id: Date.now(),
      user: 'You',
      avatar: 'YO',
      type: 'request' as const,
      category: formData.category,
      title: formData.title,
      message: formData.message,
      location: formData.location,
      time: 'Just now',
      likes: 0,
      liked: false,
    };

    setHelpOffers(prev => [newPost, ...prev]);
    setShowRequestModal(false);
    setFormData({ title: '', message: '', category: '', location: '' });
    toast({
      title: "Help request posted!",
      description: "Your request is now visible. Helpers will reach out soon.",
    });
  };

  const renderPost = (post: typeof helpOffers[0]) => (
    <div key={post.id} className="glass-card p-5 hover-lift">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarFallback className={post.type === 'offer' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}>
            {post.avatar}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium">{post.user}</span>
            <Badge variant={post.type === 'offer' ? 'default' : 'secondary'} className="text-xs">
              {post.type === 'offer' ? 'Offering Help' : 'Needs Help'}
            </Badge>
            <Badge variant="outline" className="text-xs">{post.category}</Badge>
          </div>
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{post.message}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {post.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`gap-1 h-8 ${post.liked ? 'text-destructive' : ''}`}
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`h-4 w-4 ${post.liked ? 'fill-current' : ''}`} />
                <span className="text-xs">{post.likes}</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8"
                onClick={() => handleShare(post.title)}
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                size="sm" 
                className="h-8"
                onClick={() => handleRespond(post.user)}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Respond
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-success/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
                <Users className="h-4 w-4" />
                <span>Community Connection</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stronger Together
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with neighbors across India, offer or request help, and share local resources. We're all in this together.
              </p>
              <div className="flex gap-3">
                <Button className="gap-2" onClick={() => setShowOfferModal(true)}>
                  <Plus className="h-4 w-4" />
                  Offer Help
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => setShowRequestModal(true)}>
                  <HandHeart className="h-4 w-4" />
                  Request Help
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-6 border-b border-border/40 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {communityStats.map((stat, index) => (
                <div key={index} className="glass-card p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <stat.icon className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Help Board */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="all" className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="offers">Offers</TabsTrigger>
                      <TabsTrigger value="requests">Requests</TabsTrigger>
                    </TabsList>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </div>

                  <TabsContent value="all" className="space-y-4">
                    {helpOffers.map(renderPost)}
                  </TabsContent>

                  <TabsContent value="offers" className="space-y-4">
                    {helpOffers.filter(p => p.type === 'offer').map(renderPost)}
                  </TabsContent>

                  <TabsContent value="requests" className="space-y-4">
                    {helpOffers.filter(p => p.type === 'request').map(renderPost)}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Post */}
                <div className="glass-card p-5">
                  <h3 className="font-semibold mb-4">Share Update</h3>
                  <Textarea
                    placeholder="Share local info with your community..."
                    className="mb-3 resize-none"
                    rows={3}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button className="w-full gap-2" onClick={handlePostUpdate}>
                    <Send className="h-4 w-4" />
                    Post Update
                  </Button>
                </div>

                {/* Local Updates */}
                <div className="glass-card p-5">
                  <h3 className="font-semibold mb-4">Local Updates</h3>
                  <div className="space-y-4">
                    {localUpdates.map((update) => (
                      <div key={update.id} className="pb-4 border-b border-border/40 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{update.user}</span>
                          <span className="text-xs text-muted-foreground">{update.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{update.message}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Resources */}
                <div className="glass-card p-5 bg-gradient-to-br from-primary/5 to-primary/10">
                  <h3 className="font-semibold mb-3">Emergency Resources (India)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Emergency: 112
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      COVID Helpline: 1075
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Women Helpline: 181
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Child Helpline: 1098
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Offer Help Modal */}
      <Dialog open={showOfferModal} onOpenChange={setShowOfferModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Offer Help</DialogTitle>
            <DialogDescription>
              Let your community know how you can help
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="offer-title">Title</Label>
              <Input 
                id="offer-title"
                placeholder="e.g., Offering grocery delivery"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="offer-category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="offer-location">Location</Label>
              <Input 
                id="offer-location"
                placeholder="e.g., South Delhi, Gurgaon"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="offer-message">Description</Label>
              <Textarea 
                id="offer-message"
                placeholder="Describe how you can help..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <Button className="w-full" onClick={handleSubmitOffer}>
              <Plus className="h-4 w-4 mr-2" />
              Post Offer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Request Help Modal */}
      <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request Help</DialogTitle>
            <DialogDescription>
              Let your community know what you need
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="request-title">Title</Label>
              <Input 
                id="request-title"
                placeholder="e.g., Need help with groceries"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="request-category">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="request-location">Location</Label>
              <Input 
                id="request-location"
                placeholder="e.g., Central Delhi, Noida"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="request-message">Description</Label>
              <Textarea 
                id="request-message"
                placeholder="Describe what help you need..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <Button className="w-full" onClick={handleSubmitRequest}>
              <HandHeart className="h-4 w-4 mr-2" />
              Post Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
