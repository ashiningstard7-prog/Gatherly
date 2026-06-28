# Deployment — Gatherly

## Local Development

```bash
npm run docker:up    # PostgreSQL + Redis
npm run dev          # Frontend :3000 + Backend :4000
```

## Vercel (Frontend)

1. Connect GitHub repo to Vercel
2. Set root directory to `frontend`
3. Environment variables:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## Railway (Backend + Database)

1. Create Railway project
2. Add PostgreSQL plugin
3. Deploy from `backend/` directory
4. Set `DATABASE_URL` from Railway Postgres
5. Run `npx prisma migrate deploy` on deploy

## Docker Production

```bash
docker compose -f docker-compose.yml up -d
docker build -f docker/Dockerfile.backend -t gatherly-api .
docker build -f docker/Dockerfile.frontend -t gatherly-web .
```

## Environment Checklist

- [ ] `DATABASE_URL` — PostgreSQL connection string
- [ ] `REDIS_URL` — Redis connection string
- [ ] `JWT_SECRET` — 64+ char random string
- [ ] `CLERK_SECRET_KEY` — From Clerk dashboard
- [ ] `STRIPE_SECRET_KEY` — From Stripe dashboard
- [ ] `CLOUDINARY_*` — Media upload credentials
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Maps integration

## Database Migrations

```bash
# Development
npm run db:migrate

# Production
npx prisma migrate deploy
```

## Health Checks

- Frontend: `GET /` (200)
- Backend: `GET /health` (200)
