import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Settings2, Key, Bell, User, Save, Eye, EyeOff } from "lucide-react";

/**
 * Settings Page
 * Manages user preferences, API keys, and notification settings
 */
const Settings = () => {
  const [showApiKeys, setShowApiKeys] = useState({
    serper: false,
    firecrawl: false,
    openai: false
  });

  const [settings, setSettings] = useState({
    // Profile settings
    name: "Alex Chen",
    email: "alex.chen@example.com",
    
    // API Keys (masked for security)
    serperKey: "sk-****",
    firecrawlKey: "fc-****",
    openaiKey: "sk-****",
    
    // Notification preferences
    emailNotifications: true,
    telegramNotifications: false,
    weeklyReports: true,
    threatAlerts: true,
    marketUpdates: false,
    
    // Frequency settings
    notificationFrequency: "daily"
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log("Saving settings:", settings);
  };

  const toggleApiKeyVisibility = (keyType: 'serper' | 'firecrawl' | 'openai') => {
    setShowApiKeys(prev => ({
      ...prev,
      [keyType]: !prev[keyType]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
            <p className="text-muted-foreground">Configure your ChainGuard preferences and integrations</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
              <TabsTrigger 
                value="profile"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="api-keys"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Key className="mr-2 h-4 w-4" />
                API Keys
              </TabsTrigger>
              <TabsTrigger 
                value="notifications"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Settings2 className="h-6 w-6 text-primary" />
                    <span>Profile Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your personal information and account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        value={settings.name}
                        onChange={(e) => setSettings(prev => ({ ...prev, name: e.target.value }))}
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">Account Status</h4>
                      <p className="text-sm text-muted-foreground">Your current subscription plan</p>
                    </div>
                    <Badge className="bg-gradient-violet-gold text-primary-foreground">
                      Pro Member
                    </Badge>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* API Keys */}
            <TabsContent value="api-keys">
              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Key className="h-6 w-6 text-primary" />
                    <span>API Keys</span>
                  </CardTitle>
                  <CardDescription>
                    Configure your external service integrations for enhanced functionality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Serper API */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-yellow/20 rounded-full flex items-center justify-center">
                        <Key className="h-4 w-4 text-neon-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Serper API Key</h4>
                        <p className="text-sm text-muted-foreground">For search and data retrieval</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        type={showApiKeys.serper ? "text" : "password"}
                        value={showApiKeys.serper ? "sk-example-serper-key-12345" : settings.serperKey}
                        className="border-primary/20 focus:border-primary flex-1"
                        placeholder="Enter your Serper API key"
                      />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => toggleApiKeyVisibility('serper')}
                        className="border-primary/20 hover:bg-primary/10"
                      >
                        {showApiKeys.serper ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Firecrawl API */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-red/20 rounded-full flex items-center justify-center">
                        <Key className="h-4 w-4 text-neon-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Firecrawl API Key</h4>
                        <p className="text-sm text-muted-foreground">For web scraping and analysis</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        type={showApiKeys.firecrawl ? "text" : "password"}
                        value={showApiKeys.firecrawl ? "fc-example-firecrawl-key-67890" : settings.firecrawlKey}
                        className="border-primary/20 focus:border-primary flex-1"
                        placeholder="Enter your Firecrawl API key"
                      />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => toggleApiKeyVisibility('firecrawl')}
                        className="border-primary/20 hover:bg-primary/10"
                      >
                        {showApiKeys.firecrawl ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* OpenAI API */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center">
                        <Key className="h-4 w-4 text-neon-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">OpenAI API Key</h4>
                        <p className="text-sm text-muted-foreground">For AI-powered analysis</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input 
                        type={showApiKeys.openai ? "text" : "password"}
                        value={showApiKeys.openai ? "sk-example-openai-key-abcdef" : settings.openaiKey}
                        className="border-primary/20 focus:border-primary flex-1"
                        placeholder="Enter your OpenAI API key"
                      />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => toggleApiKeyVisibility('openai')}
                        className="border-primary/20 hover:bg-primary/10"
                      >
                        {showApiKeys.openai ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save API Keys
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications */}
            <TabsContent value="notifications">
              <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Bell className="h-6 w-6 text-primary" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                  <CardDescription>
                    Customize how and when you receive updates from ChainGuard
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Notification Types */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Notification Types</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch 
                          id="email-notifications"
                          checked={settings.emailNotifications}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, emailNotifications: checked }))
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="telegram-notifications">Telegram Notifications</Label>
                          <p className="text-sm text-muted-foreground">Instant alerts via Telegram bot</p>
                        </div>
                        <Switch 
                          id="telegram-notifications"
                          checked={settings.telegramNotifications}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, telegramNotifications: checked }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Alert Categories */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Alert Categories</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="threat-alerts">Security Threat Alerts</Label>
                          <p className="text-sm text-muted-foreground">Immediate rug pull and scam warnings</p>
                        </div>
                        <Switch 
                          id="threat-alerts"
                          checked={settings.threatAlerts}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, threatAlerts: checked }))
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="market-updates">Market Updates</Label>
                          <p className="text-sm text-muted-foreground">Whale movements and price alerts</p>
                        </div>
                        <Switch 
                          id="market-updates"
                          checked={settings.marketUpdates}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, marketUpdates: checked }))
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="weekly-reports">Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">Summary of your portfolio and market</p>
                        </div>
                        <Switch 
                          id="weekly-reports"
                          checked={settings.weeklyReports}
                          onCheckedChange={(checked) => 
                            setSettings(prev => ({ ...prev, weeklyReports: checked }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;