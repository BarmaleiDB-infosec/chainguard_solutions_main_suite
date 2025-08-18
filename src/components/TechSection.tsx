import { useTranslation } from "react-i18next";
import techLayers from "@/assets/tech-layers.jpg";

/**
 * Technology Section Component
 * Showcases ChainGuard's technology stack with animated background
 */
export const TechSection = () => {
  const { t } = useTranslation();

  const techFeatures = [
    {
      title: "Blockchain Analysis",
      description: "Real-time monitoring across 100+ blockchain networks"
    },
    {
      title: "AI Security Engine", 
      description: "Machine learning powered threat detection and prevention"
    },
    {
      title: "Smart Contract Auditing",
      description: "Automated vulnerability scanning and manual security reviews"
    },
    {
      title: "Predictive Analytics",
      description: "Market intelligence and opportunity identification"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${techLayers})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Technology Stack
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Cutting-edge blockchain security infrastructure powered by advanced AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};