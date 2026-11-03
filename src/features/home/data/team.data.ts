
import type { TeamMember } from '../types/team.types';

export const teamMembers: TeamMember[] = [
  {
    id: 'stylist-1',
    name: 'Arjun Mehta',
    role: 'Senior Hair Stylist',
    experience: '6 years of experience',
    specialties: ['Hair Styling', 'Hair Colour', 'Hair Treatment'],
    initials: 'AM',
    image: '/images/teams/salon-stylist.jpg',
    featured: true,
  },
  {
    id: 'stylist-2',
    name: 'Rohan Sharma',
    role: 'Skincare Specialist',
    experience: '5 years of experience',
    specialties: ['Facials', 'Skin Care', 'Beard Care'],
    initials: 'RS',
    image: '/images/teams/spa-specialist.jpg',
  },
  {
    id: 'stylist-3',
    name: 'Karan Malhotra',
    role: 'Makeup Artist',
    experience: '4 years of experience',
    specialties: ['Party Makeup', 'Groom Makeup', 'Bridal Makeup'],
    initials: 'KM',
    image: '/images/teams/makeup-artist.jpg',
  },
];
