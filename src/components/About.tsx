import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BarChart3, Bot, Zap } from "lucide-react";

/**
 * About Section Component
 * Showcases ChainGuard's core offerings with animated cards
 */
export const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Security",
      description: "Advanced rug pull detection, smart contract auditing, and real-time threat monitoring.",
      gradient: "from-neon-red to-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics", 
      description: "Comprehensive wallet analysis, whale tracking, and market intelligence insights.",
      gradient: "from-neon-yellow to-secondary"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent airdrop hunting, automated trading alerts, and portfolio optimization.",
      gradient: "from-neon-green to-primary-glow"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Web3 Security Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ChainGuard is a comprehensive ecosystem of tools designed for Web3 security, 
            advanced analytics, and intelligent automation. Protecting your digital assets 
            while maximizing opportunities in the decentralized frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} p-4 group-hover:shadow-neon transition-all duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Mission</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To make blockchain technology safe, transparent, and accessible to all. 
              We're democratizing Web3 security by providing enterprise-grade tools 
              through a freemium model that removes barriers of cost and complexity.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Vision</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become the premier shield and navigator in the Web3 ecosystem within 3-5 years. 
              Our goal is to secure 1 trillion transactions annually and serve as the gold standard 
              for decentralized security solutions worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};