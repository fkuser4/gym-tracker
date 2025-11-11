# 🏋️ Gym Tracker - Comprehensive Fitness Tracking Platform

A modern, full-stack web application for fitness tracking with support for three user types: **Individual Users**, **Personal Trainers**, and **Gym Administrators**. Built with Origin-inspired UI/UX design principles.

## ✨ Features Overview

### 👤 For Individual Users

#### Workout Management
- **Plan and track workouts** with detailed exercise logging
- **Pre-built workout plans** and custom program creation
- **Exercise database** with images and video demonstrations
- **Daily workout sessions** with real-time tracking
- **Weight, reps, and sets tracking** for each exercise
- **Rest timer** between sets
- **Automatic progress recommendations**

#### Nutrition Tracking
- **Daily food diary** with meal logging
- **Calorie and macro tracking** (protein, carbs, fats)
- **Food database** with custom food creation
- **Barcode scanner** for quick food entry
- **Water intake tracking**
- **Daily nutrition goals**

#### Progress Analytics
- **Body measurements tracking** (weight, body fat %, muscle measurements)
- **Visual progress charts** (strength, attendance, body metrics)
- **Progress photos** with reminders and upload option
- **Personal records** with automatic detection and celebration
- **Workout summaries** (weekly, monthly, yearly)

#### Social Features
- **Social feed** - see friends' workouts
- **Like and comment** on posts
- **Challenges** (e.g., "Complete 10 workouts this month")
- **Achievements** (e.g., "First workout", "1000kg total lifted")
- **Leaderboards** and virtual progress tracking

### 👨‍💼 For Personal Trainers

#### Client Management (CRM)
- **Client database** with detailed profiles
- **Digital questionnaires** for client onboarding
- **Client segmentation** for group messaging and program delivery
- **Track client compliance** with dashboard overview

#### Program Creation
- **Custom workout programs** with drag-and-drop exercise builder
- **Exercise library** with custom demonstration videos
- **Workout and nutrition plan assignment** to clients
- **Client goal setting** (macros and calories)
- **Input workouts and meals on behalf of clients**

#### Progress Monitoring
- **Compliance dashboard** - see who's completed workouts and logged meals
- **Real-time workout tracking** during client sessions
- **Form analysis** (when clients upload videos)
- **Centralized client measurements** and progress tracking

#### Communication
- **1-on-1 chat** with clients
- **Group messaging** for multiple clients
- **Automated message templates**

#### Business Management
- **Payment and invoicing** via PayPal/Stripe integration
- **Package management** (training plans, monthly coaching, per-session)
- **Booking system** for 1-on-1 and group sessions
- **Schedule management** for private and group training

### 🏢 For Gym Administrators

#### Membership Management
- **Digital membership cards** with QR codes for check-in
- **API integration** for custom check-in systems
- **Membership purchase and renewal**
- **Member and trainer profiles** (with or without app access)
- **Check-in tracking** and attendance analytics

#### Class and Resource Management
- **Group and private class schedules**
- **Booking system** with waitlists
- **Resource reservation** (equipment, rooms, etc.)
- **Cancellation management**

#### Communication
- **Push notifications** and email/SMS automation
- **News feed** with member interactions
- **Polls** for feedback on changes
- **Contact and support system**

