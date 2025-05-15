# Students Manager

FRONT-END AND BACK-END DEMO, REST API, USING POSTGRESQL, WHATEVER IT IS.

---

## Backend

### 🚀 Run Locally

#### 1. Install dependencies
```bash
cd student-backend
pip install -r requirements.txt
```

#### 2. Create a `.env` file for PostgreSQL
```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

#### 3. Run the backend
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

---

### 🐳 Run with Docker

#### 1. Build the Docker image
```bash
cd student-backend
docker build -t student-backend:v1 .
```

#### 2. Create a `.env` file for PostgreSQL
```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

#### 3. Run the container
```bash
docker run --env-file .env -d -p 8000:8000 student-backend:v1
```

---

## Frontend

### 🚀 Run Locally

#### 1. Install dependencies
```bash
cd student-frontend
npm install
```

#### 2. Create a `.env` file with the backend service URL
```env
VITE_API_BASE_URL=http://localhost:8000
```
**Note: If localhost does not work, try to change it to your backend ip or url.** 

#### 3. Run the frontend
```bash
npx vite --host 0.0.0.0 --port 5173
```

---

### 🐳 Run with Docker

#### 1. Build the Docker image
```bash
cd student-frontend
docker build -t student-frontend:v1 .
```

#### 2. Create a `.env` file with the backend service URL
```env
VITE_API_BASE_URL=http://localhost:8000
```
**Note: If localhost does not work, try to change it to your backend ip or url.** 

#### 3. Run the container
```bash
docker run --env-file .env -d -p 5173:5173 student-frontend:v1
```

---

### 🐳 Run Backend and Frontend with Docker Compose

#### 1. Build both images (if not prebuilt)
```bash
docker compose build
```

#### 2. Start the services
```bash
docker compose up
```

This will build and run both backend and frontend containers together, handling networking and dependencies automatically.

**Note: If localhost does not work, try to change backend url inside docker-compose.yml it to your backend ip or url.**

---

### POST A DATA

```bash
curl -X POST "http://localhost:8000/students/" \
-H "Content-Type: application/json" \
-d '{"name": "Kevin", "age": 21, "email": "kevin@example.com"}'
```
