const { default: axios } = require("axios");
const { Client } = require("discord.js");
const { isIP } = require("net");
const { isBlank } = require("../../utils/tools");

/**
 * 
 * @param {Client} client 
 * @param {MessageChannel} message 
 */
const WhoisIP = (client, message, args) => {

    try {

        if (typeof args[1] === undefined || isBlank(args[1]) || !isIP(args[1])) return message.channel.send(`🧐 | You need to enter a valid IP Address!`);

        axios.get("https://ipinfo.io/" + args[1].trim() + "/json")
            .then(function (response) {
                console.log(response.data);
                message.reply(`:white_check_mark: IP` + "`" + response.data.ip + "` Found!\n\n" + ":mag: Search Result:\n\n" +
                    `- Hostname: ` + "`" + response.data.hostname + "`" +
                    `\n- City: ` + "`" + response.data.city + "`" +
                    `\n- Region: ` + "`" + response.data.region + "`" +
                    `\n- Country: ` + "`" + response.data.country + "`" +
                    `\n- Location: ` + "`" + response.data.loc + "`" +
                    `\n- ISP / Organization: ` + "`" + response.data.org + "`" +
                    `\n- Postal code: ` + "`" + response.data.postal + "`" +
                    `\n- Timezone: ` + "`" + response.data.timezone + "`")
                //  message.channel.send("```" + JSON.stringify(response.data) + "```");
            })
            .catch(function (erro) {
                console.log(erro);
                message.reply(":x: | An error occurred while communicating with the API to get the data from this IP. Try again later!");
            })
    } catch (error) {
        message.reply(":x: | An internal error occurred during your request. Try again in a few minutes!");
    }

}

module.exports = WhoisIP;