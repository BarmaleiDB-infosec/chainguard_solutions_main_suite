import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, Download, Eye, Shield, TrendingUp, Zap, Users, GraduationCap, Star, Clock } from "lucide-react";
import { FloatingShield } from "@/components/3D/FloatingShield";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import { ScrollReveal, ParallaxBackground, MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface Guide {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: any;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

const Education = () => {
  const { t } = useTranslation();
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const guides: Guide[] = [
    {
      id: 'smart-contracts-audit',
      title: t('education.guides.smartContracts.title'),
      description: t('education.guides.smartContracts.description'),
      content: t('education.guides.smartContracts.content'),
      icon: Shield,
      readTime: '15 min',
      difficulty: 'Advanced',
      category: 'Security'
    },
    {
      id: 'whale-tracker',
      title: t('education.guides.whaleTracker.title'),
      description: t('education.guides.whaleTracker.description'),
      content: t('education.guides.whaleTracker.content'),
      icon: TrendingUp,
      readTime: '12 min',
      difficulty: 'Intermediate',
      category: 'Analytics'
    },
    {
      id: 'airdrop-eligibility',
      title: t('education.guides.airdropEligibility.title'),
      description: t('education.guides.airdropEligibility.description'),
      content: t('education.guides.airdropEligibility.content'),
      icon: Zap,
      readTime: '10 min',
      difficulty: 'Beginner',
      category: 'Airdrops'
    },
    {
      id: 'defi-safety',
      title: t('education.guides.defiSafety.title'),
      description: t('education.guides.defiSafety.description'),
      content: t('education.guides.defiSafety.content'),
      icon: Users,
      readTime: '8 min',
      difficulty: 'Intermediate',
      category: 'DeFi'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const downloadGuide = (guide: Guide) => {
    // Create a simple HTML document with the guide content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${guide.title} - ChainGuard</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #8B5CF6; }
            .meta { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .content { line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>${guide.title}</h1>
          <div class="meta">
            <p><strong>Category:</strong> ${guide.category}</p>
            <p><strong>Difficulty:</strong> ${guide.difficulty}</p>
            <p><strong>Read Time:</strong> ${guide.readTime}</p>
            <p><strong>Description:</strong> ${guide.description}</p>
          </div>
          <div class="content">
            ${guide.content.replace(/\n/g, '<br>')}
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${guide.title.replace(/\s+/g, '_')}_ChainGuard.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PageTransition className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <ParallaxBackground speed={0.1} className="absolute top-20 left-10">
            <BookOpen className="w-8 h-8 text-primary/10 parallax-float" />
          </ParallaxBackground>
          <ParallaxBackground speed={0.15} className="absolute top-40 right-20">
            <GraduationCap className="w-6 h-6 text-secondary/10 parallax-float" style={{ animationDelay: '1s' }} />
          </ParallaxBackground>
          <ParallaxBackground speed={0.2} className="absolute bottom-40 left-1/4">
            <Star className="w-10 h-10 text-accent/10 parallax-float" style={{ animationDelay: '2s' }} />
          </ParallaxBackground>
        </div>

        {/* Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <div className="mb-8">
                  <FloatingShield />
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-violet-gold bg-clip-text text-transparent leading-tight">
                  {t('education.title')}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  {t('education.subtitle')}
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-6">
                    <GraduationCap className="h-12 w-12 text-primary mr-4" />
                    <h2 className="text-3xl font-bold text-foreground">{t('education.mission.title')}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('education.mission.description')}
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Statistics Section */}
        <ScrollReveal direction="up" className="py-20 px-4 bg-gradient-dark/30 relative">
          <div className="container mx-auto max-w-6xl">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, value: "4", label: t('education.stats.guides'), color: "text-neon-violet" },
                { icon: Users, value: "10K+", label: t('education.stats.learners'), color: "text-neon-gold" },
                { icon: Star, value: "4.9", label: t('education.stats.rating'), color: "text-neon-subtle" },
                { icon: Clock, value: "Free", label: t('education.stats.access'), color: "text-primary" }
              ].map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <MagneticHover strength={0.1}>
                    <Card className="text-center card-hover-lift perspective-card transform-3d border-border/50 bg-card/80 backdrop-blur-lg">
                      <CardHeader className="pb-4">
                        <div className="relative mx-auto w-fit">
                          <stat.icon className={`h-12 w-12 mx-auto ${stat.color} rotate-glow`} />
                          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl -z-10"></div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold text-foreground mb-2 bg-gradient-neon bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </MagneticHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Guides Grid */}
        <ScrollReveal direction="up" className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 text-foreground">
                {t('education.guides.title')}
              </h2>
              <div className="w-32 h-1 bg-gradient-neon mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('education.guides.subtitle')}
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <StaggerItem key={guide.id}>
                  <MagneticHover strength={0.1}>
                    <Card className="h-full card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="relative">
                            <guide.icon className="h-12 w-12 text-primary rotate-glow" />
                            <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-xl -z-10"></div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <Badge variant="outline" className={getDifficultyColor(guide.difficulty)}>
                              {guide.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {guide.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl mb-2 line-clamp-2">
                          {guide.title}
                        </CardTitle>
                        
                        <CardDescription className="text-base leading-relaxed line-clamp-3">
                          {guide.description}
                        </CardDescription>
                        
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {guide.readTime}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <div className="flex space-x-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                                onClick={() => setSelectedGuide(guide)}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                {t('education.buttons.read')}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] bg-card/95 backdrop-blur-md border-primary/20">
                              <DialogHeader>
                                <DialogTitle className="text-2xl flex items-center">
                                  <guide.icon className="h-6 w-6 mr-3 text-primary" />
                                  {guide.title}
                                </DialogTitle>
                                <DialogDescription className="text-base">
                                  {guide.description}
                                </DialogDescription>
                              </DialogHeader>
                              <ScrollArea className="h-[60vh] pr-4">
                                <div className="space-y-4">
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <Badge variant="outline" className={getDifficultyColor(guide.difficulty)}>
                                      {guide.difficulty}
                                    </Badge>
                                    <span className="flex items-center">
                                      <Clock className="h-4 w-4 mr-1" />
                                      {guide.readTime}
                                    </span>
                                    <Badge variant="secondary">{guide.category}</Badge>
                                  </div>
                                  <div className="prose prose-lg max-w-none text-foreground">
                                    <div className="whitespace-pre-line leading-relaxed">
                                      {guide.content}
                                    </div>
                                  </div>
                                </div>
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="default" 
                            className="flex-1 bg-gradient-neon hover:opacity-90"
                            onClick={() => downloadGuide(guide)}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            {t('education.buttons.download')}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </MagneticHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal direction="up" className="py-32 px-4 bg-gradient-dark/30 relative">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {t('education.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('education.cta.description')}
            </p>
            <MagneticHover strength={0.2}>
              <Button 
                variant="hero" 
                size="lg" 
                className="pulse-glow premium-glow micro-bounce ripple-effect text-lg px-8 py-4"
              >
                <BookOpen className="mr-3 h-6 w-6" />
                {t('education.cta.button')}
              </Button>
            </MagneticHover>
          </div>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
};

export default Education;