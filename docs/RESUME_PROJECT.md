# Gatherly — Resume & Portfolio Copy

Use these sections on your resume, portfolio site, or job applications.

---

## One-Line Summary

Full-stack marketplace MVP for booking real-life experiences (creators, hosts, farmers) — Next.js, Express, PostgreSQL, Prisma, Docker.

---

## Resume Bullet Points (pick 3–5)

- Architected and built **Gatherly**, a production-ready experience marketplace MVP with **40+ database models**, REST APIs, and role-based dashboards (Host, Farmer, Admin)
- Developed a **Next.js 16 / React 19** frontend with premium UI (glassmorphism, dark mode, Framer Motion) and **15+ landing page sections** designed for investor and customer demos
- Implemented **Express 5** backend with **Prisma ORM**, PostgreSQL, Redis, Zod validation, Helmet security, rate limiting, and RBAC across 9 user roles
- Designed scalable relational schema supporting unlimited categories, bookings, payments (Stripe/Razorpay-ready), social features, and a unique **Farm Weekends** vertical
- Set up **Docker Compose**, GitHub Actions CI/CD, monorepo workspace structure, seed data, and technical documentation (architecture, API, security, deployment)
- Built search, filtering, experience detail pages, booking flow foundation, and mock-to-API data layer for offline demo capability

---

## Projects Section (Resume Format)

**Gatherly** — Experience Marketplace MVP | *Personal Project*  
*Next.js · TypeScript · Express · PostgreSQL · Prisma · Redis · Docker · Tailwind CSS*

- Marketplace connecting users with creators, trainers, and farmers for bookable real-world experiences
- Monorepo with Next.js frontend, Express REST API, 40+ model Prisma schema, and Dockerized PostgreSQL/Redis
- Features: premium landing page, host/farmer/admin dashboards, advanced search, Farm Weekends category, RBAC, CI pipeline
- GitHub: `https://github.com/ashiningstard7-prog/Gatherly`

---

## Skills to Tag on Resume / LinkedIn

**Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion, React Query  
**Backend:** Node.js, Express.js, REST APIs, Prisma ORM  
**Database:** PostgreSQL, Redis, schema design, migrations, seeding  
**DevOps:** Docker, Docker Compose, GitHub Actions, monorepo (npm workspaces)  
**Security:** RBAC, Helmet, rate limiting, Zod validation, OWASP-aware architecture  
**Tools:** Git, GitHub, Vercel-ready, Railway-ready

---

## Interview Talking Points

1. **Why monorepo?** Shared types potential, single CI pipeline, coordinated frontend/backend releases
2. **Schema design:** Categories are hierarchical and unlimited; FarmActivity is a separate vertical linked to Experience
3. **RBAC:** 9 roles with hierarchy — middleware enforces minimum role per route
4. **MVP vs production:** Auth (Clerk), payments (Stripe/Razorpay), and maps are architected with env vars and routes stubbed — clear Phase 2 roadmap
5. **Scalability:** Indexed queries, stateless API, Redis for cache/sessions, CDN-ready media via Cloudinary config

---

## GitHub Repository Description (for repo settings)

> Full-stack experience marketplace MVP — Next.js, Express, PostgreSQL, Prisma. Book real-life experiences with creators, hosts & farmers. Farm Weekends feature.

**Topics/tags to add on GitHub:**  
`nextjs` `typescript` `express` `postgresql` `prisma` `marketplace` `full-stack` `docker` `tailwindcss` `startup-mvp` `react`
