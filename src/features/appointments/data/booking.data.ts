
import type { BookingService, BookingStaff } from '../types/appointment.types'

export const bookingServices: BookingService[] = [
  { id: 'haircut', name: 'Haircut & Styling', category: 'Hair', description: 'A personalised cut finished with a polished style.', price: 799, duration: 45 },
  { id: 'hair-spa', name: 'Luxury Hair Spa', category: 'Hair', description: 'A nourishing and relaxing hair treatment.', price: 1199, duration: 60 },
  { id: 'hair-colour', name: 'Hair Colour', category: 'Hair', description: 'A tailored colour refresh for your look.', price: 1999, duration: 90 },
  { id: 'facial', name: 'Signature Facial', category: 'Skin', description: 'A refreshing facial with personalised care.', price: 999, duration: 45 },
  { id: 'deep-facial', name: 'Deep Cleansing Facial', category: 'Skin', description: 'A relaxing deep-cleansing experience.', price: 1499, duration: 60 },
  { id: 'beard', name: 'Beard Styling', category: 'Grooming', description: 'A clean, refined beard trim and finish.', price: 499, duration: 30 },
  { id: 'party-makeup', name: 'Party Makeup', category: 'Makeup', description: 'A polished makeup look for your occasion.', price: 1499, duration: 60 },
  { id: 'groom-makeup', name: 'Groom Makeup', category: 'Makeup', description: 'A refined grooming and makeup experience.', price: 2499, duration: 75 },
];

export const bookingStaff: BookingStaff[] = [
  { id: 'stylist-1', name: 'Arjun Mehta', role: 'Senior Hair Stylist', initials: 'AM', specialties: ['Hair', 'Grooming'] },
  { id: 'stylist-2', name: 'Rohan Sharma', role: 'Skincare Specialist', initials: 'RS', specialties: ['Skin', 'Grooming'] },
  { id: 'stylist-3', name: 'Karan Malhotra', role: 'Makeup Artist', initials: 'KM', specialties: ['Makeup', 'Grooming'] },
];

export const bookingTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM',
];
