import { DashboardLayout } from "@/components/DashboardLayout";
import { demoMessages } from "@/data/demo-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Globe } from "lucide-react";

const channelIcon = (ch: string) => {
  if (ch === "WhatsApp") return <MessageSquare className="w-4 h-4 text-success" />;
  if (ch === "Phone") return <Phone className="w-4 h-4 text-info" />;
  return <Globe className="w-4 h-4 text-primary" />;
};

const MessagesPage = () => (
  <DashboardLayout>
    <div className="p-6 space-y-4 max-w-[900px] mx-auto">
      <h1 className="text-2xl font-bold text-foreground">Messages</h1>
      <p className="text-sm text-muted-foreground">Recent lead communications</p>

      <div className="space-y-2">
        {demoMessages.map((m) => (
          <Card key={m.id} className={`border-border transition-colors ${m.unread ? "border-l-4 border-l-primary" : ""}`}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                {channelIcon(m.channel)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">{m.leadName}</p>
                  {m.unread && <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>
                <p className="text-sm text-muted-foreground truncate">{m.preview}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <Badge variant="secondary" className="text-xs">{m.channel}</Badge>
                <p className="text-[10px] text-muted-foreground mt-1">{m.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default MessagesPage;
