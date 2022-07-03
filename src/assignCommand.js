const { Message, Client } = require("discord.js");
const Ping = require("./commands/ping");
const settings = require("../src/config/settings.json");
const { isBlank } = require("./utils/tools");
const WhoisCommand = require("./commands/whois");

/**
 * 
 * @param {Client} client 
 * @param {*} command 
 * @param {*} args 
 * @param {Message} message
 */
const assignCommand = (client, command, args, message) => {

    if (!isBlank(settings.BOT_ENABLED_CHANNEL) && command != "setup") if (message.channel.id != settings.BOT_ENABLED_CHANNEL) return;

    switch (command) {
        case "ping":
            return Ping(client, message);
            break;
        case "whois":
            return WhoisCommand(client, message, args);
            break;
        default:
            message.channel.send(`🤷 | <@${message.author.id}>, the given command does not exist!`).then(msg => {
                setTimeout(() => { msg.delete(); /*message.delete();*/ }, 5000);
            }).catch(() => { });
            break;
    }
}

module.exports = {
    assignCommand
}