export interface Lead {
  id: string;
  name: string;
  phone: string;
  location: string;
  budget: string;
  source: string;
  assignedTo: string;
  notes: string;
  status: string;
  stage: string;
  score: number;
  createdAt: string;
  lastContact: string;
}

export interface Visit {
  id: string;
  leadName: string;
  propertyName: string;
  date: string;
  time: string;
  assignedTo: string;
  notes: string;
  status: string;
}

export interface Message {
  id: string;
  leadName: string;
  preview: string;
  channel: "WhatsApp" | "Phone" | "Website";
  time: string;
  unread: boolean;
}

export interface Booking {
  id: string;
  leadName: string;
  property: string;
  moveInDate: string;
  roomType: string;
  monthlyRent: string;
  assignedTo: string;
  status: string;
}

export interface Owner {
  id: string;
  name: string;
  phone: string;
  propertyName: string;
  location: string;
  totalRooms: number;
  availableRooms: number;
}

export interface Property {
  id: string;
  pgName: string;
  location: string;
  roomType: string;
  price: string;
  availableBeds: number;
  owner: string;
}

export const PIPELINE_STAGES = ["New", "Contacted", "Requirement", "Property", "Visit", "Booked", "Lost"] as const;

export const LEAD_SOURCES = ["Phone Call", "WhatsApp", "Website", "Instagram", "Landing Page", "Facebook"] as const;

export const SALESPERSONS = ["Rahul Sharma", "Priya Patel", "Amit Kumar", "Sneha Reddy", "Vikram Singh"] as const;

export const demoLeads: Lead[] = [
  { id: "L001", name: "Arjun Mehta", phone: "+91 98765 43210", location: "Koramangala", budget: "₹12,000", source: "WhatsApp", assignedTo: "Rahul Sharma", notes: "Looking for single sharing", status: "Active", stage: "New", score: 85, createdAt: "2026-03-01", lastContact: "2026-03-09" },
  { id: "L002", name: "Neha Gupta", phone: "+91 87654 32109", location: "HSR Layout", budget: "₹8,000", source: "Website", assignedTo: "Priya Patel", notes: "Prefers AC room", status: "Active", stage: "Contacted", score: 72, createdAt: "2026-03-02", lastContact: "2026-03-08" },
  { id: "L003", name: "Rohan Das", phone: "+91 76543 21098", location: "Indiranagar", budget: "₹15,000", source: "Instagram", assignedTo: "Amit Kumar", notes: "Moving next month", status: "Active", stage: "Requirement", score: 90, createdAt: "2026-02-28", lastContact: "2026-03-10" },
  { id: "L004", name: "Kavya Nair", phone: "+91 65432 10987", location: "Whitefield", budget: "₹10,000", source: "Phone Call", assignedTo: "Sneha Reddy", notes: "Wants food included", status: "Active", stage: "Property", score: 68, createdAt: "2026-03-03", lastContact: "2026-03-07" },
  { id: "L005", name: "Siddharth Joshi", phone: "+91 54321 09876", location: "Electronic City", budget: "₹7,500", source: "Landing Page", assignedTo: "Vikram Singh", notes: "Budget conscious", status: "Active", stage: "Visit", score: 78, createdAt: "2026-03-04", lastContact: "2026-03-09" },
  { id: "L006", name: "Ananya Iyer", phone: "+91 43210 98765", location: "BTM Layout", budget: "₹9,000", source: "Facebook", assignedTo: "Rahul Sharma", notes: "Near metro preferred", status: "Active", stage: "Booked", score: 95, createdAt: "2026-02-25", lastContact: "2026-03-10" },
  { id: "L007", name: "Karthik Rao", phone: "+91 32109 87654", location: "Marathahalli", budget: "₹11,000", source: "WhatsApp", assignedTo: "Priya Patel", notes: "Couple room needed", status: "Active", stage: "New", score: 60, createdAt: "2026-03-05", lastContact: "2026-03-08" },
  { id: "L008", name: "Deepika Sinha", phone: "+91 21098 76543", location: "JP Nagar", budget: "₹13,000", source: "Website", assignedTo: "Amit Kumar", notes: "Female only PG", status: "Awaiting", stage: "Contacted", score: 82, createdAt: "2026-03-06", lastContact: "2026-03-07" },
  { id: "L009", name: "Manish Tiwari", phone: "+91 10987 65432", location: "Koramangala", budget: "₹14,000", source: "Phone Call", assignedTo: "Sneha Reddy", notes: "Working professional", status: "Active", stage: "Lost", score: 45, createdAt: "2026-02-20", lastContact: "2026-03-01" },
  { id: "L010", name: "Riya Chopra", phone: "+91 09876 54321", location: "HSR Layout", budget: "₹10,500", source: "Instagram", assignedTo: "Vikram Singh", notes: "Wants gym access", status: "Active", stage: "Requirement", score: 77, createdAt: "2026-03-07", lastContact: "2026-03-09" },
  { id: "L011", name: "Varun Malhotra", phone: "+91 98761 11111", location: "Bellandur", budget: "₹9,500", source: "Landing Page", assignedTo: "Rahul Sharma", notes: "Triple sharing ok", status: "Awaiting", stage: "New", score: 55, createdAt: "2026-03-08", lastContact: "2026-03-08" },
  { id: "L012", name: "Pooja Agarwal", phone: "+91 98762 22222", location: "Sarjapur", budget: "₹16,000", source: "WhatsApp", assignedTo: "Priya Patel", notes: "Premium room needed", status: "Active", stage: "Property", score: 88, createdAt: "2026-03-01", lastContact: "2026-03-10" },
];

