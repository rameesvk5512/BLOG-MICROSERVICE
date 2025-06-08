import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import blogRoutes from './routes/blog.js'
import { connectTORabitMQ } from './utils/rabitMq.js';
dotenv.config();

const app = express();
connectTORabitMQ()
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use("/api/v1/blog",blogRoutes)


sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Sequelize sync error:', err);
});
