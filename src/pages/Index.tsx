import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { ScrollVisualization, AnimatedSection } from "@/components/ScrollVisualization";

/**
 * ChainGuard Homepage - Web3 Security Platform
 * Features hero section, product showcase, and company information
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollVisualization />
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <AnimatedSection delay={200}>
          <About />
        </AnimatedSection>
        
        {/* Featured Products Preview */}
        <AnimatedSection delay={400}>
          <section className="py-16 px-4 bg-gradient-subtle/20">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Secure Your Web3 Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of Web3 enthusiasts who trust ChainGuard to protect their digital assets and maximize opportunities.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="neon-pulse subtle-glow"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore Our Arsenal
              </Button>
            </div>
          </section>
        </AnimatedSection>

        {/* Products Grid Preview */}
        <AnimatedSection delay={600}>
          <ProductGrid />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-foreground mb-4">ChainGuard</h3>
              <p className="text-muted-foreground mb-4">
                Your ultimate shield in the Web3 frontier. Securing digital assets, 
                providing intelligence, and automating success since 2025.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2025 ChainGuard. Fortifying the decentralized future.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Security Tools</li>
                <li>Analytics Suite</li>
                <li>AI Automation</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Mission & Vision</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
