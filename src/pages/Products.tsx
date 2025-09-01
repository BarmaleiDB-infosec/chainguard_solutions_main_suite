import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, TrendingUp, Users, Binary, Cpu, Network } from "lucide-react";
import { FloatingShield } from "@/components/3D/FloatingShield";
import { CyberCube } from "@/components/3D/CyberCube";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/animations/PageTransition";
import { ScrollReveal, ParallaxBackground, MagneticHover } from "@/components/animations/EnhancedScrollAnimations";
import dashboardHologram from "@/assets/dashboard-hologram.jpg";

/**
 * Products Page - Comprehensive Web3 Security Tools
 */
const Products = () => {
  const stats = [
    {
      icon: Shield,
      value: "500K+",
      label: "Transactions Secured",
      color: "text-neon-violet"
    },
    {
      icon: Users,
      value: "10K+", 
      label: "Active Users",
      color: "text-neon-gold"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      color: "text-neon-subtle"
    },
    {
      icon: Zap,
      value: "150+",
      label: "Countries Served",
      color: "text-primary"
    }
  ];

  return (
    <PageTransition className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <ParallaxBackground speed={0.1} className="absolute top-20 left-10">
            <Binary className="w-8 h-8 text-primary/10 parallax-float" />
          </ParallaxBackground>
          <ParallaxBackground speed={0.15} className="absolute top-40 right-20">
            <Cpu className="w-6 h-6 text-secondary/10 parallax-float" style={{ animationDelay: '1s' }} />
          </ParallaxBackground>
          <ParallaxBackground speed={0.2} className="absolute bottom-40 left-1/4">
            <Network className="w-10 h-10 text-accent/10 parallax-float" style={{ animationDelay: '2s' }} />
          </ParallaxBackground>
        </div>

        {/* Enhanced Hero Section */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Hero Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${dashboardHologram})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <StaggerContainer className="space-y-8">
              {/* 3D Shield */}
              <StaggerItem>
                <div className="mb-8">
                  <FloatingShield />
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-violet-gold bg-clip-text text-transparent leading-tight">
                  Security Arsenal
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive Web3 tools designed to protect, analyze, and optimize your digital assets. 
                  From rug pull detection to whale tracking, we've got your back in the decentralized frontier.
                </p>
              </StaggerItem>

              <StaggerItem>
                <MagneticHover strength={0.2}>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="pulse-glow premium-glow micro-bounce ripple-effect text-lg px-8 py-4"
                  >
                    <Shield className="mr-3 h-6 w-6" />
                    Start Protecting Your Assets
                  </Button>
                </MagneticHover>
              </StaggerItem>
            </StaggerContainer>

            {/* Floating Cyber Cubes */}
            <div className="absolute top-20 left-10 opacity-30">
              <CyberCube size={80} />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20">
              <CyberCube size={60} autoRotate={false} />
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <ScrollReveal direction="up" className="py-20 px-4 bg-gradient-dark/30 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Trusted by Web3 Leaders
              </h2>
              <div className="w-24 h-1 bg-gradient-neon mx-auto"></div>
            </div>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

        {/* Products Grid */}
        <ProductGrid />

        {/* Enhanced Features Section */}
        <ScrollReveal direction="up" className="py-32 px-4 bg-muted/30 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <ScrollReveal direction="scale" delay={0.2}>
                <h2 className="text-5xl font-bold mb-8 text-foreground">
                  Why Choose ChainGuard?
                </h2>
                <div className="w-32 h-1 bg-gradient-neon mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Built by Web3 veterans, for Web3 pioneers. Our tools are battle-tested and continuously updated.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-10">
              <StaggerItem>
                <MagneticHover strength={0.15}>
                  <Card className="h-full card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <div className="relative mb-6">
                        <Shield className="h-16 w-16 text-neon-violet rotate-glow mx-auto" />
                        <div className="absolute inset-0 bg-gradient-radial from-neon-violet/30 to-transparent rounded-full blur-2xl -z-10"></div>
                      </div>
                      <CardTitle className="text-2xl text-center">Enterprise Security</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed text-center">
                        Bank-grade security protocols protecting billions in digital assets. 
                        Real-time threat detection and automated response systems.
                      </CardDescription>
                      <div className="mt-6 flex justify-center">
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-neon-violet rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </StaggerItem>

              <StaggerItem>
                <MagneticHover strength={0.15}>
                  <Card className="h-full card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <div className="relative mb-6">
                        <TrendingUp className="h-16 w-16 text-neon-gold rotate-glow mx-auto" />
                        <div className="absolute inset-0 bg-gradient-radial from-neon-gold/30 to-transparent rounded-full blur-2xl -z-10"></div>
                      </div>
                      <CardTitle className="text-2xl text-center">Advanced Analytics</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed text-center">
                        Deep blockchain analysis with AI-powered insights. 
                        Track whale movements, market trends, and opportunity windows.
                      </CardDescription>
                      <div className="mt-6 flex justify-center">
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-neon-gold rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </StaggerItem>

              <StaggerItem>
                <MagneticHover strength={0.15}>
                  <Card className="h-full card-hover-lift perspective-card transform-3d border-border/50 bg-card/90 backdrop-blur-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <div className="relative mb-6">
                        <Zap className="h-16 w-16 text-neon-subtle rotate-glow mx-auto" />
                        <div className="absolute inset-0 bg-gradient-radial from-neon-subtle/30 to-transparent rounded-full blur-2xl -z-10"></div>
                      </div>
                      <CardTitle className="text-2xl text-center">Smart Automation</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed text-center">
                        Intelligent automation for airdrop hunting, portfolio management, 
                        and risk assessment. Work smarter, not harder.
                      </CardDescription>
                      <div className="mt-6 flex justify-center">
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-neon-subtle rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
};

export default Products;