const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("u!");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity(`u!help | ${bot.guilds.size} serveurs`)
});

bot.login(process.env.BOT_TOKEN);

