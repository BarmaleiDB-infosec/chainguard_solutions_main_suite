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
      title: t('product.smartContracts.title'),
      description: t('product.smartContracts.description'),
      price: "€3",
      category: "Security",
      buttonText: t('product.smartContracts.button'),
      buttonUrl: "https://barmacrpt.gumroad.com/l/mrhvgn",
      isPremium: false,
      isFree: false
    },
    {
      id: 2,
      title: t('product.whaleTracker.title'),
      description: t('product.whaleTracker.description'),
      price: "€9.99",
      category: "Analytics",
      buttonText: t('product.whaleTracker.button'),
      buttonUrl: "https://barmacrpt.gumroad.com/l/ljrgk",
      isPremium: false,
      isFree: false
    },
    {
      id: 3,
      title: t('product.airdropEligibility.title'),
      description: t('product.airdropEligibility.description'),
      price: "€5",
      category: "Analytics",
      buttonText: t('product.airdropEligibility.button'),
      buttonUrl: "https://barmacrpt.gumroad.com/l/jvgauo",
      isPremium: false,
      isFree: false
    },
    {
      id: 4,
      title: t('product.defiSafety.title'),
      description: t('product.defiSafety.description'),
      price: "€9.99",
      category: "Security",
      buttonText: t('product.defiSafety.button'),
      buttonUrl: "https://barmacrpt.gumroad.com/l/ounhfv",
      isPremium: false,
      isFree: false
    },
    {
      id: 5,
      title: t('product.airscout.title'),
      description: t('product.airscout.description'),
      price: t('freemium'),
      category: "AI",
      buttonText: t('product.airscout.button'),
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
    { value: "all", label: t('products.allProducts'), count: products.length },
    { value: "security", label: t('products.security'), count: products.filter(p => p.category === "Security").length },
    { value: "analytics", label: t('products.analytics'), count: products.filter(p => p.category === "Analytics").length },
    { value: "ai", label: t('products.ai'), count: products.filter(p => p.category === "AI").length }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
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