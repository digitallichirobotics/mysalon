import type { Metadata } from 'next';
import { ReviewForm } from '../../../features/reviews';

export const metadata: Metadata = { title: 'Write a Review' };

export default function ReviewsPage() {
  return <main><ReviewForm /></main>;
}
