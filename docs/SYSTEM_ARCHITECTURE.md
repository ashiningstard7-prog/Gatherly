# System Architecture — Gatherly

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  Next.js App (SSR/SSG) · Mobile Web · Future Native Apps    │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS / REST
┌──────────────────────────▼──────────────────────────────────┐
│                      API Gateway Layer                       │
│  Express.js · Helmet · CORS · Rate Limiting · Auth Middleware│
└──────────┬───────────────────────────────┬──────────────────┘
           │                               │
┌──────────▼──────────┐         ┌──────────▼──────────┐
│   PostgreSQL         │         │   Redis              │
│   (Prisma ORM)       │         │   (Cache/Sessions)   │
└─────────────────────┘         └─────────────────────┘
           │
┌──────────▼──────────────────────────────────────────────────┐
│                    External Services                          │
│  Clerk · Stripe · Razorpay · Cloudinary · Google Maps       │
└─────────────────────────────────────────────────────────────┘
```

## Frontend Architecture

- **App Router** (Next.js 16) with server and client components
- **Component structure:** `components/landing/`, `components/ui/`, `components/dashboard/`
- **State:** React Query for server state, Context for theme
- **Styling:** Tailwind CSS 4 with CSS variables for theming
- **Animation:** Framer Motion for page transitions and micro-interactions

## Backend Architecture

- **Clean separation:** routes → services → Prisma
- **Middleware chain:** helmet → cors → rateLimit → auth → routes → errorHandler
- **Validation:** Zod schemas on all inputs
- **RBAC:** Role hierarchy (GUEST → SUPER_ADMIN)

## Data Flow: Booking

```
User selects experience → POST /api/v1/experiences/:id/book
  → Validate schedule availability
  → Create booking (PENDING)
  → Process payment (Stripe/Razorpay)
  → Confirm booking + generate QR
  → Notify host + user
  → Update analytics
```

## Scalability Considerations

- Indexed queries on experiences, bookings, users
- Redis for session cache and rate limiting
- Stateless API servers (horizontal scaling ready)
- CDN for static assets and images (Cloudinary)
- Database read replicas ready via Prisma

## Security Architecture

- OWASP best practices
- Input validation (Zod)
- SQL injection protection (Prisma parameterized queries)
- XSS protection (Helmet CSP headers)
- CSRF protection (SameSite cookies)
- Audit logging for admin actions
