import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Calendar, Crown, Download, ExternalLink } from "lucide-react";

/**
 * User Profile Page
 * Displays user information, subscription status, and purchase history
 */
const Profile = () => {
  // Mock user data - in real app this would come from auth context
  const user = {
    name: "Alex Chen",
    email: "alex.chen@example.com",
    joinDate: "January 15, 2025",
    subscription: "Pro",
    avatar: "/placeholder-avatar.jpg"
  };

  // Mock purchase history
  const purchases = [
    {
      id: "TX001",
      product: "Drop Hunting Sector Intel",
      date: "2025-01-10",
      amount: "$24.99",
      status: "Completed"
    },
    {
      id: "TX002", 
      product: "DeFi Safety Snapshot",
      date: "2025-01-08",
      amount: "$9.99",
      status: "Completed"
    },
    {
      id: "TX003",
      product: "AirScout Pro",
      date: "2025-01-05",
      amount: "$10.00/month",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your ChainGuard account and view your security tools</p>
          </div>

          <div className="grid gap-8">
            {/* Profile Information */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-primary" />
                  <span>Account Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <Avatar className="w-20 h-20 border-2 border-primary/20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-violet-gold text-white text-xl font-bold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{user.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Member since {user.joinDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Badge 
                        className={`${
                          user.subscription === 'Pro' 
                            ? 'bg-gradient-violet-gold text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <Crown className="h-3 w-3 mr-1" />
                        {user.subscription} Member
                      </Badge>
                      
                      <Button variant="outline" size="sm">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase History */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>
                  Your ChainGuard security tools and subscriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {purchases.map((purchase) => (
                      <TableRow key={purchase.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          {purchase.product}
                        </TableCell>
                        <TableCell>{purchase.date}</TableCell>
                        <TableCell className="font-semibold">
                          {purchase.amount}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={purchase.status === 'Active' ? 'default' : 'secondary'}
                            className={
                              purchase.status === 'Active' 
                                ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                                : ''
                            }
                          >
                            {purchase.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                            {purchase.status === 'Active' && (
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Access
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Manage your account and explore new features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-16 flex-col">
                    <User className="h-5 w-5 mb-2" />
                    Account Settings
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <Crown className="h-5 w-5 mb-2" />
                    Upgrade Plan
                  </Button>
                  <Button variant="outline" className="h-16 flex-col">
                    <ExternalLink className="h-5 w-5 mb-2" />
                    Browse Tools
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;