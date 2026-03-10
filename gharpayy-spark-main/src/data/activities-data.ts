export type ActivityType =
  | "lead_created"
  | "lead_assigned"
  | "call_made"
  | "whatsapp_sent"
  | "visit_scheduled"
  | "visit_completed"
  | "stage_changed"
  | "booking_confirmed"
  | "followup_completed"
  | "note_added";

export interface Activity {
  id: string;
  leadId: string;
  type: ActivityType;
  date: string;
  time: string;
  salesperson: string;
  notes?: string;
  meta?: Record<string, string>;
}

export const ACTIVITY_FILTERS = [
  { value: "all", label: "All" },
  { value: "calls", label: "Calls", types: ["call_made"] as ActivityType[] },
  { value: "messages", label: "Messages", types: ["whatsapp_sent"] as ActivityType[] },
  { value: "visits", label: "Visits", types: ["visit_scheduled", "visit_completed"] as ActivityType[] },
  { value: "followups", label: "Follow-Ups", types: ["followup_completed"] as ActivityType[] },
  { value: "bookings", label: "Bookings", types: ["booking_confirmed"] as ActivityType[] },
] as const;

export const ACTIVITY_CONFIG: Record<ActivityType, { label: string; iconName: string; colorClass: string }> = {
  lead_created: { label: "Lead Created", iconName: "UserPlus", colorClass: "bg-info text-info-foreground" },
  lead_assigned: { label: "Lead Assigned", iconName: "UserCheck", colorClass: "bg-primary text-primary-foreground" },
  call_made: { label: "Call Made", iconName: "Phone", colorClass: "bg-success text-success-foreground" },
  whatsapp_sent: { label: "WhatsApp Message Sent", iconName: "MessageSquare", colorClass: "bg-success text-success-foreground" },
  visit_scheduled: { label: "Visit Scheduled", iconName: "CalendarCheck", colorClass: "bg-warning text-warning-foreground" },
  visit_completed: { label: "Visit Completed", iconName: "CheckCircle", colorClass: "bg-success text-success-foreground" },
  stage_changed: { label: "Lead Stage Changed", iconName: "ArrowRight", colorClass: "bg-primary text-primary-foreground" },
  booking_confirmed: { label: "Booking Confirmed", iconName: "Star", colorClass: "bg-primary text-primary-foreground" },
  followup_completed: { label: "Follow-Up Completed", iconName: "CheckCircle", colorClass: "bg-chart-7 text-primary-foreground" },
  note_added: { label: "Note Added", iconName: "StickyNote", colorClass: "bg-muted text-muted-foreground" },
};

