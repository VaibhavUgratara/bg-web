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


### 3. Access Mongo Express
Open your browser and go to [http://localhost:8081](http://localhost:8081) to access Mongo Express. 

username: admin 

password: pass

### 4. Stop and Remove Containers
To stop and remove the containers, run:

```bash
docker stop mongodb mongo-express
docker rm mongodb mongo-express
```
### 5. To run the server
```bash
npm i
cd src/
npx ts-node index.ts
```
