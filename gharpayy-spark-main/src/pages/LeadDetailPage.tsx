import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { demoLeads } from "@/data/demo-data";
import { demoActivities, ACTIVITY_CONFIG, ACTIVITY_FILTERS, type ActivityType } from "@/data/activities-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Phone, MessageSquare, CalendarCheck, CheckCircle, Star,
  UserPlus, UserCheck, ArrowRight, StickyNote, ArrowLeft,
  MapPin, IndianRupee, User, Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Phone, MessageSquare, CalendarCheck, CheckCircle, Star,
  UserPlus, UserCheck, ArrowRight, StickyNote,
};

const LeadDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const lead = demoLeads.find((l) => l.id === id);
  if (!lead) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <p className="text-muted-foreground">Lead not found.</p>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/leads")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Leads
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const allActivities = demoActivities
    .filter((a) => a.leadId === id)
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB.getTime() - dateA.getTime();
    });

  const filterDef = ACTIVITY_FILTERS.find((f) => f.value === activeFilter);
  const activities = activeFilter === "all"
    ? allActivities
    : allActivities.filter((a) => (filterDef as any)?.types?.includes(a.type));

  // Group by date
  const grouped = activities.reduce<Record<string, typeof activities>>((acc, a) => {
    if (!acc[a.date]) acc[a.date] = [];
    acc[a.date].push(a);
    return acc;
  }, {});

  const stageBadgeClass: Record<string, string> = {
    New: "bg-info/15 text-info",
    Contacted: "bg-primary/15 text-primary",
    Requirement: "bg-warning/15 text-warning",
    Property: "bg-chart-6/15 text-chart-6",
    Visit: "bg-chart-7/15 text-chart-7",
    Booked: "bg-success/15 text-success",
    Lost: "bg-destructive/15 text-destructive",
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="flex items-start gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/leads")} className="mt-1">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-foreground">{lead.name}</h1>
              <Badge className={cn("text-xs", stageBadgeClass[lead.stage])}>
                {lead.stage}
              </Badge>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{lead.score}</span>
                </div>
                <span className="text-xs text-muted-foreground">Score</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Lead ID: {lead.id} · Created {lead.createdAt}</p>
          </div>
        </div>

        {/* Lead Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card className="border-border">
            <CardContent className="p-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-[11px] text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">{lead.phone}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-[11px] text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">{lead.location}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-[11px] text-muted-foreground">Budget</p>
                <p className="text-sm font-medium text-foreground">{lead.budget}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-[11px] text-muted-foreground">Assigned</p>
                <p className="text-sm font-medium text-foreground">{lead.assignedTo}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Timeline */}
        <Card className="border-border">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Activity Timeline
              </CardTitle>
              <div className="flex flex-wrap gap-1.5">
                {ACTIVITY_FILTERS.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium transition-colors",
                      activeFilter === f.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {activities.length === 0 ? (
              <p className="text-sm text-muted-foreground py-8 text-center">No activities match this filter.</p>
            ) : (
              <div className="space-y-6">
                {Object.entries(grouped)
                  .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
                  .map(([date, items]) => (
                    <div key={date}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        {new Date(date).toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <div className="relative ml-4 border-l-2 border-border pl-6 space-y-4">
                        {items
                          .sort((a, b) => {
                            const tA = new Date(`${a.date} ${a.time}`).getTime();
                            const tB = new Date(`${b.date} ${b.time}`).getTime();
                            return tB - tA;
                          })
                          .map((activity) => {
                            const config = ACTIVITY_CONFIG[activity.type];
                            const IconComp = iconMap[config.iconName] || CheckCircle;
                            return (
                              <div key={activity.id} className="relative">
                                {/* Timeline dot */}
                                <div
                                  className={cn(
                                    "absolute -left-[33px] w-6 h-6 rounded-full flex items-center justify-center",
                                    config.colorClass
                                  )}
                                >
                                  <IconComp className="w-3 h-3" />
                                </div>
                                {/* Content */}
                                <div className="bg-secondary rounded-lg p-3">
                                  <div className="flex items-start justify-between gap-2">
                                    <div>
                                      <p className="text-sm font-medium text-foreground">{config.label}</p>
                                      <p className="text-xs text-muted-foreground">{activity.salesperson}</p>
                                    </div>
                                    <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                                      {activity.time}
                                    </span>
                                  </div>
                                  {activity.notes && (
                                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                      {activity.notes}
                                    </p>
                                  )}
                                  {activity.meta?.property && (
                                    <div className="mt-2 flex items-center gap-3">
                                      <Badge variant="outline" className="text-[10px]">
                                        🏠 {activity.meta.property}
                                      </Badge>
                                      {activity.meta.visitDate && (
                                        <Badge variant="outline" className="text-[10px]">
                                          📅 {activity.meta.visitDate}
                                        </Badge>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LeadDetailPage;
