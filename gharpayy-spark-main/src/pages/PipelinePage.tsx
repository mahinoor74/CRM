import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { demoLeads, PIPELINE_STAGES, type Lead } from "@/data/demo-data";
import { Badge } from "@/components/ui/badge";
import { MapPin, IndianRupee, User } from "lucide-react";

const stageColors: Record<string, string> = {
  New: "bg-info",
  Contacted: "bg-primary",
  Requirement: "bg-warning",
  Property: "bg-chart-6",
  Visit: "bg-chart-7",
  Booked: "bg-success",
  Lost: "bg-destructive",
};

const PipelinePage = () => {
  const [leads, setLeads] = useState<Lead[]>(demoLeads);
  const [dragging, setDragging] = useState<string | null>(null);

  const handleDragStart = (id: string) => setDragging(id);

  const handleDrop = (stage: string) => {
    if (!dragging) return;
    setLeads(leads.map((l) => l.id === dragging ? { ...l, stage } : l));
    setDragging(null);
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-full">
        <h1 className="text-2xl font-bold text-foreground mb-1">Pipeline</h1>
        <p className="text-sm text-muted-foreground mb-6">Drag leads between stages</p>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
          {PIPELINE_STAGES.map((stage) => {
            const stageLeads = leads.filter((l) => l.stage === stage);
            return (
              <div
                key={stage}
                className="min-w-[260px] w-[260px] flex-shrink-0"
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(stage)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${stageColors[stage]}`} />
                  <h3 className="text-sm font-semibold text-foreground">{stage}</h3>
                  <Badge variant="secondary" className="ml-auto text-xs">{stageLeads.length}</Badge>
                </div>
                <div className="space-y-2 min-h-[200px] bg-secondary/50 rounded-xl p-2">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      draggable
                      onDragStart={() => handleDragStart(lead.id)}
                      className="bg-card rounded-lg p-3 border border-border cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                    >
                      <p className="text-sm font-semibold text-foreground mb-2">{lead.name}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {lead.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <IndianRupee className="w-3 h-3" /> {lead.budget}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <User className="w-3 h-3" /> {lead.assignedTo}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PipelinePage;