export const demoVisits: Visit[] = [
  { id: "V001", leadName: "Arjun Mehta", propertyName: "Stanza Living Koramangala", date: "2026-03-12", time: "10:00 AM", assignedTo: "Rahul Sharma", notes: "Show single rooms", status: "Scheduled" },
  { id: "V002", leadName: "Neha Gupta", propertyName: "Zolo Hub HSR", date: "2026-03-11", time: "2:00 PM", assignedTo: "Priya Patel", notes: "AC rooms only", status: "Scheduled" },
  { id: "V003", leadName: "Siddharth Joshi", propertyName: "CoHo EC Phase 1", date: "2026-03-10", time: "11:30 AM", assignedTo: "Vikram Singh", notes: "Budget options", status: "Completed" },
  { id: "V004", leadName: "Pooja Agarwal", propertyName: "NestAway Sarjapur", date: "2026-03-13", time: "3:00 PM", assignedTo: "Priya Patel", notes: "Premium suite", status: "Scheduled" },
  { id: "V005", leadName: "Rohan Das", propertyName: "OYO Life Indiranagar", date: "2026-03-14", time: "10:30 AM", assignedTo: "Amit Kumar", notes: "Near metro", status: "Scheduled" },
];

export const demoMessages: Message[] = [
  { id: "M001", leadName: "Arjun Mehta", preview: "Hi, I'm interested in the Koramangala PG. Can you share details?", channel: "WhatsApp", time: "10 min ago", unread: true },
  { id: "M002", leadName: "Neha Gupta", preview: "What's the rent for AC double sharing in HSR?", channel: "Website", time: "25 min ago", unread: true },
  { id: "M003", leadName: "Rohan Das", preview: "Can we reschedule the visit to next week?", channel: "WhatsApp", time: "1 hour ago", unread: false },
  { id: "M004", leadName: "Kavya Nair", preview: "Do you have PGs with food in Whitefield?", channel: "Phone", time: "2 hours ago", unread: false },
  { id: "M005", leadName: "Riya Chopra", preview: "Please share photos of the HSR property", channel: "WhatsApp", time: "3 hours ago", unread: true },
  { id: "M006", leadName: "Pooja Agarwal", preview: "I'd like to book the premium room", channel: "Website", time: "5 hours ago", unread: false },
];

