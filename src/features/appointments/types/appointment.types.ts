
export type BookingService = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: number;
};

export type BookingStaff = {
  id: string;
  name: string;
  role: string;
  initials: string;
  specialties: string[];
};

export type BookingDetails = {
  customerName: string;
  email: string;
  phone: string;
  notes: string;
};
