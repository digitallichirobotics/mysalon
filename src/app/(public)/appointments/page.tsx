import React from 'react'

export const page = () => {
  return (
    <div>p</div>
  )
}

import type { Metadata } from 'next';
import BookingFlow from '../../../features/appointments/components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Choose your salon service, stylist, date and time at Gilli Gilli Salon and Spa.',
};

export default function BookingPage() {
  return <BookingFlow />;
}
