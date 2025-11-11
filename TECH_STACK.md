# Fitness Tracking App - Tech Stack

## Design Philosophy (Origin-Inspired)
- **Clean, minimalist interface**
- **Card-based UI design**
- **Excellent dark mode support**
- **Smooth navigation**
- **Calmer, non-overwhelming interface**
- **Automatic categorization with charts and graphs**
- **Customizable dashboard**

## Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (for Origin-like clean design)
- **UI Components**: Headless UI + Custom components
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts (for analytics and progress visualization)
- **Date/Time**: date-fns
- **API Client**: Axios
- **Router**: React Router v6
- **Icons**: Lucide React
- **Image Upload**: React Dropzone
- **QR/Barcode**: html5-qrcode

## Backend
- **Runtime**: Node.js 20+
- **Framework**: Express + TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT + bcrypt
- **Validation**: Zod
- **File Upload**: Multer
- **Image Processing**: Sharp
- **Real-time**: Socket.io
- **Email**: Nodemailer
- **Scheduling**: node-cron

## Payment & External Services
- **Payment Processing**: Stripe
- **Cloud Storage**: AWS S3 (or Cloudinary)
- **Push Notifications**: Firebase Cloud Messaging
- **SMS**: Twilio (optional)

## DevOps & Tools
- **Package Manager**: pnpm
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky
- **Environment**: dotenv
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Vitest + React Testing Library

## Database Schema Overview

### User Types
1. **Normal Users** - Individual fitness tracking
2. **Trainers** - Client management + CRM
3. **Gyms** - Membership & facility management

### Core Entities
- Users (with role-based permissions)
- Exercises (with images, videos, custom variations)
- Workouts & Workout Plans
- Nutrition (foods, meals, tracking)
- Body Measurements
- Progress Photos
- Personal Records
- Challenges & Achievements
- Social Feed (posts, likes, comments)
- Trainer-Client relationships
- Gym memberships
- Bookings & Schedules
- Payments & Subscriptions
- Messages & Notifications

## Project Structure
```
gym-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── layouts/       # Layout components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── store/         # Zustand stores
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   ├── utils/         # Utility functions
│   │   └── assets/        # Images, fonts, etc.
│   ├── public/
│   └── package.json
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── services/      # Business logic
│   │   ├── middlewares/   # Express middlewares
│   │   ├── routes/        # API routes
│   │   ├── models/        # Prisma models
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript types
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   └── package.json
│
├── shared/                 # Shared types and utilities
│   └── types/
│
└── README.md
```
