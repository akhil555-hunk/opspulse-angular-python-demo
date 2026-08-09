# OpsPulse

Angular + Python Flask/Gunicorn + Nginx + Docker Compose demo.

## Build and run

docker compose build
docker compose up -d
docker compose ps

Open:

http://YOUR_VM_IP:8082

The browser reaches Nginx on port 8082. Nginx serves Angular and proxies /api/ to the Python backend on the Docker network.
