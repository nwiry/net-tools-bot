const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {MessageChannel} message 
 */
const Ping = (client, message) => {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}

module.exports = Ping;