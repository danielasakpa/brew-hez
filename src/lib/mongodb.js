import { MongoClient } from "mongodb";

const dev = process.env.NODE_ENV === "development";

// Use local Mongo in development, remote in production
const uri = dev ? process.env.LOCAL_MONGODB_URI : process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!uri) {
  throw new Error("❌ MongoDB connection string is not defined in environment variables");
}

let client;
let clientPromise;

if (dev) {
  // In dev, use global variable to avoid multiple connections with HMR
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect()
      .then(() => {
        console.log("✅ Connected to Local MongoDB (Development)");
        return client;
      })
      .catch((err) => {
        console.error("❌ Local MongoDB connection error:", err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, don't use global
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then(() => {
      console.log("✅ Connected to MongoDB (Production)");
      return client;
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      throw err;
    });
}

export default clientPromise;
