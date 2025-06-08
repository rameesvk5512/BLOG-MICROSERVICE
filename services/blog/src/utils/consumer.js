import amqp from 'amqplib';
import { redisClient } from './reddisClient.js';
import { sequelize } from './db.js';
import { QueryTypes } from "sequelize";
let channel;


export const startCacheConsumer = async () => {
  try {
  
    const connection = await amqp.connect({
      protocol: "amqp",
      hostname: "localhost",
      port: 5672,
      username: "guest",
      password: "guest",
      vhost: "/",
    });

 
    channel = await connection.createChannel();
    console.log("✅ Connected to RabbitMQ");
const queueName = "cache_invalidation";


    await channel.assertQueue(queueName, { durable: true });
    console.log("📥 Blog service cache consumer started");


    channel.consume(queueName, async (msg) => {
      if (!msg) return;

      try {
        const content = JSON.parse(msg.content.toString());
        console.log("📨 Received cache invalidation message:", content);


        if (content.action === "invalidatecache") {
          for (const pattern of content.keys) {
            const keys = await redisClient.keys(pattern);
            console.log("pattern",pattern);
            
console.log("keys lrngth",keys);

            if (keys.length > 0) {
              await redisClient.del(keys);
              console.log(`🗑️ Invalidated ${keys.length} Redis keys matching: "${pattern}"`);

              const searchQuery = ""; 
              const category = "";
              const cacheKey = `blogs:${searchQuery}:${category}`;

             console.log("cccccache kkey",cacheKey);
             
           const blogs = await sequelize.query('SELECT * FROM blogs', {
  type: QueryTypes.SELECT,
});

              await redisClient.set(cacheKey, JSON.stringify(blogs), {
                EX: 3600, 
              });

              console.log("🛠️ Rebuilt cache for:", cacheKey);
            }
          }
        }

        channel.ack(msg); 
      } catch (error) {
        console.error("❌ Error processing cache invalidation:", error);
        channel.nack(msg, false, true); 
      }
    });

  } catch (error) {
    console.error("❌ Failed to start RabbitMQ consumer:", error);
  }
};