#### Member Engagement
- **Real-time gym capacity tracking**
- **Challenges** and competitions
- **Referral program**
- **Points-based reward system** (like McDonald's)

#### Operations
- **Staff scheduling** for employees, trainers, and activities
- **Staff management tools**

#### Analytics & Reporting
- **Revenue reports** (daily/weekly/monthly by membership type and product)
- **Capacity analytics** (popular classes, peak times)
- **Member retention rate** tracking
- **Trainer performance** reports
- **Automated billing** and payment processing

## 🎨 Design Philosophy

This application is built with **Origin-inspired UI/UX**:

- ✅ **Clean, minimalist interface**
- ✅ **Card-based design** for organized information
- ✅ **Excellent dark mode** support (auto-switching)
- ✅ **Smooth navigation** with intuitive flows
- ✅ **Calm, non-overwhelming** interface
- ✅ **Data visualization** with charts and graphs
- ✅ **Customizable dashboard** for personalized experience

## 🛠️ Tech Stack

### Frontend
- **React 18** + **TypeScript** for type-safe UI development
- **Vite** for lightning-fast development
- **Tailwind CSS** for Origin-inspired styling
- **Zustand** for state management
- **React Router** for navigation
- **Recharts** for analytics visualization
- **React Hook Form** + **Zod** for form validation

### Backend
- **Node.js 20+** + **Express** + **TypeScript**
- **Prisma ORM** with **PostgreSQL** database
- **JWT** authentication with bcrypt
- **Socket.io** for real-time features
- **Multer** + **Sharp** for image processing
- **Stripe** for payment processing

### Infrastructure
- **PostgreSQL** for relational data
- **AWS S3** or Cloudinary for file storage
- **Firebase** for push notifications
- **Nodemailer** for email notifications

## 📁 Project Structure

```
gym-tracker/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Base UI components (Button, Card, etc.)
│   │   │   ├── common/       # Shared components
│   │   │   ├── user/         # User-specific components
│   │   │   ├── trainer/      # Trainer-specific components
│   │   │   └── gym/          # Gym-specific components
│   │   ├── pages/            # Page components
│   │   ├── layouts/          # Layout components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── store/            # Zustand stores
│   │   ├── services/         # API services
│   │   ├── types/            # TypeScript types
│   │   └── utils/            # Utility functions
│   └── package.json
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── controllers/      # Route controllers
│   │   ├── services/         # Business logic
│   │   ├── middlewares/      # Express middlewares
│   │   ├── routes/           # API routes
│   │   ├── config/           # Configuration files
│   │   ├── utils/            # Utility functions
│   │   └── types/            # TypeScript types
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   └── package.json
│
└── shared/                     # Shared types between client/server
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+**
- **PostgreSQL 14+**
- **npm** or **pnpm**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd gym-tracker
```

### 2. Set Up the Database

```bash
# Install PostgreSQL if not already installed
# Create a new database
createdb gym_tracker

# Or using psql
psql -U postgres
CREATE DATABASE gym_tracker;
\q
```

### 3. Set Up the Backend

```bash
cd server

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your database credentials
# Update DATABASE_URL with your PostgreSQL connection string

# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start the development server
npm run dev
```

The backend will be running at `http://localhost:5000`

### 4. Set Up the Frontend

```bash
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be running at `http://localhost:5173`

### 5. Open Your Browser

Navigate to `http://localhost:5173` to see the application.

## 📊 Database Schema

The application uses a comprehensive PostgreSQL database with Prisma ORM. Key models include:

### User Management
- `User` - Base user model with role-based access (USER, TRAINER, GYM_ADMIN)
- `UserProfile` - User preferences and fitness goals
- `TrainerProfile` - Trainer-specific information
- `TrainerClient` - Trainer-client relationships

### Fitness Tracking
- `Exercise` - Exercise library with media
- `WorkoutPlan` - Structured workout programs
- `Workout` - Individual workout sessions
- `WorkoutExercise` - Exercises within a workout
- `WorkoutSet` - Individual sets with reps, weight, etc.
- `PersonalRecord` - User PRs

### Nutrition
- `Food` - Food database with nutritional info
- `Meal` - User meals
- `MealFood` - Foods within a meal
- `NutritionLog` - Daily nutrition summary

### Progress
- `BodyMeasurement` - Weight and body measurements
- `ProgressPhoto` - Progress photos with metadata

### Social
- `Post` - Social feed posts
- `PostLike` - Post likes
- `Comment` - Post comments
- `Achievement` - Achievement definitions
- `UserAchievement` - User-earned achievements
- `Challenge` - Fitness challenges

### Gym Management
- `Gym` - Gym facilities
- `MembershipPlan` - Membership packages
- `GymMembership` - User memberships
- `GymCheckin` - Check-in tracking
- `GymClass` - Group classes
- `Booking` - Class bookings
- `GymAnnouncement` - Gym announcements

### Communication
- `Message` - Direct messages
- `Notification` - System notifications

### Payments
- `Payment` - Payment records
- `Subscription` - Subscription management

## 🎯 API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token

### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update current user profile
- `GET /api/users/:id` - Get user by ID

### Workouts
- `GET /api/workouts` - List user workouts
- `POST /api/workouts` - Create workout
- `GET /api/workouts/:id` - Get workout details
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Exercises
- `GET /api/exercises` - List exercises
- `POST /api/exercises` - Create custom exercise
- `GET /api/exercises/:id` - Get exercise details

### Nutrition
- `GET /api/nutrition/foods` - List foods
- `POST /api/nutrition/foods` - Add custom food
- `GET /api/nutrition/meals` - List user meals
- `POST /api/nutrition/meals` - Log meal
- `GET /api/nutrition/logs` - Get nutrition logs

### Progress
- `GET /api/progress/measurements` - Get body measurements
- `POST /api/progress/measurements` - Log measurement
- `GET /api/progress/photos` - Get progress photos
- `POST /api/progress/photos` - Upload progress photo
- `GET /api/progress/records` - Get personal records

### Social
- `GET /api/social/feed` - Get social feed
- `POST /api/social/posts` - Create post
- `POST /api/social/posts/:id/like` - Like post
- `POST /api/social/posts/:id/comment` - Comment on post

### Trainers
- `GET /api/trainers/clients` - List trainer clients
- `POST /api/trainers/clients` - Add client
- `GET /api/trainers/clients/:id` - Get client details
- `POST /api/trainers/programs` - Create training program
- `POST /api/trainers/programs/:id/assign` - Assign program to client

### Gyms
- `GET /api/gyms/:id/classes` - List gym classes
- `POST /api/gyms/:id/checkin` - Check in to gym
- `GET /api/gyms/:id/members` - List gym members
- `POST /api/gyms/:id/bookings` - Book class

## 🔐 Authentication

The application uses JWT-based authentication:

1. User registers or logs in
2. Server generates JWT token
3. Client stores token in localStorage
4. Client includes token in Authorization header for protected routes
5. Server verifies token on each request

## 🎨 UI Components

The application includes a comprehensive set of Origin-inspired UI components:

- **Card** - Container component with hover effects
- **Button** - Multiple variants (primary, secondary, ghost)
- **Input** - Form input with validation states
- **Badge** - Status indicators
- **StatCard** - Dashboard statistics with trends
- **Charts** - Data visualization components

## 🌙 Dark Mode

Dark mode is fully supported and can be:
- Manually toggled by the user
- Set to follow system preferences
- Persisted in localStorage

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔄 Real-time Features

Using Socket.io for:
- Live workout tracking
- Real-time messaging
- Instant notifications
- Live gym capacity updates

## 💳 Payment Integration

Stripe integration for:
- Subscription management
- One-time payments
- Automated billing
- Invoice generation

## 📧 Notifications

Multi-channel notifications:
- **Email** - via Nodemailer
- **Push** - via Firebase Cloud Messaging
- **SMS** - via Twilio (optional)
- **In-app** - real-time notifications

## 🚦 Current Status

✅ **Completed:**
- Project structure setup
- Database schema design
- UI design system (Origin-inspired)
- Basic dashboard layout
- Component library

🚧 **In Progress:**
- Authentication system
- API endpoint implementation

📋 **Planned:**
- Core user features (workouts, nutrition)
- Trainer CRM features
- Gym management features
- Social features
- Payment integration

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Create reusable components

### Database Migrations
```bash
# Create a new migration
npm run prisma:migrate

# Reset database (dev only)
npx prisma migrate reset
```

### Testing
```bash
# Run tests (when implemented)
npm test
```

## 🤝 Contributing

This is a comprehensive fitness tracking platform designed to serve individuals, trainers, and gyms. Contributions are welcome!

## 📄 License

ISC

## 🙏 Acknowledgments

- **Origin Financial** - For the UI/UX design inspiration
- **Prisma** - For the excellent ORM
- **Tailwind CSS** - For the utility-first CSS framework

---

**Note:** This is an active development project. Features are being implemented incrementally. Check the todo list for current progress.
