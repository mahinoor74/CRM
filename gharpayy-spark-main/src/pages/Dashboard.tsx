import { DashboardLayout } from "@/components/DashboardLayout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { demoLeads, followUps, PIPELINE_STAGES } from "@/data/demo-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, AlertCircle, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";

const pipelineData = PIPELINE_STAGES.map((stage) => ({
  name: stage,
  count: demoLeads.filter((l) => l.stage === stage).length,
}));

const sourceData = [
  { name: "Phone Call", value: demoLeads.filter((l) => l.source === "Phone Call").length, color: "hsl(24, 95%, 53%)" },
  { name: "WhatsApp", value: demoLeads.filter((l) => l.source === "WhatsApp").length, color: "hsl(142, 71%, 45%)" },
  { name: "Website", value: demoLeads.filter((l) => l.source === "Website").length, color: "hsl(217, 91%, 60%)" },
  { name: "Instagram", value: demoLeads.filter((l) => l.source === "Instagram").length, color: "hsl(340, 75%, 55%)" },
  { name: "Landing Page", value: demoLeads.filter((l) => l.source === "Landing Page").length, color: "hsl(38, 92%, 50%)" },
  { name: "Facebook", value: demoLeads.filter((l) => l.source === "Facebook").length, color: "hsl(217, 91%, 45%)" },
];

const stats = [
  { label: "Total Leads", value: demoLeads.length, icon: Users, change: "+12%" },
  { label: "Active", value: demoLeads.filter((l) => l.status === "Active").length, icon: TrendingUp, change: "+8%" },
  { label: "Booked", value: demoLeads.filter((l) => l.stage === "Booked").length, icon: CheckCircle, change: "+2" },
  { label: "Follow-ups", value: followUps.length, icon: Clock, change: "3 today" },
];

const Dashboard = () => {
  const hotLeads = demoLeads.filter((l) => l.score >= 80).sort((a, b) => b.score - a.score);
  const needsAttention = demoLeads.filter((l) => l.status === "Awaiting");

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Sales Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Overview of your PG reservation pipeline</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
                <Badge variant="secondary" className="ml-auto text-xs">
                  {s.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Pipeline Bar Chart */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold">Sales Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={pipelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Lead Source Donut */}
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold">Lead Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Legend
                    iconSize={8}
                    wrapperStyle={{ fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Needs Attention */}
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-warning" />
                Needs Attention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {needsAttention.length === 0 ? (
                <p className="text-sm text-muted-foreground">All caught up! 🎉</p>
              ) : (
                needsAttention.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                    <div>
                      <p className="text-sm font-medium text-foreground">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.location} · {lead.budget}</p>
                      <p className="text-xs text-muted-foreground">{lead.assignedTo}</p>
                    </div>
                    <Badge variant="outline" className="text-warning border-warning text-xs">
                      Awaiting
                    </Badge>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Hot Leads */}
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Flame className="w-4 h-4 text-destructive" />
                Hot Leads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {hotLeads.slice(0, 4).map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div>
                    <p className="text-sm font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{lead.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Follow-ups */}
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-info" />
                Follow-ups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {followUps.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div>
                    <p className="text-sm font-medium text-foreground">{f.leadName}</p>
                    <p className="text-xs text-muted-foreground">{f.task}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={f.priority === "High" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {f.priority}
                    </Badge>
                    <p className="text-[10px] text-muted-foreground mt-1">{f.due}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
