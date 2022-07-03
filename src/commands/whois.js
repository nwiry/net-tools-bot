const { Client } = require("discord.js");
const { isBlank } = require("../utils/tools");
const WhoisIP = require("./whois/ip");

/**
 * 
 * @param {Client} client 
 * @param {MessageChannel} message 
 */

const availableWhoisList = "\nwhois ip <ip>\n";

const WhoisCommand = (client, message, args) => {

    try {

        if (typeof args[0] === undefined || isBlank(args[0])) return message.channel.send(
            `🧐 | Invalid command! Enter an action to run the whois! Ex:` + "```\n" + `whois ip 8.8.8.8` + "```"
        );

        switch (args[0]) {
            case "ip":
                return WhoisIP(client, message, args);
                break;
            default:
                message.channel.send(`🤷 | <@${message.author.id}>, the whois command is invalid!\n\nBelow is a list of whois commands available for use:`
                    + "```\n" + availableWhoisList + "```"
                ).then(msg => {
                    setTimeout(() => { msg.delete(); /*message.delete();*/ }, 5000);
                }).catch(() => { });
                break;
        }

    } catch (error) {
        console.log(error);
        message.reply(":x: | An internal error occurred during your request. Try again in a few minutes!");
    }

}

module.exports = WhoisCommand;