// Demo activities for each lead
export const demoActivities: Activity[] = [
  // L001 - Arjun Mehta
  { id: "A001", leadId: "L001", type: "lead_created", date: "2026-03-01", time: "09:00 AM", salesperson: "System", notes: "Lead captured from WhatsApp inquiry" },
  { id: "A002", leadId: "L001", type: "lead_assigned", date: "2026-03-01", time: "09:15 AM", salesperson: "System", notes: "Assigned to Rahul Sharma" },
  { id: "A003", leadId: "L001", type: "call_made", date: "2026-03-02", time: "10:30 AM", salesperson: "Rahul Sharma", notes: "Interested in single sharing PG near Koramangala. Budget ₹12,000" },
  { id: "A004", leadId: "L001", type: "whatsapp_sent", date: "2026-03-03", time: "11:00 AM", salesperson: "Rahul Sharma", notes: "Shared 3 property options with photos and pricing" },
  { id: "A005", leadId: "L001", type: "visit_scheduled", date: "2026-03-05", time: "02:00 PM", salesperson: "Rahul Sharma", notes: "Visit at Stanza Living Koramangala", meta: { property: "Stanza Living Koramangala", visitDate: "2026-03-12" } },
  { id: "A006", leadId: "L001", type: "note_added", date: "2026-03-09", time: "04:30 PM", salesperson: "Rahul Sharma", notes: "Lead prefers ground floor room. Vegetarian food required." },

  // L002 - Neha Gupta
  { id: "A007", leadId: "L002", type: "lead_created", date: "2026-03-02", time: "10:15 AM", salesperson: "System", notes: "Lead from website contact form" },
  { id: "A008", leadId: "L002", type: "lead_assigned", date: "2026-03-02", time: "10:20 AM", salesperson: "System", notes: "Assigned to Priya Patel" },
  { id: "A009", leadId: "L002", type: "call_made", date: "2026-03-03", time: "11:30 AM", salesperson: "Priya Patel", notes: "Looking for AC room in HSR Layout. Budget flexible up to ₹10K" },
  { id: "A010", leadId: "L002", type: "stage_changed", date: "2026-03-03", time: "11:45 AM", salesperson: "Priya Patel", notes: "Stage: New → Contacted", meta: { from: "New", to: "Contacted" } },
  { id: "A011", leadId: "L002", type: "whatsapp_sent", date: "2026-03-05", time: "09:00 AM", salesperson: "Priya Patel", notes: "Sent AC room availability at Zolo Hub HSR" },

  // L003 - Rohan Das
  { id: "A012", leadId: "L003", type: "lead_created", date: "2026-02-28", time: "02:00 PM", salesperson: "System", notes: "Lead from Instagram ad campaign" },
  { id: "A013", leadId: "L003", type: "lead_assigned", date: "2026-02-28", time: "02:10 PM", salesperson: "System", notes: "Assigned to Amit Kumar" },
  { id: "A014", leadId: "L003", type: "call_made", date: "2026-03-01", time: "10:00 AM", salesperson: "Amit Kumar", notes: "High-budget lead. Moving next month to Indiranagar. Wants premium PG." },
  { id: "A015", leadId: "L003", type: "stage_changed", date: "2026-03-01", time: "10:15 AM", salesperson: "Amit Kumar", notes: "Stage: New → Contacted", meta: { from: "New", to: "Contacted" } },
  { id: "A016", leadId: "L003", type: "stage_changed", date: "2026-03-05", time: "03:00 PM", salesperson: "Amit Kumar", notes: "Stage: Contacted → Requirement", meta: { from: "Contacted", to: "Requirement" } },
  { id: "A017", leadId: "L003", type: "visit_scheduled", date: "2026-03-08", time: "11:00 AM", salesperson: "Amit Kumar", notes: "Visit at OYO Life Indiranagar", meta: { property: "OYO Life Indiranagar", visitDate: "2026-03-14" } },
  { id: "A018", leadId: "L003", type: "followup_completed", date: "2026-03-10", time: "09:30 AM", salesperson: "Amit Kumar", notes: "Confirmed visit date. Lead is very interested." },

  // L004 - Kavya Nair
  { id: "A019", leadId: "L004", type: "lead_created", date: "2026-03-03", time: "08:30 AM", salesperson: "System" },
  { id: "A020", leadId: "L004", type: "lead_assigned", date: "2026-03-03", time: "08:35 AM", salesperson: "System", notes: "Assigned to Sneha Reddy" },
  { id: "A021", leadId: "L004", type: "call_made", date: "2026-03-04", time: "10:00 AM", salesperson: "Sneha Reddy", notes: "Wants PG with food in Whitefield. Budget ₹10K." },
  { id: "A022", leadId: "L004", type: "stage_changed", date: "2026-03-05", time: "02:00 PM", salesperson: "Sneha Reddy", notes: "Stage: Contacted → Property", meta: { from: "Contacted", to: "Property" } },

  // L005 - Siddharth Joshi
  { id: "A023", leadId: "L005", type: "lead_created", date: "2026-03-04", time: "01:00 PM", salesperson: "System" },
  { id: "A024", leadId: "L005", type: "lead_assigned", date: "2026-03-04", time: "01:05 PM", salesperson: "System", notes: "Assigned to Vikram Singh" },
  { id: "A025", leadId: "L005", type: "call_made", date: "2026-03-05", time: "09:30 AM", salesperson: "Vikram Singh", notes: "Budget-conscious lead. Prefers Electronic City." },
  { id: "A026", leadId: "L005", type: "visit_scheduled", date: "2026-03-06", time: "11:00 AM", salesperson: "Vikram Singh", meta: { property: "CoHo EC Phase 1", visitDate: "2026-03-10" } },
  { id: "A027", leadId: "L005", type: "visit_completed", date: "2026-03-10", time: "12:30 PM", salesperson: "Vikram Singh", notes: "Liked the double non-AC room. Comparing with another option." },
  { id: "A028", leadId: "L005", type: "stage_changed", date: "2026-03-10", time: "12:45 PM", salesperson: "Vikram Singh", notes: "Stage: Property → Visit", meta: { from: "Property", to: "Visit" } },

  // L006 - Ananya Iyer (Booked)
  { id: "A029", leadId: "L006", type: "lead_created", date: "2026-02-25", time: "10:00 AM", salesperson: "System" },
  { id: "A030", leadId: "L006", type: "lead_assigned", date: "2026-02-25", time: "10:05 AM", salesperson: "System", notes: "Assigned to Rahul Sharma" },
  { id: "A031", leadId: "L006", type: "call_made", date: "2026-02-26", time: "11:00 AM", salesperson: "Rahul Sharma", notes: "Very interested. Near metro in BTM required." },
  { id: "A032", leadId: "L006", type: "visit_scheduled", date: "2026-02-28", time: "10:00 AM", salesperson: "Rahul Sharma", meta: { property: "Stanza Living BTM", visitDate: "2026-03-02" } },
  { id: "A033", leadId: "L006", type: "visit_completed", date: "2026-03-02", time: "11:30 AM", salesperson: "Rahul Sharma", notes: "Loved the single AC room. Ready to book." },
  { id: "A034", leadId: "L006", type: "stage_changed", date: "2026-03-02", time: "12:00 PM", salesperson: "Rahul Sharma", notes: "Stage: Visit → Booked", meta: { from: "Visit", to: "Booked" } },
  { id: "A035", leadId: "L006", type: "booking_confirmed", date: "2026-03-03", time: "10:00 AM", salesperson: "Rahul Sharma", notes: "Booking confirmed. Move-in: 15 March. Single AC @ ₹12,000/month" },
];
