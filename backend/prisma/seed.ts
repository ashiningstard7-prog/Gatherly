import {
  PrismaClient,
  UserRole,
  ExperienceStatus,
  HostType,
  DifficultyLevel,
  FarmActivityType,
  VerificationStatus,
} from '@prisma/client';

const prisma = new PrismaClient();

const CATEGORIES = [
  { name: 'Fitness', slug: 'fitness', icon: 'dumbbell', color: '#EF4444', isFeatured: true, sortOrder: 1 },
  { name: 'Sports', slug: 'sports', icon: 'trophy', color: '#F97316', isFeatured: true, sortOrder: 2 },
  { name: 'Farming', slug: 'farming', icon: 'wheat', color: '#84CC16', isFeatured: true, sortOrder: 3 },
  { name: 'Cooking', slug: 'cooking', icon: 'chef-hat', color: '#EAB308', isFeatured: true, sortOrder: 4 },
  { name: 'Music', slug: 'music', icon: 'music', color: '#8B5CF6', isFeatured: true, sortOrder: 5 },
  { name: 'Dance', slug: 'dance', icon: 'sparkles', color: '#EC4899', isFeatured: true, sortOrder: 6 },
  { name: 'Photography', slug: 'photography', icon: 'camera', color: '#06B6D4', isFeatured: true, sortOrder: 7 },
  { name: 'Adventure', slug: 'adventure', icon: 'mountain', color: '#10B981', isFeatured: true, sortOrder: 8 },
  { name: 'Technology', slug: 'technology', icon: 'code', color: '#3B82F6', isFeatured: true, sortOrder: 9 },
  { name: 'Business', slug: 'business', icon: 'briefcase', color: '#6366F1', isFeatured: false, sortOrder: 10 },
  { name: 'Education', slug: 'education', icon: 'book-open', color: '#14B8A6', isFeatured: false, sortOrder: 11 },
  { name: 'Village Life', slug: 'village-life', icon: 'home', color: '#A3E635', isFeatured: true, sortOrder: 12 },
  { name: 'Camping', slug: 'camping', icon: 'tent', color: '#78716C', isFeatured: false, sortOrder: 13 },
  { name: 'Nature', slug: 'nature', icon: 'leaf', color: '#22C55E', isFeatured: false, sortOrder: 14 },
  { name: 'Art', slug: 'art', icon: 'palette', color: '#F43F5E', isFeatured: false, sortOrder: 15 },
  { name: 'Wellness', slug: 'wellness', icon: 'heart', color: '#FB7185', isFeatured: false, sortOrder: 16 },
  { name: 'Gaming', slug: 'gaming', icon: 'gamepad-2', color: '#A855F7', isFeatured: false, sortOrder: 17 },
  { name: 'AI', slug: 'ai', icon: 'brain', color: '#0EA5E9', isFeatured: false, sortOrder: 18 },
  { name: 'Community', slug: 'community', icon: 'users', color: '#64748B', isFeatured: false, sortOrder: 19 },
  { name: 'Food', slug: 'food', icon: 'utensils', color: '#FB923C', isFeatured: false, sortOrder: 20 },
];

