import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from "recharts";
import { demoLeads, SALESPERSONS } from "@/data/demo-data";

const monthlyData = [
  { month: "Oct", leads: 28 }, { month: "Nov", leads: 35 }, { month: "Dec", leads: 42 },
  { month: "Jan", leads: 38 }, { month: "Feb", leads: 51 }, { month: "Mar", leads: 47 },
];

const conversionData = [
  { month: "Oct", rate: 18 }, { month: "Nov", rate: 22 }, { month: "Dec", rate: 25 },
  { month: "Jan", rate: 20 }, { month: "Feb", rate: 28 }, { month: "Mar", rate: 32 },
];

const salespersonData = SALESPERSONS.map((name) => ({
  name: name.split(" ")[0],
  leads: demoLeads.filter((l) => l.assignedTo === name).length,
  booked: demoLeads.filter((l) => l.assignedTo === name && l.stage === "Booked").length,
}));

const locationData = [
  { name: "Koramangala", value: 3, color: "hsl(24, 95%, 53%)" },
  { name: "HSR Layout", value: 2, color: "hsl(217, 91%, 60%)" },
  { name: "Indiranagar", value: 1, color: "hsl(142, 71%, 45%)" },
  { name: "Electronic City", value: 1, color: "hsl(38, 92%, 50%)" },
  { name: "Whitefield", value: 1, color: "hsl(340, 75%, 55%)" },
  { name: "Others", value: 4, color: "hsl(220, 14%, 70%)" },
];

const tooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  color: "hsl(var(--foreground))",
};

const AnalyticsPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
      <p className="text-sm text-muted-foreground">Performance insights & trends</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Monthly Lead Generation</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="leads" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Conversion Rate (%)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="rate" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Top Salespersons</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={salespersonData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} width={60} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="leads" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} name="Leads" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2"><CardTitle className="text-base">Popular Locations</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={locationData} cx="50%" cy="50%" outerRadius={95} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {locationData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  </DashboardLayout>
);

export default AnalyticsPage;
