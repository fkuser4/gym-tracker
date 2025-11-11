# 🚀 Quick Setup Guide - Gym Tracker

This guide will help you get the Gym Tracker application up and running on your local machine.

## Prerequisites Checklist

Before you begin, ensure you have the following installed:

- [ ] **Node.js 20+** - [Download here](https://nodejs.org/)
- [ ] **PostgreSQL 14+** - [Download here](https://www.postgresql.org/download/)
- [ ] **Git** - [Download here](https://git-scm.com/downloads)
- [ ] A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Verify Prerequisites

```bash
# Check Node.js version (should be 20+)
node --version

# Check npm version
npm --version

# Check PostgreSQL version
psql --version

# Check Git version
git --version
```

### 2. Clone the Repository

```bash
# Clone the repository
git clone <your-repo-url>
cd gym-tracker
```

### 3. Database Setup

#### Option A: Using psql command line

```bash
# Connect to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE gym_tracker;

# Verify the database was created
\l

# Exit psql
\q
```

#### Option B: Using createdb command

```bash
createdb gym_tracker
```

### 4. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies (this may take a few minutes)
npm install

# Copy environment file
cp .env.example .env

# Open .env in your editor and update the DATABASE_URL
# Example: DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/gym_tracker?schema=public"
nano .env  # or use your preferred editor

# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# If prompted, enter a migration name like "initial_setup"

# Start the backend server
npm run dev
```

You should see:
```
🚀 Server is running!

Environment: development
Port: 5000
API: http://localhost:5000/api
Health: http://localhost:5000/health
```

Keep this terminal open and running.

### 5. Frontend Setup

Open a **new terminal** window/tab:

```bash
# Navigate to client directory from project root
cd gym-tracker/client

# Install dependencies
npm install

# Start the development server
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 6. Access the Application

Open your web browser and navigate to:
```
http://localhost:5173
```

You should see the Gym Tracker dashboard with the Origin-inspired UI!

## Troubleshooting

### PostgreSQL Connection Issues

**Problem:** `Error: connect ECONNREFUSED ::1:5432`

**Solution:**
1. Ensure PostgreSQL is running:
   ```bash
   # On macOS with Homebrew
   brew services start postgresql

   # On Ubuntu/Debian
   sudo systemctl start postgresql

   # On Windows, start PostgreSQL service from Services
   ```

2. Verify your DATABASE_URL in `server/.env` is correct
3. Check PostgreSQL is listening on port 5432:
   ```bash
   psql -U postgres -h localhost -p 5432
   ```

### Port Already in Use

**Problem:** `Port 5000 or 5173 is already in use`

**Solution:**
1. Find and kill the process using the port:
   ```bash
   # On macOS/Linux
   lsof -ti:5000 | xargs kill
   lsof -ti:5173 | xargs kill

   # On Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   ```

2. Or change the port in the configuration files

### Prisma Migration Issues

**Problem:** Migration fails or database is out of sync

**Solution:**
```bash
cd server

# Reset the database (WARNING: This will delete all data)
npx prisma migrate reset

# Or force push the schema
npx prisma db push --force-reset
```

### Module Not Found Errors

**Problem:** `Error: Cannot find module 'xyz'`

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Testing the Setup

### 1. Test Backend API

Open a new terminal and run:

```bash
# Test health endpoint
curl http://localhost:5000/health

# Expected response:
# {"status":"ok","timestamp":"...","environment":"development"}

# Test API endpoint
curl http://localhost:5000/api

# Expected response:
# {"message":"Gym Tracker API","version":"1.0.0","docs":"/api/docs"}
```

### 2. Test Frontend

1. Open `http://localhost:5173` in your browser
2. You should see:
   - A dark/light mode toggle that works
   - A dashboard with sample statistics
   - A responsive sidebar navigation
   - Cards with smooth animations

### 3. Test Dark Mode

1. Click the moon/sun icon in the top right corner
2. The theme should smoothly transition between light and dark modes
3. Refresh the page - your theme preference should be saved

## Optional: Database Management Tools

### Prisma Studio

Prisma Studio provides a visual interface to view and edit your database:

```bash
cd server
npm run prisma:studio
```

This will open a browser window at `http://localhost:5555` where you can:
- View all database tables
- Add/edit/delete records
- Browse relationships

### pgAdmin (Alternative)

You can also use [pgAdmin](https://www.pgadmin.org/) for more advanced database management.

## Next Steps

Now that your development environment is set up, you can:

1. **Explore the codebase:**
   - Check out `client/src/components/ui/` for reusable components
   - Review `server/prisma/schema.prisma` for the database structure
   - Look at `client/src/pages/Dashboard.tsx` for the main dashboard

2. **Start developing:**
   - Implement authentication (next major feature)
   - Create workout tracking pages
   - Build nutrition logging features

3. **Read the documentation:**
   - See `README.md` for comprehensive feature list
   - Check `TECH_STACK.md` for technology decisions

## Development Workflow

### Making Changes

1. **Frontend changes:**
   - Edit files in `client/src/`
   - Vite will auto-reload the browser

2. **Backend changes:**
   - Edit files in `server/src/`
   - Nodemon will auto-restart the server

3. **Database schema changes:**
   ```bash
   cd server
   # Edit prisma/schema.prisma
   npm run prisma:migrate
   ```

### Stopping the Servers

To stop the development servers:
- Press `Ctrl + C` in each terminal window

### Restarting

```bash
# Backend
cd server && npm run dev

# Frontend (in a new terminal)
cd client && npm run dev
```

## Environment Variables

### Backend (.env)

Key variables you may need to configure:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/gym_tracker"

# JWT Secret (change in production!)
JWT_SECRET="your-super-secret-jwt-key"

# CORS (frontend URL)
CORS_ORIGIN="http://localhost:5173"

# Optional: AWS S3 for file uploads
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_S3_BUCKET=""

# Optional: Stripe for payments
STRIPE_SECRET_KEY=""

# Optional: Email notifications
EMAIL_USER=""
EMAIL_PASSWORD=""
```

## Getting Help

If you encounter issues not covered here:

1. Check the main `README.md` for more detailed information
2. Review the terminal output for error messages
3. Check that all services (PostgreSQL) are running
4. Verify all dependencies are installed correctly

## Success Checklist

- [ ] PostgreSQL is installed and running
- [ ] Database `gym_tracker` is created
- [ ] Backend server is running on port 5000
- [ ] Frontend is running on port 5173
- [ ] Can access the dashboard at `http://localhost:5173`
- [ ] Dark mode toggle works
- [ ] API health check returns successful response
- [ ] No error messages in terminal outputs

Congratulations! You're ready to start developing! 🎉