async function main() {
  console.log('🌱 Seeding Gatherly database...');

  // Platform stats
  const stats = [
    { key: 'experiences', value: '2,500+', label: 'Experiences' },
    { key: 'hosts', value: '850+', label: 'Hosts & Creators' },
    { key: 'cities', value: '120+', label: 'Cities' },
    { key: 'bookings', value: '50,000+', label: 'Bookings' },
    { key: 'rating', value: '4.9', label: 'Average Rating' },
    { key: 'countries', value: '35+', label: 'Countries' },
  ];

  for (const stat of stats) {
    await prisma.platformStat.upsert({
      where: { key: stat.key },
      create: stat,
      update: stat,
    });
  }

  // Categories
  for (const cat of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      create: cat,
      update: cat,
    });
  }

  const farmingCategory = await prisma.category.findUnique({ where: { slug: 'farming' } });
  const fitnessCategory = await prisma.category.findUnique({ where: { slug: 'fitness' } });
  const cookingCategory = await prisma.category.findUnique({ where: { slug: 'cooking' } });
  const musicCategory = await prisma.category.findUnique({ where: { slug: 'music' } });
  const adventureCategory = await prisma.category.findUnique({ where: { slug: 'adventure' } });
  const villageCategory = await prisma.category.findUnique({ where: { slug: 'village-life' } });

  // Demo users
  const hostUser = await prisma.user.upsert({
    where: { email: 'host@gatherly.app' },
    create: {
      email: 'host@gatherly.app',
      firstName: 'Sarah',
      lastName: 'Chen',
      displayName: 'Sarah Chen',
      role: UserRole.HOST,
      status: 'ACTIVE',
      verificationStatus: VerificationStatus.VERIFIED,
      emailVerified: true,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      bio: 'Fitness coach & wellness expert with 10+ years experience.',
    },
    update: {},
  });

  const farmerUser = await prisma.user.upsert({
    where: { email: 'farmer@gatherly.app' },
    create: {
      email: 'farmer@gatherly.app',
      firstName: 'Raj',
      lastName: 'Patel',
      displayName: 'Raj Patel',
      role: UserRole.FARMER,
      status: 'ACTIVE',
      verificationStatus: VerificationStatus.VERIFIED,
      emailVerified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      bio: 'Third-generation organic farmer in Punjab, India.',
    },
    update: {},
  });

  const creatorUser = await prisma.user.upsert({
    where: { email: 'creator@gatherly.app' },
    create: {
      email: 'creator@gatherly.app',
      firstName: 'Marcus',
      lastName: 'Rivera',
      displayName: 'Marcus Rivera',
      role: UserRole.CREATOR,
      status: 'ACTIVE',
      verificationStatus: VerificationStatus.VERIFIED,
      emailVerified: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      bio: 'Professional photographer & travel creator.',
    },
    update: {},
  });

  await prisma.hostProfile.upsert({
    where: { userId: hostUser.id },
    create: {
      userId: hostUser.id,
      hostType: HostType.INDIVIDUAL,
      tagline: 'Transform your fitness journey',
      description: 'Certified personal trainer specializing in HIIT and strength training.',
      verificationStatus: VerificationStatus.VERIFIED,
      identityVerified: true,
      isSuperhost: true,
      averageRating: 4.9,
      totalReviews: 127,
      totalBookings: 340,
      totalExperiences: 3,
      approvedAt: new Date(),
    },
    update: {},
  });

  await prisma.hostProfile.upsert({
    where: { userId: creatorUser.id },
    create: {
      userId: creatorUser.id,
      hostType: HostType.CREATOR,
      tagline: 'Capture the world through your lens',
      description: 'Award-winning photographer offering workshops worldwide.',
      verificationStatus: VerificationStatus.VERIFIED,
      identityVerified: true,
      isSuperhost: true,
      averageRating: 4.8,
      totalReviews: 89,
      totalBookings: 210,
      totalExperiences: 2,
      approvedAt: new Date(),
    },
    update: {},
  });

  const farmerProfile = await prisma.farmerProfile.upsert({
    where: { userId: farmerUser.id },
    create: {
      userId: farmerUser.id,
      farmName: 'Green Valley Organic Farm',
      farmDescription: 'A 50-acre organic farm offering authentic rural experiences in the heart of Punjab.',
      farmSize: 50,
      farmSizeUnit: 'acres',
      location: 'Amritsar, Punjab, India',
      latitude: 31.6340,
      longitude: 74.8723,
      crops: ['Wheat', 'Rice', 'Vegetables', 'Fruits', 'Mustard'],
      seasons: ['Spring', 'Summer', 'Monsoon', 'Winter'],
      equipment: ['Tractor', 'Irrigation System', 'Harvest Tools'],
      safetyRules: 'Wear closed shoes. Follow guide instructions. No smoking near crops.',
      capacity: 20,
      verificationStatus: VerificationStatus.VERIFIED,
      photos: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      ],
      averageRating: 4.95,
      totalReviews: 156,
      totalVisitors: 890,
      approvedAt: new Date(),
    },
    update: {},
  });

  const demoUser = await prisma.user.upsert({
    where: { email: 'guest@gatherly.app' },
    create: {
      email: 'guest@gatherly.app',
      firstName: 'Emma',
      lastName: 'Wilson',
      displayName: 'Emma Wilson',
      role: UserRole.USER,
      status: 'ACTIVE',
      emailVerified: true,
    },
    update: {},
  });

  // Experiences
  const experiences = [
    {
      hostId: hostUser.id,
      title: 'Sunrise HIIT Bootcamp in Central Park',
      slug: 'sunrise-hiit-bootcamp-central-park',
      description: 'Start your day with an energizing high-intensity interval training session in the beautiful Central Park. Perfect for all fitness levels with modifications available.',
      shortDescription: 'Energizing morning HIIT session in Central Park',
      status: ExperienceStatus.PUBLISHED,
      difficulty: DifficultyLevel.ALL_LEVELS,
      duration: 60,
      maxParticipants: 15,
      price: 35,
      location: 'Central Park, New York',
      city: 'New York',
      country: 'USA',
      latitude: 40.7829,
      longitude: -73.9654,
      isFeatured: true,
      averageRating: 4.9,
      totalReviews: 87,
      totalBookings: 234,
      coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
      images: ['https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800'],
      tags: ['fitness', 'hiit', 'outdoor', 'morning'],
      publishedAt: new Date(),
      categoryId: fitnessCategory!.id,
    },
    {
      hostId: farmerUser.id,
      title: 'Weekend Farm Retreat - Plant, Harvest & Feast',
      slug: 'weekend-farm-retreat-green-valley',
      description: 'Escape the city for an authentic farm weekend. Plant crops, milk cows, harvest fresh vegetables, learn traditional cooking, and camp under the stars. Take home your harvest!',
      shortDescription: 'Authentic farm weekend with planting, harvesting & camping',
      status: ExperienceStatus.PUBLISHED,
      hostType: HostType.FARMER,
      difficulty: DifficultyLevel.BEGINNER,
      duration: 2880,
      durationUnit: 'minutes',
      maxParticipants: 20,
      price: 149,
      location: 'Green Valley Organic Farm, Amritsar',
      city: 'Amritsar',
      country: 'India',
      latitude: 31.6340,
      longitude: 74.8723,
      isFeatured: true,
      isFarmExperience: true,
      averageRating: 4.95,
      totalReviews: 156,
      totalBookings: 445,
      coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      images: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      ],
      tags: ['farm', 'weekend', 'organic', 'camping', 'harvest'],
      publishedAt: new Date(),
      categoryId: farmingCategory!.id,
    },
    {
      hostId: farmerUser.id,
      title: 'Fruit Picking & Traditional Cooking Experience',
      slug: 'fruit-picking-traditional-cooking',
      description: 'Pick fresh seasonal fruits from our orchards and learn to cook traditional Punjabi dishes with farm-fresh ingredients. A perfect family-friendly experience.',
      shortDescription: 'Pick fruits & cook traditional dishes with farm-fresh ingredients',
      status: ExperienceStatus.PUBLISHED,
      hostType: HostType.FARMER,
      difficulty: DifficultyLevel.BEGINNER,
      duration: 240,
      maxParticipants: 12,
      price: 65,
      location: 'Green Valley Organic Farm, Amritsar',
      city: 'Amritsar',
      country: 'India',
      isFeatured: true,
      isFarmExperience: true,
      averageRating: 4.88,
      totalReviews: 92,
      totalBookings: 278,
      coverImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87b765?w=800',
      tags: ['fruit-picking', 'cooking', 'family', 'farm'],
      publishedAt: new Date(),
      categoryId: cookingCategory!.id,
    },
    {
      hostId: creatorUser.id,
      title: 'Golden Hour Photography Masterclass',
      slug: 'golden-hour-photography-masterclass',
      description: 'Learn professional photography techniques during the magical golden hour. Covers composition, lighting, and post-processing with hands-on practice.',
      shortDescription: 'Master golden hour photography with a pro',
      status: ExperienceStatus.PUBLISHED,
      hostType: HostType.CREATOR,
      difficulty: DifficultyLevel.INTERMEDIATE,
      duration: 180,
      maxParticipants: 8,
      price: 89,
      location: 'Brooklyn Bridge Park, New York',
      city: 'New York',
      country: 'USA',
      isFeatured: true,
      averageRating: 4.85,
      totalReviews: 64,
      totalBookings: 156,
      coverImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
      tags: ['photography', 'golden-hour', 'workshop'],
      publishedAt: new Date(),
      categoryId: musicCategory!.id,
    },
    {
      hostId: hostUser.id,
      title: 'Sunset Yoga & Meditation by the Beach',
      slug: 'sunset-yoga-meditation-beach',
      description: 'Unwind with a guided yoga and meditation session as the sun sets over the ocean. All levels welcome, mats provided.',
      shortDescription: 'Peaceful sunset yoga session by the ocean',
      status: ExperienceStatus.PUBLISHED,
      difficulty: DifficultyLevel.ALL_LEVELS,
      duration: 90,
      maxParticipants: 20,
      price: 45,
      location: 'Santa Monica Beach, California',
      city: 'Los Angeles',
      country: 'USA',
      averageRating: 4.92,
      totalReviews: 103,
      totalBookings: 312,
      coverImage: 'https://images.unsplash.com/photo-1545205597-3d1d3a258a5e?w=800',
      tags: ['yoga', 'meditation', 'beach', 'sunset'],
      publishedAt: new Date(),
      categoryId: fitnessCategory!.id,
    },
    {
      hostId: farmerUser.id,
      title: 'Village Walk & Rice Plantation Workshop',
      slug: 'village-walk-rice-plantation',
      description: 'Experience authentic village life with a guided walk through rural Punjab. Learn traditional rice plantation techniques and enjoy a home-cooked meal with a local family.',
      shortDescription: 'Village walk & hands-on rice planting experience',
      status: ExperienceStatus.PUBLISHED,
      hostType: HostType.FARMER,
      difficulty: DifficultyLevel.BEGINNER,
      duration: 360,
      maxParticipants: 15,
      price: 55,
      location: 'Green Valley Organic Farm, Amritsar',
      city: 'Amritsar',
      country: 'India',
      isFarmExperience: true,
      averageRating: 4.91,
      totalReviews: 78,
      totalBookings: 198,
      coverImage: 'https://images.unsplash.com/photo-1574943327769-4a64f367f678?w=800',
      tags: ['village', 'rice', 'plantation', 'cultural'],
      publishedAt: new Date(),
      categoryId: villageCategory!.id,
    },
  ];

  for (const exp of experiences) {
    const { categoryId, ...expData } = exp;
    const experience = await prisma.experience.upsert({
      where: { slug: exp.slug },
      create: expData,
      update: expData,
    });

    await prisma.experienceCategory.upsert({
      where: {
        experienceId_categoryId: {
          experienceId: experience.id,
          categoryId,
        },
      },
      create: { experienceId: experience.id, categoryId },
      update: {},
    });

    const startTime = new Date();
    startTime.setDate(startTime.getDate() + 7);
    startTime.setHours(9, 0, 0, 0);

    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + exp.duration);

    await prisma.experienceSchedule.create({
      data: {
        experienceId: experience.id,
        startTime,
        endTime,
        spotsTotal: exp.maxParticipants,
        spotsBooked: Math.floor(Math.random() * 5),
      },
    });
  }

  // Farm activities
  const farmExp = await prisma.experience.findUnique({
    where: { slug: 'weekend-farm-retreat-green-valley' },
  });

  if (farmExp) {
    await prisma.farmActivity.createMany({
      data: [
        {
          farmerProfileId: farmerProfile.id,
          activityType: FarmActivityType.WEEKEND_FARMING,
          title: 'Weekend Farming Experience',
          description: 'Full weekend immersion in farm life',
          duration: 2880,
          price: 149,
          maxParticipants: 20,
          experienceId: farmExp.id,
        },
        {
          farmerProfileId: farmerProfile.id,
          activityType: FarmActivityType.FRUIT_PICKING,
          title: 'Seasonal Fruit Picking',
          description: 'Pick fresh fruits from our orchards',
          duration: 180,
          price: 35,
          maxParticipants: 15,
        },
        {
          farmerProfileId: farmerProfile.id,
          activityType: FarmActivityType.COW_FEEDING,
          title: 'Animal Care & Cow Feeding',
          description: 'Learn to care for farm animals and milk cows',
          duration: 120,
          price: 25,
          maxParticipants: 10,
        },
        {
          farmerProfileId: farmerProfile.id,
          activityType: FarmActivityType.FARM_CAMPING,
          title: 'Farm Camping Under Stars',
          description: 'Camp on the farm with bonfire and stargazing',
          duration: 720,
          price: 75,
          maxParticipants: 12,
        },
      ],
      skipDuplicates: true,
    });
  }

  // Sample reviews
  const allExperiences = await prisma.experience.findMany({ take: 3 });
  for (const exp of allExperiences) {
    await prisma.review.create({
      data: {
        userId: demoUser.id,
        experienceId: exp.id,
        bookingId: (await prisma.booking.create({
          data: {
            bookingNumber: `GL-SEED-${exp.slug.slice(0, 8).toUpperCase()}`,
            userId: demoUser.id,
            experienceId: exp.id,
            scheduleId: (await prisma.experienceSchedule.findFirst({
              where: { experienceId: exp.id },
            }))!.id,
            status: 'COMPLETED',
            subtotal: exp.price,
            total: exp.price,
          },
        })).id,
        rating: 5,
        title: 'Absolutely amazing experience!',
        comment: 'This was one of the best experiences I have ever had. The host was knowledgeable, friendly, and made everything so enjoyable. Highly recommend!',
      },
    });
  }

  // Achievements
  await prisma.achievement.createMany({
    data: [
      { name: 'First Adventure', description: 'Complete your first experience', points: 100 },
      { name: 'Farm Explorer', description: 'Visit a farm experience', points: 200 },
      { name: 'Social Butterfly', description: 'Follow 10 creators', points: 150 },
      { name: 'Super Reviewer', description: 'Leave 5 reviews', points: 250 },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
