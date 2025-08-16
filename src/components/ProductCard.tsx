import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Play } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  category: string;
  buttonText: string;
  buttonUrl?: string;
  isPremium?: boolean;
  isFree?: boolean;
}

/**
 * Product Card Component
 * Displays individual Web3 security tools with neon styling
 */
export const ProductCard = ({ 
  title, 
  description, 
  price, 
  category, 
  buttonText, 
  buttonUrl,
  isPremium = false,
  isFree = false 
}: ProductCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'security': return 'bg-neon-violet/20 text-neon-violet border-neon-violet/30';
      case 'analytics': return 'bg-neon-gold/20 text-neon-gold border-neon-gold/30';
      case 'ai': return 'bg-neon-subtle/20 text-neon-subtle border-neon-subtle/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getButtonIcon = () => {
    if (isFree) return <Download className="mr-2 h-4 w-4" />;
    if (isPremium) return <Play className="mr-2 h-4 w-4" />;
    return <ExternalLink className="mr-2 h-4 w-4" />;
  };

  const handleButtonClick = () => {
    if (buttonUrl) {
      window.open(buttonUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge 
            variant="outline" 
            className={`${getCategoryColor(category)} border`}
          >
            {category}
          </Badge>
          {isPremium && (
            <Badge className="bg-gradient-violet-gold text-primary-foreground">
              Pro
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="mb-6">
          <div className="text-2xl font-bold text-foreground">
            {isFree ? (
              <span className="text-neon-gold">Free</span>
            ) : (
              <span className="bg-gradient-violet-gold bg-clip-text text-transparent">
                {price}
              </span>
            )}
          </div>
        </div>

        <Button 
          variant={isFree ? "outline" : isPremium ? "default" : "secondary"}
          className={`w-full group-hover:shadow-neon transition-all duration-300 ${
            isFree 
              ? "border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-background" 
              : isPremium 
                ? "bg-gradient-violet-gold hover:shadow-gold" 
                : ""
          }`}
          onClick={handleButtonClick}
        >
          {getButtonIcon()}
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};