import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, TrendingUp, Users } from "lucide-react";

/**
 * Products Page - Comprehensive Web3 Security Tools
 */
const Products = () => {
  const stats = [
    {
      icon: Shield,
      value: "500K+",
      label: "Transactions Secured",
      color: "text-neon-red"
    },
    {
      icon: Users,
      value: "10K+", 
      label: "Active Users",
      color: "text-neon-yellow"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      color: "text-neon-green"
    },
    {
      icon: Zap,
      value: "150+",
      label: "Countries Served",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-hero/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-violet-gold bg-clip-text text-transparent">
              Security Arsenal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Web3 tools designed to protect, analyze, and optimize your digital assets. 
              From rug pull detection to whale tracking, we've got your back in the decentralized frontier.
            </p>
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              <Shield className="mr-2 h-5 w-5" />
              Start Protecting Your Assets
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="text-center hover:shadow-elegant transition-all duration-300 border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <ProductGrid />

        {/* Features Section */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Choose ChainGuard?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built by Web3 veterans, for Web3 pioneers. Our tools are battle-tested and continuously updated.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <Shield className="h-12 w-12 text-neon-red mb-4" />
                  <CardTitle className="text-xl">Enterprise Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Bank-grade security protocols protecting billions in digital assets. 
                    Real-time threat detection and automated response systems.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-neon-yellow mb-4" />
                  <CardTitle className="text-xl">Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Deep blockchain analysis with AI-powered insights. 
                    Track whale movements, market trends, and opportunity windows.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <Zap className="h-12 w-12 text-neon-green mb-4" />
                  <CardTitle className="text-xl">Smart Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Intelligent automation for airdrop hunting, portfolio management, 
                    and risk assessment. Work smarter, not harder.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;