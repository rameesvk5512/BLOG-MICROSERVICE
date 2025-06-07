import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './utils/db.js';
import blogRoutes from './routes/blog.js'
import { createClient } from 'redis';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

export const redisClient= createClient({
    url:process.env.REDIS_URL
})
redisClient.connect().then(()=>console.log("conected to redis")
).catch(console.error)


app.use("/api/v1",blogRoutes)


sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Sequelize sync error:', err);
});
