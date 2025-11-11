import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Load environment variables
dotenv.config();

// Import routes (will create these)
// import authRoutes from './routes/auth.routes';
// import userRoutes from './routes/user.routes';
// ... more routes

const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// API routes
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Gym Tracker API',
    version: '1.0.0',
    docs: '/api/docs',
  });
});

// Mount routes (will uncomment as we create them)
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/exercises', exerciseRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/nutrition', nutritionRoutes);
// app.use('/api/trainers', trainerRoutes);
// app.use('/api/gyms', gymRoutes);
// app.use('/api/social', socialRoutes);
// app.use('/api/payments', paymentRoutes);

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  // Add more socket event handlers as needed
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: {
      message: 'Route not found',
      path: req.path,
    },
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`
  🚀 Server is running!

  Environment: ${process.env.NODE_ENV}
  Port: ${PORT}
  API: http://localhost:${PORT}/api
  Health: http://localhost:${PORT}/health

  Press CTRL+C to stop
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  httpServer.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

export { io };
