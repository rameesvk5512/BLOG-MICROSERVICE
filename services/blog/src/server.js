import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './utils/db.js';
import blogRoutes from './routes/blog.js'

import { startCacheConsumer } from './utils/consumer.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;



app.use("/api/v1",blogRoutes)


sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
  startCacheConsumer()
}).catch((err) => {
  console.error('❌ Sequelize sync error:', err);
});
