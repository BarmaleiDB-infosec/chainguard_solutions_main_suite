import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "./ProductCard";

/**
 * Product Grid Component
 * Displays filterable grid of ChainGuard security products
 */
export const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      title: "Drop Hunting Sector Intel",
      description: "Weekly updated PDF guide with whale maps and strategic drop tracking for maximum airdrop opportunities.",
      price: "$4.99",
      category: "Analytics",
      buttonText: "Buy PDF Guide",
      buttonUrl: "https://barmacrpt.gumroad.com/l/jrgk",
      isPremium: false,
      isFree: false
    },
    {
      id: 2,
      title: "DeFi Safety Snapshot",
      description: "90-sec Rug Check PDF guide with comprehensive templates and real case studies.",
      price: "$9.99",
      category: "Security",
      buttonText: "Buy PDF Guide", 
      buttonUrl: "https://barmacrpt.gumroad.com/l/vunhtv",
      isPremium: false,
      isFree: false
    },
    {
      id: 3,
      title: "Eligibility Scorecard",
      description: "Automated wallet eligibility scoring PDF guide for airdrop qualification assessment.",
      price: "Free",
      category: "Analytics",
      buttonText: "Download PDF Template",
      buttonUrl: "#",
      isPremium: false,
      isFree: true
    },
    {
      id: 4,
      title: "AirScout",
      description: "AI-driven niche analysis web tool with real-time alerts for emerging opportunities and threats.",
      price: "Freemium",
      category: "AI",
      buttonText: "Try Web Tool",
      buttonUrl: "#",
      isPremium: true,
      isFree: false
    },
    {
      id: 5,
      title: "Smart Contract Guardian",
      description: "Advanced contract auditing with vulnerability scanning and security recommendations.",
      price: "$49.99",
      category: "Security",
      buttonText: "Purchase Now",
      buttonUrl: "#",
      isPremium: false,
      isFree: false
    },
    {
      id: 6,
      title: "Whale Tracker Pro",
      description: "Professional whale movement analysis with predictive market intelligence insights.",
      price: "$34.99",
      category: "Analytics",
      buttonText: "Get Access",
      buttonUrl: "#",
      isPremium: true,
      isFree: false
    }
  ];

  const filterProducts = (category: string) => {
    if (category === "all") return products;
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const tabsData = [
    { value: "all", label: "All Products", count: products.length },
    { value: "security", label: "Security", count: products.filter(p => p.category === "Security").length },
    { value: "analytics", label: "Analytics", count: products.filter(p => p.category === "Analytics").length },
    { value: "ai", label: "AI Tools", count: products.filter(p => p.category === "AI").length }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Security Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Web3 tools designed to protect, analyze, and optimize your digital assets
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/50 backdrop-blur-sm">
            {tabsData.map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-neon transition-all duration-300"
              >
                <span>{tab.label}</span>
                <span className="ml-2 text-xs opacity-70">({tab.count})</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProducts(tab.value).map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                      buttonText={product.buttonText}
                      buttonUrl={product.buttonUrl}
                      isPremium={product.isPremium}
                      isFree={product.isFree}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};