import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { apiRouter } from '../server/apiRoutes.js';
import { db } from '../server/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for Vercel preview deployments & domain origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Diagnostic Health Check Endpoint
const handleHealth = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'NihonGo Reflex API Serverless Gateway đang hoạt động chuẩn xác trên Vercel!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    vercel: Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME),
    configCheck: {
      hasGoogleClientId: Boolean(process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID),
      hasGoogleClientSecret: Boolean(process.env.GOOGLE_CLIENT_SECRET),
      hasGeminiApiKey: Boolean(process.env.GEMINI_API_KEY),
      initialAdminEmail: process.env.INITIAL_ADMIN_EMAIL || 'lehoangbaolamth2@gmail.com',
    },
    databaseStatus: {
      usersCount: db.getUsers().length,
      isLoaded: true,
    },
    clientInfo: {
      ip: req.ip || (req.headers['x-forwarded-for'] as string) || 'unknown',
      origin: req.headers.origin || 'unknown',
      host: req.headers.host || 'unknown',
    }
  });
};

app.get('/api/health', handleHealth);
app.get('/health', handleHealth);

// Mount main API router on both /api and / to handle different Vercel rewrite patterns
app.use('/api', apiRouter);
app.use('/', apiRouter);

export default app;
