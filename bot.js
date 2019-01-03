const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530417825563803668")
setInterval(function() {
channel.send(`Cv Hmd Cc Bb Ss`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
