import { DashboardLayout } from "@/components/DashboardLayout";
import { demoBookings } from "@/data/demo-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BookingsPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-4 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Bookings</h1>
      <p className="text-sm text-muted-foreground">Confirmed PG reservations</p>

      <Card className="border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lead</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Move-in</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Assigned</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoBookings.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-medium">{b.leadName}</TableCell>
                <TableCell>{b.property}</TableCell>
                <TableCell>{b.moveInDate}</TableCell>
                <TableCell>{b.roomType}</TableCell>
                <TableCell>{b.monthlyRent}</TableCell>
                <TableCell className="text-xs">{b.assignedTo}</TableCell>
                <TableCell>
                  <Badge variant={b.status === "Confirmed" ? "default" : "outline"} className="text-xs">
                    {b.status}
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

export default BookingsPage;
