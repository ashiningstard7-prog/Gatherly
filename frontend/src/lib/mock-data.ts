export const MOCK_CATEGORIES = [
  { id: '1', name: 'Fitness', slug: 'fitness', icon: 'dumbbell', color: '#EF4444', isFeatured: true },
  { id: '2', name: 'Farming', slug: 'farming', icon: 'wheat', color: '#84CC16', isFeatured: true },
  { id: '3', name: 'Cooking', slug: 'cooking', icon: 'chef-hat', color: '#EAB308', isFeatured: true },
  { id: '4', name: 'Photography', slug: 'photography', icon: 'camera', color: '#06B6D4', isFeatured: true },
  { id: '5', name: 'Adventure', slug: 'adventure', icon: 'mountain', color: '#10B981', isFeatured: true },
  { id: '6', name: 'Music', slug: 'music', icon: 'music', color: '#8B5CF6', isFeatured: true },
  { id: '7', name: 'Dance', slug: 'dance', icon: 'sparkles', color: '#EC4899', isFeatured: true },
  { id: '8', name: 'Village Life', slug: 'village-life', icon: 'home', color: '#A3E635', isFeatured: true },
  { id: '9', name: 'Technology', slug: 'technology', icon: 'code', color: '#3B82F6', isFeatured: true },
  { id: '10', name: 'Wellness', slug: 'wellness', icon: 'heart', color: '#FB7185', isFeatured: false },
  { id: '11', name: 'Art', slug: 'art', icon: 'palette', color: '#F43F5E', isFeatured: false },
  { id: '12', name: 'Gaming', slug: 'gaming', icon: 'gamepad-2', color: '#A855F7', isFeatured: false },
];

export const MOCK_EXPERIENCES = [
  {
    id: '1',
    title: 'Weekend Farm Retreat - Plant, Harvest & Feast',
    slug: 'weekend-farm-retreat-green-valley',
    shortDescription: 'Authentic farm weekend with planting, harvesting & camping',
    price: 149,
    currency: 'USD',
    duration: 2880,
    durationUnit: 'minutes',
    location: 'Amritsar, India',
    city: 'Amritsar',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    averageRating: 4.95,
    totalReviews: 156,
    isFeatured: true,
    isFarmExperience: true,
    host: { displayName: 'Raj Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  },
  {
    id: '2',
    title: 'Sunrise HIIT Bootcamp in Central Park',
    slug: 'sunrise-hiit-bootcamp-central-park',
    shortDescription: 'Energizing morning HIIT session in Central Park',
    price: 35,
    currency: 'USD',
    duration: 60,
    location: 'New York, USA',
    city: 'New York',
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    averageRating: 4.9,
    totalReviews: 87,
    isFeatured: true,
    host: { displayName: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  },
  {
    id: '3',
    title: 'Golden Hour Photography Masterclass',
    slug: 'golden-hour-photography-masterclass',
    shortDescription: 'Master golden hour photography with a pro',
    price: 89,
    currency: 'USD',
    duration: 180,
    location: 'New York, USA',
    city: 'New York',
    coverImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    averageRating: 4.85,
    totalReviews: 64,
    isFeatured: true,
    host: { displayName: 'Marcus Rivera', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
  },
  {
    id: '4',
    title: 'Fruit Picking & Traditional Cooking',
    slug: 'fruit-picking-traditional-cooking',
    shortDescription: 'Pick fruits & cook traditional dishes',
    price: 65,
    currency: 'USD',
    duration: 240,
    location: 'Amritsar, India',
    city: 'Amritsar',
    coverImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87b765?w=800',
    averageRating: 4.88,
    totalReviews: 92,
    isFeatured: true,
    isFarmExperience: true,
    host: { displayName: 'Raj Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  },
];

export const MOCK_STATS = {
  experiences: '2,500+',
  hosts: '850+',
  cities: '120+',
  bookings: '50,000+',
  rating: '4.9',
  countries: '35+',
};

export const MOCK_CREATORS = [
  {
    id: '1',
    user: {
      displayName: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      bio: 'Fitness coach & wellness expert',
    },
    tagline: 'Transform your fitness journey',
    isSuperhost: true,
    averageRating: 4.9,
    totalBookings: 340,
  },
  {
    id: '2',
    user: {
      displayName: 'Raj Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      bio: 'Third-generation organic farmer',
    },
    tagline: 'Authentic rural farm experiences',
    isSuperhost: true,
    averageRating: 4.95,
    totalBookings: 445,
  },
  {
    id: '3',
    user: {
      displayName: 'Marcus Rivera',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      bio: 'Award-winning photographer',
    },
    tagline: 'Capture the world through your lens',
    isSuperhost: true,
    averageRating: 4.8,
    totalBookings: 210,
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: '1',
    rating: 5,
    comment: 'The farm weekend was life-changing! Planting crops, milking cows, and camping under the stars — absolutely magical.',
    user: { displayName: 'Emma Wilson', avatar: null },
    experience: { title: 'Weekend Farm Retreat' },
  },
  {
    id: '2',
    rating: 5,
    comment: 'Sarah\'s HIIT bootcamp pushed me to my limits in the best way. Already booked my next session!',
    user: { displayName: 'James Park', avatar: null },
    experience: { title: 'Sunrise HIIT Bootcamp' },
  },
  {
    id: '3',
    rating: 5,
    comment: 'Marcus taught me more about photography in 3 hours than I learned in years. The golden hour shots are stunning.',
    user: { displayName: 'Lisa Chen', avatar: null },
    experience: { title: 'Photography Masterclass' },
  },
];

export const FAQS = [
  {
    question: 'What is Gatherly?',
    answer: 'Gatherly is a marketplace where you can discover and book unique real-life experiences with creators, professionals, experts, and local hosts — from farm weekends to fitness bootcamps.',
  },
  {
    question: 'How do Farm Weekends work?',
    answer: 'Farm Weekends let you escape the city for authentic rural experiences. Plant crops, harvest vegetables, milk cows, learn traditional cooking, camp under the stars, and even take home your harvest!',
  },
  {
    question: 'How do I become a host?',
    answer: 'Sign up, complete identity verification, create your experience listing with photos and pricing, and submit for review. Our team approves hosts within 24-48 hours.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards via Stripe, UPI and local payments via Razorpay, wallet balance, promo codes, and gift cards.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Each experience has its own cancellation policy set by the host. Most offer free cancellation up to 24-48 hours before the experience starts.',
  },
  {
    question: 'Is Gatherly available in my city?',
    answer: 'We\'re rapidly expanding to 120+ cities across 35 countries. Search for experiences near you or browse our featured categories.',
  },
];

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: ['List up to 2 experiences', 'Basic analytics', 'Standard support', '5% platform fee'],
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For growing hosts',
    features: ['Unlimited experiences', 'Advanced analytics', 'Priority support', '3% platform fee', 'Featured listings', 'Custom coupons'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For businesses & brands',
    features: ['Everything in Pro', 'Dedicated account manager', 'API access', '2% platform fee', 'White-label options', 'Custom integrations'],
  },
];
