# Setup

### Backend

```bash
$ cd backend-test
$ cp .env.example .env
$ docker-compose up
# waiting for docker run all backend setup
# the backend run on port 8000, ensure that not conflict port when running backend
# backend api url: http://localhost:8000 
```

### Frontend

```bash
$ cd react-boilerplate
$ npm install
$ npm start
# the frontend run on port 3000, ensure that not conflict port when running frontend
# frontend app url: http://localhost:3000
```

