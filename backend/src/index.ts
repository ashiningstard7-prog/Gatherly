import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { devAuthMiddleware } from './middleware/auth.js';

import experiencesRoutes from './routes/experiences.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import searchRoutes from './routes/search.routes.js';
import publicRoutes from './routes/public.routes.js';
import hostRoutes from './routes/host.routes.js';
import farmerRoutes from './routes/farmer.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: env.APP_URL,
  credentials: true,
}));
app.use(compression());
app.use(morgan(env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, error: { message: 'Too many requests' } },
});
app.use('/api/', limiter);

app.use(devAuthMiddleware);

app.get('/health', (_req, res) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      app: env.APP_NAME,
      timestamp: new Date().toISOString(),
    },
  });
});

app.use('/api/v1/experiences', experiencesRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/search', searchRoutes);
app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/host', hostRoutes);
app.use('/api/v1/farmer', farmerRoutes);
app.use('/api/v1/admin', adminRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`🚀 ${env.APP_NAME} API running on http://localhost:${env.PORT}`);
});

export default app;
