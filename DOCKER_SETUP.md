# Docker Setup - Gym Tracker

Quick Docker setup - sve se pokreće sa jednom komandom!

## Brzi Start (Quick Start)

```bash
# 1. Pokreni sve (backend, frontend, baza)
docker-compose up -d

# 2. Sačekaj 10-15 sekundi da sve krene

# 3. Otvori browser:
http://localhost:5173
```

That's it! 🎉

## Šta Docker Pokreće

- **PostgreSQL** database na portu 5432
- **Backend API** na portu 5000
- **Frontend** na portu 5173

## Korisne Komande

```bash
# Pokreni sve
docker-compose up -d

# Zaustavi sve
docker-compose down

# Vidi logove
docker-compose logs -f

# Vidi samo backend logove
docker-compose logs -f backend

# Vidi samo frontend logove
docker-compose logs -f frontend

# Restartuj sve
docker-compose restart

# Rebuild ako izmeniš kod
docker-compose up -d --build

# Obriši sve (i bazu!) - fresh start
docker-compose down -v
```

## Pristup Bazi

Ako hoćeš da se konektuješ na bazu:

```bash
# Uđi u PostgreSQL container
docker-compose exec db psql -U gymtracker -d gym_tracker

# Ili koristi DBeaver/pgAdmin sa:
Host: localhost
Port: 5432
Database: gym_tracker
Username: gymtracker
Password: gymtracker123
```

## Prisma Komande (Migracije)

```bash
# Generiši Prisma klijenta
docker-compose exec backend npm run prisma:generate

# Pokreni migracije
docker-compose exec backend npm run prisma:migrate

# Otvori Prisma Studio (pregled baze)
docker-compose exec backend npm run prisma:studio
# Onda otvori: http://localhost:5555
```

## Troubleshooting

### Problem: Port već zauzet

Ako dobiješ error da je port zauzet:

```bash
# Promeni portove u docker-compose.yml:
# Frontend: 5173 -> 3000
# Backend: 5000 -> 4000
# Database: 5432 -> 5433
```

### Problem: Container se crashuje

```bash
# Vidi šta je problem
docker-compose logs backend
docker-compose logs frontend

# Rebuild sve
docker-compose down
docker-compose up -d --build
```

### Problem: Baza ne radi

```bash
# Proveri da li je baza spremna
docker-compose exec db psql -U gymtracker -d gym_tracker -c "SELECT 1;"

# Ako ne radi, restartuj
docker-compose restart db
```

## Development Mode

Trenutno je podešeno za development:
- ✅ Hot reload za frontend (Vite)
- ✅ Auto-restart za backend (nodemon)
- ✅ Shared volumes - izmene odmah vidljive
- ✅ Prisma Studio dostupan

## Production Build

Za production deployment (kasnije):

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Brzi Reset

Ako nešto zajebe i hoćeš da počneš iz početka:

```bash
# Obriši sve (baza, containeri, volumes)
docker-compose down -v

# Rebuild sve iznova
docker-compose up -d --build

# Sačekaj da backend pokrene migracije
docker-compose logs -f backend
```

## Provera da Radi

1. **Backend health check:**
   ```bash
   curl http://localhost:5000/health
   ```
   Trebalo bi da vidiš: `{"status":"ok",...}`

2. **Frontend:**
   Otvori browser: http://localhost:5173

3. **Database:**
   ```bash
   docker-compose exec db psql -U gymtracker -d gym_tracker -c "SELECT NOW();"
   ```

## Sistem Requirements

- Docker Desktop instaliran
- 4GB RAM minimum (preporuka 8GB)
- 10GB disk space

## Čišćenje (Cleanup)

```bash
# Obriši sve Gym Tracker containere i volume-e
docker-compose down -v

# Obriši Docker images (oslobodi disk space)
docker system prune -a

# Obriši SVE (pazi - briše sve Docker stvari!)
docker system prune -a --volumes
```

---

**Pro tip:** Ostavi terminal otvoren sa `docker-compose logs -f` da vidiš šta se dešava u real-time!
