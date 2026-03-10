import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const SettingsPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-4 max-w-[800px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="text-sm text-muted-foreground">Manage your CRM preferences</p>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <SettingsIcon className="w-4 h-4 text-primary" /> General Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Settings page coming soon. Configure team members, notifications, integrations, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  </DashboardLayout>
);

export default SettingsPage;
