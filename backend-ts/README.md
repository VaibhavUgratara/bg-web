# 🐳 MongoDB + Mongo Express (Docker Setup)

This guide helps you set up **MongoDB** and **Mongo Express** locally using Docker — without Docker Compose.

---

## 📦 Requirements

- [Docker](https://www.docker.com/) installed

---

## 🛠️ Step-by-Step Setup

### 1. Start MongoDB Container

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=qwerty \
  mongo
```

### 2. Start Mongo Express Container
```bash
docker run -d \
  --name mongo-express \
  -p 8081:8081 \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
  -e ME_CONFIG_MONGODB_SERVER=mongodb \
  --link mongodb \
  mongo-express

```
