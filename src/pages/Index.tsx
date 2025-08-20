import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { TechSection } from "@/components/TechSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollVisualization } from "@/components/ScrollVisualization";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductGrid } from "@/components/ProductGrid";
import { Rocket, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "@/components/ScrollVisualization";

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
        
        {/* Call to Action */}
        <AnimatedSection delay={500}>
          <section className="py-24 px-4 bg-gradient-dark/20">
            <div className="container mx-auto max-w-7xl px-4 pt-20 pb-12">
              <div className="text-center mb-16 bg-gradient-dark p-12 rounded-xl border border-primary/20 shadow-elegant">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  {t('cta.title')}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t('cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-background"
                    onClick={() => {
                      window.open('https://t.me/chainguard_support_bot', '_blank');
                    }}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('contact.button')}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Products Grid */}
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
              <h4 className="font-semibold text-foreground mb-4">{t('footer.products')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {t('footer.securityTools')}
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {t('footer.analyticsSuite')}
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {t('footer.aiAutomation')}
                  </a>
                </li>
                <li>
                  <a 
                    href="/products" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {t('footer.enterpriseSolutions')}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
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
                    {t('footer.aboutUs')}
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
                    {t('footer.missionVision')}
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/chainguard_support_bot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {t('contact.support')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('footer.support')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a 
                    href="https://t.me/chainguard_support_bot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/chainguard_support_bot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Technical Support
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/chainguard_support_bot" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Community
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