import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechSection } from "@/components/TechSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { ScrollVisualization, AnimatedSection } from "@/components/ScrollVisualization";
import { useTranslation } from "react-i18next";

/**
 * ChainGuard Homepage - Web3 Security Platform
 * Features hero section, product showcase, and company information
 */
const Index = () => {
  const { t } = useTranslation();
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
        
        {/* Technology Section */}
        <AnimatedSection delay={300}>
          <TechSection />
        </AnimatedSection>
        
        {/* Services Section */}
        <AnimatedSection delay={400}>
          <ServicesSection />
        </AnimatedSection>
        
        {/* Featured Products Preview */}
        <AnimatedSection delay={500}>
          <section className="py-16 px-4 bg-gradient-subtle/20">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="neon-pulse subtle-glow"
                onClick={() => {
                  document.querySelector('.product-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Rocket className="mr-2 h-5 w-5" />
                {t('cta.button')}
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
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Security Tools
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Analytics Suite
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    AI Automation
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Enterprise Solutions
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="#about" 
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#mission" 
                    className="hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#mission')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@chainguard.ai" 
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/chainguard_assistant_bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Support Bot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