export const demoBookings: Booking[] = [
  { id: "B001", leadName: "Ananya Iyer", property: "Stanza Living BTM", moveInDate: "2026-03-15", roomType: "Single AC", monthlyRent: "₹12,000", assignedTo: "Rahul Sharma", status: "Confirmed" },
  { id: "B002", leadName: "Siddharth Joshi", property: "CoHo EC Phase 1", moveInDate: "2026-03-20", roomType: "Double Non-AC", monthlyRent: "₹7,500", assignedTo: "Vikram Singh", status: "Confirmed" },
  { id: "B003", leadName: "Deepika Sinha", property: "Zolo Hub JP Nagar", moveInDate: "2026-04-01", roomType: "Single AC", monthlyRent: "₹13,000", assignedTo: "Amit Kumar", status: "Pending" },
];

export const demoOwners: Owner[] = [
  { id: "O001", name: "Rajesh Kumar", phone: "+91 99887 76655", propertyName: "Stanza Living Koramangala", location: "Koramangala", totalRooms: 45, availableRooms: 8 },
  { id: "O002", name: "Sunita Sharma", phone: "+91 88776 65544", propertyName: "Zolo Hub HSR", location: "HSR Layout", totalRooms: 60, availableRooms: 12 },
  { id: "O003", name: "Prakash Reddy", phone: "+91 77665 54433", propertyName: "CoHo EC Phase 1", location: "Electronic City", totalRooms: 30, availableRooms: 5 },
  { id: "O004", name: "Meena Iyer", phone: "+91 66554 43322", propertyName: "OYO Life Indiranagar", location: "Indiranagar", totalRooms: 35, availableRooms: 10 },
  { id: "O005", name: "Anil Verma", phone: "+91 55443 32211", propertyName: "NestAway Sarjapur", location: "Sarjapur", totalRooms: 50, availableRooms: 15 },
];

export const demoProperties: Property[] = [
  { id: "P001", pgName: "Stanza Living Koramangala", location: "Koramangala", roomType: "Single AC", price: "₹12,000", availableBeds: 3, owner: "Rajesh Kumar" },
  { id: "P002", pgName: "Stanza Living Koramangala", location: "Koramangala", roomType: "Double Non-AC", price: "₹7,000", availableBeds: 5, owner: "Rajesh Kumar" },
  { id: "P003", pgName: "Zolo Hub HSR", location: "HSR Layout", roomType: "Single AC", price: "₹10,000", availableBeds: 4, owner: "Sunita Sharma" },
  { id: "P004", pgName: "Zolo Hub HSR", location: "HSR Layout", roomType: "Triple Non-AC", price: "₹5,500", availableBeds: 8, owner: "Sunita Sharma" },
  { id: "P005", pgName: "CoHo EC Phase 1", location: "Electronic City", roomType: "Double AC", price: "₹8,500", availableBeds: 5, owner: "Prakash Reddy" },
  { id: "P006", pgName: "OYO Life Indiranagar", location: "Indiranagar", roomType: "Single AC", price: "₹15,000", availableBeds: 3, owner: "Meena Iyer" },
  { id: "P007", pgName: "NestAway Sarjapur", location: "Sarjapur", roomType: "Double AC", price: "₹9,000", availableBeds: 7, owner: "Anil Verma" },
  { id: "P008", pgName: "NestAway Sarjapur", location: "Sarjapur", roomType: "Single Non-AC", price: "₹8,000", availableBeds: 8, owner: "Anil Verma" },
];

export const followUps = [
  { leadName: "Arjun Mehta", task: "Send property details", due: "Today", priority: "High" },
  { leadName: "Neha Gupta", task: "Follow up on visit", due: "Today", priority: "Medium" },
  { leadName: "Rohan Das", task: "Schedule property visit", due: "Tomorrow", priority: "High" },
  { leadName: "Varun Malhotra", task: "Call back - missed call", due: "Today", priority: "Low" },
  { leadName: "Riya Chopra", task: "Share property photos", due: "Tomorrow", priority: "Medium" },
];
