import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);
await client.connect(); // 🔥 IMPORTANT FIX
const db = client.db('livestock');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 
});