import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "./ProductCard";
import { useTranslation } from "react-i18next";

/**
 * Product Grid Component
 * Displays filterable grid of ChainGuard security products
 */
export const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: "Smart Contract Audit",
      description: "Get a professional review of smart contracts for critical vulnerabilities, logic bugs, and economicks.",
      price: "$299",
      category: "Security",
      buttonText: "Buy PDF Guide",
      buttonUrl: "https://barmacrpt.gumroad.com/l/mrhvgn",
      isPremium: true,
      isFree: false,
      includes: ["Security analysis of smart contracts", "Report with findings and recommendation", "Re-check after fixes"]
    },
    {
      id: 2,
      title: "Whale Tracking & Sector Intel",
      description: "Track whale movements and sector rotation insights with advanced analytics tools including Arkham, Dune, and Spotchain.",
      price: "$99",
      category: "Analytics",
      buttonText: "Buy PDF Guide",
      buttonUrl: "https://barmacrpt.gumroad.com/l/ljrgk",
      isPremium: false,
      isFree: false,
      tools: ["ARKHAM", "DUNE", "SPOTCHAIN"]
    },
    {
      id: 3,
      title: "Airdrop Eligibility Guide",
      description: "Track eligibility faster using advanced tools and analytics platforms for maximum airdrop opportunities.",
      price: "$49",
      category: "Analytics",
      buttonText: "Buy PDF Guide",
      buttonUrl: "https://barmacrpt.gumroad.com/l/jvgauo",
      isPremium: false,
      isFree: false,
      networks: ["zkSync", "LayerZo", "Starknet"],
      tools: ["ARKHAM", "LAYER3 DEBANK"]
    },
    {
      id: 4,
      title: "DeFi Safety Snapshot",
      description: "12 risk indicators with 90-second rug check system. Complete PDF template and case studies included.",
      price: "$9.99",
      category: "Security",
      buttonText: "Buy PDF Guide",
      buttonUrl: "https://barmacrpt.gumroad.com/l/ounhfv",
      isPremium: false,
      isFree: false,
      features: ["12 RISK INDICATORS", "90-SEC RUG CHECK", "PDF TEMPLATE + CASE STUDIES"]
    }
  ];

  const filterProducts = (category: string) => {
    if (category === "all") return products;
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const tabsData = [
    { value: "all", label: t('products.allProducts'), count: products.length },
    { value: "security", label: t('products.security'), count: products.filter(p => p.category === "Security").length },
    { value: "analytics", label: t('products.analytics'), count: products.filter(p => p.category === "Analytics").length },
    { value: "ai", label: t('products.ai'), count: products.filter(p => p.category === "AI").length }
  ];

  return (
    <section className="product-grid py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/30 backdrop-blur-md border border-primary/20 shadow-neon">
            {tabsData.map((tab, index) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value}
                className="relative futuristic-border data-[state=active]:bg-gradient-neon data-[state=active]:text-background data-[state=active]:shadow-purple electric-pulse data-[state=active]:font-bold transition-all duration-500 animate-tab-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{tab.label}</span>
                <span className="ml-2 text-xs opacity-70 relative z-10">({tab.count})</span>
                <div className="absolute inset-0 bg-gradient-electric opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProducts(tab.value).map((product, index) => (
                  <div 
                    key={product.id}
                    className="slide-in-glow"
                    style={{ animationDelay: `${index * 150}ms` }}
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