# API Documentation — Gatherly

Base URL: `http://localhost:4000/api/v1`

All responses follow the format:
```json
{ "success": true, "data": {}, "pagination": {} }
```

Errors:
```json
{ "success": false, "error": { "message": "...", "code": "..." } }
```

## Public Endpoints

### Health
- `GET /health` — Service health check

### Experiences
- `GET /api/v1/experiences` — List published experiences
- `GET /api/v1/experiences/:slug` — Experience detail
- `POST /api/v1/experiences/:id/book` — Create booking (auth required)

### Search
- `GET /api/v1/search?q=&category=&city=&minPrice=&maxPrice=&sort=` — Advanced search

### Categories
- `GET /api/v1/categories` — All active categories
- `GET /api/v1/categories/featured` — Featured categories
- `GET /api/v1/categories/:slug` — Category with experiences

### Public Data
- `GET /api/v1/public/` — Platform statistics
- `GET /api/v1/public/testimonials` — Featured reviews
- `GET /api/v1/public/creators` — Featured hosts
- `POST /api/v1/public/newsletter` — Subscribe `{ "email": "..." }`

## Host Endpoints (Role: HOST+)

- `GET /api/v1/host/dashboard` — Host dashboard stats
- `GET /api/v1/host/experiences` — Host's experiences
- `GET /api/v1/host/bookings` — Host's bookings

## Farmer Endpoints (Role: FARMER+)

- `GET /api/v1/farmer/dashboard` — Farmer dashboard
- `GET /api/v1/farmer/activities` — Farm activities

## Admin Endpoints (Role: ADMIN+)

- `GET /api/v1/admin/dashboard` — Platform overview
- `GET /api/v1/admin/users` — User management
- `GET /api/v1/admin/pending-hosts` — Pending approvals
- `PATCH /api/v1/admin/hosts/:id/approve` — Approve host

## Authentication

Production: Clerk JWT tokens via `@clerk/express`.

Development: `Authorization: Bearer dev-HOST` (supports any UserRole).

## Rate Limiting

100 requests per 15 minutes per IP on `/api/*`.
