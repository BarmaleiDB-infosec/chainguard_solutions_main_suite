import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Calendar, Crown, Download, ExternalLink, Key, Copy, Trash2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

/**
 * User Profile Page with Authentication Protection
 * Displays user information, API keys, and purchase history
 */
const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [purchases, setPurchases] = useState<any[]>([]);
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    display_name: '',
    bio: ''
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);
      await loadUserData(session.user.id);
    } catch (error) {
      console.error('Error checking user:', error);
      navigate('/auth');
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserData = async (userId: string) => {
    try {
      // Load profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (profileData) {
        setProfile(profileData);
        setEditForm({
          display_name: profileData.display_name || '',
          bio: profileData.bio || ''
        });
      }

      // Mock data for tables that don't exist yet in types
      setPurchases([]);
      setApiKeys([]);
      
    } catch (error) {
      console.error('Error loading user data:', error);
      toast({
        title: "Error",
        description: "Failed to load user data",
        variant: "destructive",
      });
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: editForm.display_name,
          bio: editForm.bio
        })
        .eq('user_id', user.id);

      if (error) throw error;

      await loadUserData(user.id);
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  const generateApiKey = async () => {
    if (!user) return;

    try {
      // Generate a simple API key for demo purposes
      const newKey = `cg_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
      
      // In real app, this would be stored in database
      const newApiKey = {
        id: Math.random().toString(),
        name: `API Key ${new Date().toLocaleDateString()}`,
        key_prefix: newKey.substring(0, 10),
        created_at: new Date().toISOString(),
        last_used_at: null,
        is_active: true
      };

      setApiKeys(prev => [newApiKey, ...prev]);
      
      toast({
        title: "API Key Generated",
        description: `Your new API key: ${newKey}. Save it now, you won't see it again!`,
        duration: 10000,
      });
    } catch (error) {
      console.error('Error generating API key:', error);
      toast({
        title: "Error",
        description: "Failed to generate API key",
        variant: "destructive",
      });
    }
  };

  const deleteApiKey = async (keyId: string) => {
    try {
      setApiKeys(prev => prev.filter(key => key.id !== keyId));
      toast({
        title: "Success",
        description: "API key deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting API key:', error);
      toast({
        title: "Error",
        description: "Failed to delete API key",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "API key prefix copied to clipboard",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your ChainGuard account and API access</p>
          </div>

          <div className="grid gap-8">
            {/* Profile Information */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-primary" />
                  <span>Account Information</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-6">
                  <Avatar className="w-20 h-20 border-2 border-primary/20">
                    <AvatarImage src={profile?.avatar_url} alt={profile?.display_name || user.email} />
                    <AvatarFallback className="bg-gradient-neon text-white text-xl font-bold">
                      {(profile?.display_name || user.email).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-4">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="display_name">Display Name</Label>
                          <Input
                            id="display_name"
                            value={editForm.display_name}
                            onChange={(e) => setEditForm(prev => ({...prev, display_name: e.target.value}))}
                            placeholder="Your display name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={editForm.bio}
                            onChange={(e) => setEditForm(prev => ({...prev, bio: e.target.value}))}
                            placeholder="Tell us about yourself..."
                            rows={3}
                          />
                        </div>
                        <Button onClick={handleUpdateProfile}>
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {profile?.display_name || user.email.split('@')[0]}
                        </h3>
                        <div className="flex items-center space-x-2 mt-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Member since {new Date(user.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        {profile?.bio && (
                          <p className="mt-3 text-muted-foreground">{profile.bio}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ChainGuard API Keys */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center space-x-3">
                      <Key className="h-6 w-6 text-primary" />
                      <span>ChainGuard API Keys</span>
                    </CardTitle>
                    <CardDescription>
                      Manage API keys for integrating with external services
                    </CardDescription>
                  </div>
                  <Button onClick={generateApiKey} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Generate Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {apiKeys.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Key className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p>No API keys generated yet</p>
                    <p className="text-sm">Generate your first API key to get started</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Key Prefix</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Last Used</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {apiKeys.map((key) => (
                        <TableRow key={key.id}>
                          <TableCell className="font-medium">{key.name}</TableCell>
                          <TableCell className="font-mono text-sm">
                            {key.key_prefix}...
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-6 w-6 p-0"
                              onClick={() => copyToClipboard(key.key_prefix)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </TableCell>
                          <TableCell>{new Date(key.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            {key.last_used_at ? new Date(key.last_used_at).toLocaleDateString() : 'Never'}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteApiKey(key.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
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
                {purchases.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Crown className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p>No purchases yet</p>
                    <p className="text-sm">Browse our products to get started</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => navigate('/products')}
                    >
                      Browse Products
                    </Button>
                  </div>
                ) : (
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
                        <TableRow key={purchase.id}>
                          <TableCell className="font-medium">
                            {purchase.product_name}
                          </TableCell>
                          <TableCell>{new Date(purchase.created_at).toLocaleDateString()}</TableCell>
                          <TableCell className="font-semibold">
                            ${purchase.amount} {purchase.currency}
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={purchase.status === 'completed' ? 'default' : 'secondary'}
                              className={
                                purchase.status === 'completed' 
                                  ? 'bg-green-500/20 text-green-500 border-green-500/30' 
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
                              {purchase.status === 'completed' && (
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
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;