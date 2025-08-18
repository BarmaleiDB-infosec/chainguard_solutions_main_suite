import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Bot, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboardHologram from "@/assets/dashboard-hologram.jpg";

/**
 * Services Section Component
 * Showcases ChainGuard's main service categories
 */
export const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Advanced rug pull detection, smart contract auditing, and threat monitoring",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Platform",
      description: "Comprehensive wallet analysis, whale tracking, and market intelligence",
      color: "text-secondary"
    },
    {
      icon: Bot,
      title: "AI-Powered Tools",
      description: "Intelligent airdrop hunting, automated alerts, and portfolio optimization",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${dashboardHologram})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Products & Services
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive Web3 security and analytics solutions designed to protect and empower your digital assets
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:-translate-y-3 group animate-slide-up"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-4 group-hover:shadow-neon group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-full h-full text-background" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/products')}
            className="bg-gradient-electric border-none text-background font-bold hover:scale-105 transition-transform electric-pulse"
          >
            <Zap className="mr-2 h-5 w-5" />
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
};