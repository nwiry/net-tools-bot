const Discord = require("discord.js");
const { assignCommand } = require("./src/assignCommand");
const config = require("./src/config/settings.json");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendStatus(200)
})
app.listen(process.pid)
console.log("Server started at port: " + process.pid);
console.log("http://localhost:" + process.pid);

const prefix = config.BOT_PREFIX;

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

/*
client.on("ready", () => {
    client.user.setActivity(`this won't appear in the bot's custom status!`, {type: 4})
})*/

client.on("messageCreate", function (message) {

    if (message.content.startsWith(prefix)) {
        let command = message.content.split(" ");
        return assignCommand(client, (command.shift().toLowerCase()).replace(prefix, ""), command, message);
    }
    return;
});

client.login(config.BOT_TOKEN);