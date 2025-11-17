import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { CheckCircle2, Settings, ExternalLink } from "lucide-react";

const CloudProvider = () => {
  const { provider } = useParams<{ provider: string }>();

  const providerData: Record<string, any> = {
    aws: {
      name: "Amazon Web Services",
      services: [
        { name: "Amazon Bedrock", status: "Active", description: "Build and scale generative AI applications" },
        { name: "SageMaker", status: "Active", description: "Build, train, and deploy ML models" },
        { name: "Rekognition", status: "Active", description: "Image and video analysis" },
        { name: "Comprehend", status: "Active", description: "Natural language processing" },
        { name: "Textract", status: "Active", description: "Extract text from documents" },
      ],
    },
    azure: {
      name: "Microsoft Azure",
      services: [
        { name: "Azure AI Foundry", status: "Active", description: "Unified platform for AI development" },
        { name: "Azure OpenAI Service", status: "Active", description: "Access to GPT-4 and OpenAI models" },
        { name: "Azure Machine Learning", status: "Active", description: "Build and deploy ML models" },
        { name: "Computer Vision", status: "Active", description: "Image analysis and OCR" },
        { name: "Language Understanding", status: "Active", description: "NLP and language AI" },
        { name: "Document Intelligence", status: "Active", description: "Extract information from documents" },
      ],
    },
    gcp: {
      name: "Google Cloud Platform",
      services: [
        { name: "Vertex AI", status: "Active", description: "End-to-end ML platform with generative AI" },
        { name: "Gemini API", status: "Active", description: "Access to Google's Gemini models" },
        { name: "Vision AI", status: "Active", description: "Image analysis and recognition" },
        { name: "Natural Language AI", status: "Active", description: "Text analysis and NLP" },
        { name: "AutoML", status: "Active", description: "Custom ML models without code" },
      ],
    },
  };

  const data = provider && providerData[provider] ? providerData[provider] : providerData.aws;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">{data.name}</h2>
          <p className="text-muted-foreground">Manage AI services and configurations</p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Configure
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.services.map((service: any) => (
          <Card key={service.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{service.name}</CardTitle>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  {service.status}
                </Badge>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Metrics
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Configuration</CardTitle>
          <CardDescription>Manage API keys and authentication settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <div className="font-medium text-sm text-foreground">API Endpoint</div>
              <div className="text-xs text-muted-foreground mt-1">
                {provider === "aws" && "https://api.aws.amazon.com/v1"}
                {provider === "azure" && "https://api.azure.microsoft.com/v1"}
                {provider === "gcp" && "https://api.cloud.google.com/v1"}
              </div>
            </div>
            <Button variant="outline" size="sm">Copy</Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
            <div>
              <div className="font-medium text-sm text-foreground">API Key</div>
              <div className="text-xs text-muted-foreground mt-1">••••••••••••••••</div>
            </div>
            <Button variant="outline" size="sm">Regenerate</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CloudProvider;
