import amqp from 'amqplib';

let channel; 

export const connectTORabitMQ = async () => {
  try {
    const connection = await amqp.connect({
      protocol: "amqp",
      hostname: "localhost",
      port: 5672,
      username: "guest",
      password: "guest",
      vhost: "/"
    });


    channel = await connection.createChannel();
    console.log("✅ Successfully connected to RabbitMQ");
  } catch (error) {
    console.error("❌ Failed to connect to RabbitMQ:", error);
  }
};

export const publishToQueue = async (queueName, message) => {
  if (!channel) {
    console.error("❌ RabbitMQ channel not connected");
    return;
  }

  await channel.assertQueue(queueName, { durable: true });
  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });

  console.log(`📤 Message sent to queue "${queueName}"`);
};

export const invalidateCacheJob = async (cacheKeys) => {
  try {
    const message = {
      action: "invalidatecache",
      keys: cacheKeys,
    };
    await publishToQueue("cache_invalidation", message);
  } catch (error) {
    console.error("❌ Failed to publish cache invalidation job:", error);
  }
};
