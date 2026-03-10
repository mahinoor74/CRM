import { DashboardLayout } from "@/components/DashboardLayout";
import { demoOwners } from "@/data/demo-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OwnersPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-4 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Owners</h1>
      <p className="text-sm text-muted-foreground">Manage PG property owners</p>

      <Card className="border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Owner</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Total Rooms</TableHead>
              <TableHead>Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoOwners.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.name}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{o.phone}</TableCell>
                <TableCell>{o.propertyName}</TableCell>
                <TableCell>{o.location}</TableCell>
                <TableCell>{o.totalRooms}</TableCell>
                <TableCell>
                  <Badge variant={o.availableRooms > 5 ? "default" : "outline"} className="text-xs">
                    {o.availableRooms}
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

export default OwnersPage;
