

import  amqp from 'amqplib'

let channel=amqp.channel
export const connectTORabitMQ=async()=>{
    try {
         const connection = await amqp.connect({
      protocol: "amqp",
      hostname: "localhost",
      port: 5672,
      username: "guest",
      password: "guest",
      vhost: "/"
    });
        channel =connection.createChannel()
        console.log("successfully connected to rabitMQ");
        
    } catch (error) {
         console.log("failed to connected  rabitMQ",error);
    }
}