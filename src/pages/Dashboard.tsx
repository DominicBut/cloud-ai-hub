import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Activity, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const providers = [
    {
      id: "aws",
      name: "Amazon Web Services",
      description: "AWS AI/ML services including SageMaker, Rekognition, and Comprehend",
      status: "Connected",
      services: 5,
      color: "bg-orange-500",
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      description: "Azure Cognitive Services and Machine Learning Studio",
      status: "Connected",
      services: 6,
      color: "bg-blue-500",
    },
    {
      id: "gcp",
      name: "Google Cloud Platform",
      description: "Google Cloud AI Platform and Vision API",
      status: "Connected",
      services: 5,
      color: "bg-green-500",
    },
  ];

  const totalServices = providers.reduce((sum, p) => sum + p.services, 0);

  const metricsData = [
    { time: "00:00", aws: 145, azure: 120, gcp: 135 },
    { time: "04:00", aws: 165, azure: 140, gcp: 150 },
    { time: "08:00", aws: 220, azure: 195, gcp: 210 },
    { time: "12:00", aws: 280, azure: 245, gcp: 265 },
    { time: "16:00", aws: 310, azure: 275, gcp: 290 },
    { time: "20:00", aws: 265, azure: 230, gcp: 250 },
    { time: "23:59", aws: 240, azure: 210, gcp: 225 },
  ];

  const chartConfig = {
    aws: {
      label: "AWS",
      color: "hsl(var(--chart-1))",
    },
    azure: {
      label: "Azure",
      color: "hsl(var(--chart-2))",
    },
    gcp: {
      label: "GCP",
      color: "hsl(var(--chart-3))",
    },
  };

  const stats = [
    { label: "Total API Calls", value: "2.4M", icon: Activity, trend: "+12%" },
    { label: "Active Services", value: totalServices.toString(), icon: Cloud, trend: "+3" },
    { label: "Response Time", value: "45ms", icon: Zap, trend: "-5ms" },
    { label: "Cost Savings", value: "$12.5K", icon: TrendingUp, trend: "+8%" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-primary font-medium">{stat.trend}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Providers Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Cloud Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`h-10 w-10 rounded-lg ${provider.color} flex items-center justify-center`}>
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {provider.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{provider.name}</CardTitle>
                <CardDescription>{provider.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {provider.services} services active
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/${provider.id}`}>Manage</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Live Metrics Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Live API Usage Metrics</CardTitle>
          <CardDescription>Real-time API calls per hour across cloud providers</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metricsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="time" 
                  className="text-xs"
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis 
                  className="text-xs"
                  stroke="hsl(var(--muted-foreground))"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="aws" 
                  stroke="var(--color-aws)" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="azure" 
                  stroke="var(--color-azure)" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="gcp" 
                  stroke="var(--color-gcp)" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your cloud AI services</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button asChild>
            <Link to="/login">Configure Authentication</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/settings">Platform Settings</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
