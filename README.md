# Docker Take-Home Assignment

A simple Node.js/Express app with 2 REST endpoints, containerised with Docker.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` |Returns Hello world,Docker app is running |
| GET | `/greet/:name` | Returns a personalised greeting |

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Node.js 18+ (optional, for local dev)

## Running with Docker

```bash
# 1. Clone the repo
git clone https://github.com/Adaobilynda1234/SCA-docker-app.git
cd docker-app

# 2. Build the image
docker build -t docker-app .

# 3. Run the container
docker run -p 3000:3000 docker-app
```

App will be available at http://localhost:3000

Second endpoint will be available at http://localhost:3000/greet/{name}

## Screenshots

### Building the image
![docker build](./screenshots/docker-build-sc.png)

### Running the container
![docker run](./screenshots/docker-run.png)

### Testing the endpoint(http://localhost:3000)
![endpoints](./screenshots/docker-runing-browser.png)

### Testing the endpoint(http://localhost:3000/greet/{name})
![endpoints](./screenshots/docker-runing-browser-end-point.png)

## Project Structure

```
docker-app/
├── screenshots     # pictures evidences of running docker 
├── index.js        # Express app with 2 endpoints
├── Dockerfile      # Container configuration
├── .dockerignore   # Files excluded from Docker build
├── .gitignore      #files excluded from git 
├── package-lock-json
├── package.json
└── README.md
```