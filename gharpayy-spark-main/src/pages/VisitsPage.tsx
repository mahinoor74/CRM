import { DashboardLayout } from "@/components/DashboardLayout";
import { demoVisits } from "@/data/demo-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarCheck, List } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VisitsPage = () => {
  // Group visits by date for calendar-like view
  const grouped = demoVisits.reduce<Record<string, typeof demoVisits>>((acc, v) => {
    if (!acc[v.date]) acc[v.date] = [];
    acc[v.date].push(v);
    return acc;
  }, {});

  return (
    <DashboardLayout>
      <div className="p-6 space-y-4 max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold text-foreground">Visits</h1>
        <p className="text-sm text-muted-foreground">Schedule and manage property visits</p>

        <Tabs defaultValue="calendar">
          <TabsList>
            <TabsTrigger value="calendar" className="gap-1.5"><CalendarCheck className="w-3.5 h-3.5" /> Calendar</TabsTrigger>
            <TabsTrigger value="list" className="gap-1.5"><List className="w-3.5 h-3.5" /> List</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-4 mt-4">
            {Object.entries(grouped).sort().map(([date, visits]) => (
              <Card key={date} className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">{new Date(date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {visits.map((v) => (
                    <div key={v.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                      <div>
                        <p className="text-sm font-medium text-foreground">{v.leadName}</p>
                        <p className="text-xs text-muted-foreground">{v.propertyName} · {v.time}</p>
                        <p className="text-xs text-muted-foreground">{v.assignedTo}</p>
                      </div>
                      <Badge variant={v.status === "Completed" ? "default" : "outline"} className="text-xs">
                        {v.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="list" className="mt-4">
            <Card className="border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Assigned</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoVisits.map((v) => (
                    <TableRow key={v.id}>
                      <TableCell className="font-medium">{v.leadName}</TableCell>
                      <TableCell>{v.propertyName}</TableCell>
                      <TableCell>{v.date}</TableCell>
                      <TableCell>{v.time}</TableCell>
                      <TableCell className="text-xs">{v.assignedTo}</TableCell>
                      <TableCell>
                        <Badge variant={v.status === "Completed" ? "default" : "outline"} className="text-xs">
                          {v.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default VisitsPage;
