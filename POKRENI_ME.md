# 🚀 POKRENI ME - Gym Tracker

Sve što ti treba je **Docker** instaliran. Ništa više!

## Instalacija Dockera

### Windows/Mac
Preuzmi i instaliraj Docker Desktop:
- **Windows:** https://docs.docker.com/desktop/install/windows-install/
- **Mac:** https://docs.docker.com/desktop/install/mac-install/

### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

---

## Pokretanje Aplikacije (3 koraka)

### 1. Kloniraj repo (ako nisi već)
```bash
git clone <repo-url>
cd gym-tracker
```

### 2. Pokreni Docker
```bash
docker-compose up -d
```

**To je to!** Docker će automatski:
- ✅ Skinuti PostgreSQL bazu
- ✅ Instalirati sve dependencies
- ✅ Pokrenuti backend API
- ✅ Pokrenuti frontend
- ✅ Napraviti database migracije

### 3. Otvori u browseru
```
http://localhost:5173
```

Sačekaj 10-20 sekundi prvi put dok sve ne krene.

---

## Vidi Šta Se Dešava

```bash
# Prati logove u realnom vremenu
docker-compose logs -f

# Samo backend
docker-compose logs -f backend

# Samo frontend
docker-compose logs -f frontend

# Samo baza
docker-compose logs -f db
```

---

## Zaustavi Sve

```bash
docker-compose down
```

---

## Restartuj

```bash
docker-compose restart
```

---

## Fresh Start (Obriši SVE i počni ispočetka)

```bash
# Obriši sve (i bazu!)
docker-compose down -v

# Pokreni iznova
docker-compose up -d
```

---

## Provera da Radi

### Backend API
```bash
curl http://localhost:5000/health
```

Trebalo bi da vidiš:
```json
{"status":"ok","timestamp":"...","environment":"development"}
```

### Frontend
Otvori browser: http://localhost:5173

### Baza
```bash
docker-compose exec db psql -U gymtracker -d gym_tracker -c "SELECT NOW();"
```

---

## Prisma Studio (Pregled Baze)

```bash
docker-compose exec backend npm run prisma:studio
```

Onda otvori: http://localhost:5555

Ovde možeš videti sve tabele, dodavati podatke, itd.

---

## Korisni Trikovi

### Uđi u Backend Container
```bash
docker-compose exec backend sh
```

### Uđi u Bazu
```bash
docker-compose exec db psql -U gymtracker -d gym_tracker
```

### Rebuild Ako Izmeniš package.json
```bash
docker-compose up -d --build
```

### Vidi Sve Aktivne Containere
```bash
docker ps
```

### Zaustavi Sve i Obriši Images (Oslobodi prostor)
```bash
docker-compose down -v
docker system prune -a
```

---

## Problem: Port Zauzet?

Ako ti kaže da je port 5000, 5173 ili 5432 zauzet:

**Opcija 1:** Zaustavi šta god koristi taj port

**Opcija 2:** Promeni port u `docker-compose.yml`:
```yaml
ports:
  - "3000:5173"  # Koristi port 3000 umesto 5173
```

---

## Šta je Pokrenuto?

- **Frontend:** http://localhost:5173 (React aplikacija)
- **Backend API:** http://localhost:5000 (Express server)
- **Database:** localhost:5432 (PostgreSQL)
- **Prisma Studio:** http://localhost:5555 (kad ga pokreneš)

---

## Development Mode

- ✅ **Hot reload** - Frontend se automatski refreshuje kad izmeniš kod
- ✅ **Auto restart** - Backend se restartuje kad izmeniš kod
- ✅ **Live database** - Sve promene ostaju u bazi

Samo edituj fajlove i promene se odmah vide!

---

## Potrebno ti je Više Memorije?

Idi u Docker Desktop → Settings → Resources → Povećaj RAM na 4-8GB

---

## Greške?

### "Cannot connect to database"
```bash
# Proveri da li je baza spremna
docker-compose logs db

# Restartuj bazu
docker-compose restart db
```

### "Port already in use"
```bash
# Vidi ko koristi port
# Windows:
netstat -ano | findstr :5000

# Mac/Linux:
lsof -i :5000
```

### "Build failed"
```bash
# Obriši sve i pokreni iznova
docker-compose down -v
docker-compose up -d --build
```

---

## 🎉 That's It!

Kad pokreneš `docker-compose up -d`, sve radi! Ne trebaš instalirati:
- ❌ Node.js
- ❌ PostgreSQL
- ❌ npm packages
- ❌ Ništa!

Samo Docker! 🐳

---

**Pomoć?** Pogledaj detaljnije u `DOCKER_SETUP.md`
