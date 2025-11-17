import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";

const Login = () => {
  const handleRedirect = () => {
    window.location.href = "https://openai.awsapps.com/start";
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">SSO Authentication</h2>
        <p className="text-muted-foreground">
          Authenticate with your organization's SSO provider
        </p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          You will be redirected to the secure SSO authentication portal at <strong>openai.awsapps.com</strong>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Login Portal</CardTitle>
          <CardDescription>Secure single sign-on authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Click the button below to proceed to the authentication portal:
            </p>
            <div className="text-sm text-muted-foreground bg-muted p-3 rounded-md font-mono">
              https://openai.awsapps.com/start
            </div>
            <Button onClick={handleRedirect} size="lg" className="w-full max-w-md">
              Continue to SSO Login
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
