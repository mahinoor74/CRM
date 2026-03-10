import { DashboardLayout } from "@/components/DashboardLayout";
import { demoProperties } from "@/data/demo-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InventoryPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-4 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Inventory</h1>
      <p className="text-sm text-muted-foreground">PG properties and room availability</p>

      <Card className="border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PG Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Available Beds</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoProperties.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.pgName}</TableCell>
                <TableCell>{p.location}</TableCell>
                <TableCell>{p.roomType}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>
                  <Badge variant={p.availableBeds > 3 ? "default" : "outline"} className="text-xs">
                    {p.availableBeds}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs">{p.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  </DashboardLayout>
);

export default InventoryPage;
