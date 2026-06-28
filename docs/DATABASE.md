# Database Documentation — Gatherly

## Overview

PostgreSQL relational database managed by Prisma ORM. 40+ models supporting users, experiences, bookings, payments, social features, and admin operations.

## Core Entity Groups

### Users & Profiles
- `User` — central identity with roles (GUEST → SUPER_ADMIN)
- `UserProfile` — interests, preferences, social links
- `HostProfile` — host-specific data, KYC, revenue
- `FarmerProfile` — farm details, crops, seasons, capacity
- `Address` — user locations with geo coordinates

### Experiences & Categories
- `Category` — unlimited hierarchical categories
- `Experience` — listings with geo, pricing, media
- `ExperienceCategory` — many-to-many join
- `ExperienceSchedule` — time slots with capacity
- `FarmActivity` — farm-specific activity types

### Bookings & Payments
- `Booking` — reservations with QR codes, check-in
- `Payment` — Stripe/Razorpay/Wallet transactions
- `Transaction` — wallet and ledger entries
- `Payout` — host revenue disbursements
- `PaymentMethod` — saved cards

### Social & Community
- `Follow`, `Post`, `PostLike`, `PostComment`
- `Achievement`, `UserAchievement`
- `Review` — verified booking reviews

### Operations
- `Notification`, `Message`, `Conversation`
- `Coupon`, `CouponUsage`
- `SupportTicket`, `IncidentReport`
- `AuditLog`, `CmsPage`, `PlatformStat`

## Key Indexes

- `users(email)`, `users(role)`, `users(referralCode)`
- `experiences(slug)`, `experiences(city)`, `experiences(status)`
- `bookings(bookingNumber)`, `bookings(userId, status)`
- `reviews(experienceId, rating)`

## Enums

| Enum | Values |
|------|--------|
| UserRole | GUEST, USER, CREATOR, HOST, FARMER, CELEBRITY, BUSINESS, ADMIN, SUPER_ADMIN |
| BookingStatus | PENDING, CONFIRMED, CHECKED_IN, COMPLETED, CANCELLED, REFUNDED, NO_SHOW |
| FarmActivityType | WEEKEND_FARMING, FRUIT_PICKING, COW_FEEDING, FARM_CAMPING, ... (17 types) |

## ER Diagram

See `database/ER_DIAGRAM.md` for the full entity relationship diagram.

## Commands

```bash
npm run db:generate   # Generate Prisma client
npm run db:migrate    # Run migrations
npm run db:seed       # Seed demo data
npm run db:studio     # Open Prisma Studio
```
