import { DashboardLayout } from "@/components/DashboardLayout";
import { demoLeads } from "@/data/demo-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const HistoricalPage = () => {
  const closedLeads = demoLeads.filter((l) => l.stage === "Booked" || l.stage === "Lost");

  return (
    <DashboardLayout>
      <div className="p-6 space-y-4 max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold text-foreground">Historical</h1>
        <p className="text-sm text-muted-foreground">Archive of closed and inactive leads</p>

        <Card className="border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead>Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {closedLeads.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.name}</TableCell>
                  <TableCell>{l.location}</TableCell>
                  <TableCell>{l.budget}</TableCell>
                  <TableCell className="text-xs">{l.source}</TableCell>
                  <TableCell className="text-xs">{l.assignedTo}</TableCell>
                  <TableCell>
                    <Badge variant={l.stage === "Booked" ? "default" : "destructive"} className="text-xs">
                      {l.stage}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HistoricalPage;
