
import type { TeamMember } from '../types/team.types';

export const teamMembers: TeamMember[] = [
  {
    id: 'stylist-1',
    name: 'Arjun Mehta',
    role: 'Senior Hair Stylist',
    experience: '6 years of experience',
    specialties: ['Hair Styling', 'Hair Colour', 'Hair Treatment'],
    initials: 'AM',
    image: '/images/teams/arjun-mehta.png',
    featured: true,
  },
  {
    id: 'stylist-2',
    name: 'Rohan Sharma',
    role: 'Skincare Specialist',
    experience: '5 years of experience',
    specialties: ['Facials', 'Skin Care', 'Beard Care'],
    initials: 'RS',
    image: '/images/teams/mehdi-pezhvak-KipnoM-k7Lc-unsplash.jpg',
  },
  {
    id: 'stylist-3',
    name: 'Karan Malhotra',
    role: 'Makeup Artist',
    experience: '4 years of experience',
    specialties: ['Party Makeup', 'Groom Makeup', 'Bridal Makeup'],
    initials: 'KM',
      image: '/images/teams/jeppe-monster-T_gTN3Po9RQ-unsplash.jpg',
  },
];
