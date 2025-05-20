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
uvicorn app.main:app --port 8000
```

---

## Frontend

### 🚀 Run Locally

#### 1. Install dependencies
```bash
cd student-frontend-ssr
npm install
```

#### 2. Create a `.env` file with the backend service URL
```env
BACKEND_URL=http://localhost:8000
```

#### 3. Build the project
```bash
npm run build
```

#### 4. Run the frontend
```bash
npm start
```

#### 5. Access
Open the url in your browser
```bash
http://localhost:8000
```

**Note: If frontend failed to make connections to backend using localhost, try to change the backend url .env from localhost to ip or other endpoint.** 

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

#### 1. Build the Docker image
```bash
cd student-frontend-ssr
docker build -t student-frontend:v1 .
```

#### 2. Create a `.env` file with the backend service URL
```env
BACKEND_URL=http://localhost:8000
```

#### 3. Run the container
```bash
docker run --env-file .env -d -p 5173:5173 student-frontend:v1
```

#### 4. Access
Open the url in your browser
```bash
http://localhost:5173
```

**Note: If frontend failed to make connections to backend using localhost, try to change the backend url .env from localhost to ip or other endpoint.**  

---

### 🐳 Run with Docker Compose

#### 1. Build both images (if not prebuilt)
```bash
docker compose build
```

This will build and run both backend and frontend containers together.

#### 2. Start the services
```bash
docker compose up
```

#### 3. Access
Open the url in your browser
```bash
http://localhost:5173
```

**Note: If frontend failed to make connections to backend using localhost, try to change the backend url inside docker-compose.yml from localhost to ip or other endpoint.** 