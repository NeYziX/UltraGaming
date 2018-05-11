const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("u!");

bot.on("ready", () => {
  
  console.log("Salut"); 
  bot.user.setActivity(`u!help | ${bot.guilds.size} serveurs`)
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Votre avatar",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")};
        
            var replys = [
                "Oui",
                "Non",
                "Je sais pas",
                "Peut-être"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :thinking:", tte)
            .addField("Réponse :kissing_heart:", reponse)
            message.channel.sendEmbed(bembed)
            break;           
            case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur")})}
            break;
            case "chat":
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'u-chat');
            if(!xo02) return message.reply("Le channel **u-chat** est introuvable")
            if(message.channel.name !== 'u-chat') return message.reply("Commande à effectuer dans **u-chat**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
            var embed = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("UltraGlobal Message")
            .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© UltraGaming | Tous droits réservés.")
            .setTimestamp()
          bot.channels.findAll('name', 'u-chat').map(channel => channel.send(embed))
          message.delete();
            break;
    }
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});

bot.on('message', message => {
    if (message.content === "Tu t'ennuis mon fils ?"){
        message.channel.sendMessage("Oui papa ! Je peux aller à la piscine ?");  
    }
});

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .addField("Nom du serveur", message.guild.name)        
        .addField("Crée le :", message.guild.createdAt)
        .addField("Crée par :", message.guild.owner)
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("© UltraGaming | Tous droits réservés.")
        .setColor("0x00FF00")
        .setTimestamp()
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "site") {
        var embed = new Discord.RichEmbed()
        .addField("Notre site", "http://ultragam1ng.000webhostapp.com")        
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "text") {
        var embed = new Discord.RichEmbed()
        .setTitle("Écriture custom :pencil2:")
        .setDescription("» signifie à la fin et au début du mot")
        .addField("*Italique*", "*»Italique")
        .addField("**Gras**", "**»Gras")
        .addField("***Italique gras***", "***»Italique gras")
        .addField("~~Barré~~", "~~»Barré")
        .addField("__Souligné__", "__»Souligné")
        .addField("__*Italique souligné*__", "__*»Italique souligné")
        .addField("__**Gras souligné**__", "__**»Gras souligné")
        .addField("__***Italique gras souligné***__", "__***»Italique gras souligné")
        .setFooter("© UltraGaming | Tous droits réservés.")
        .setColor("0x0000FF")
        .setTimestamp()
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici la liste des commandes")
        .addField("u!help", "Affiche la liste des commandes")
        .addField("u!avatar", "Affiche ton avatar")
        .addField("u!info", "Affiche les informations du discord")
        .addField("u!ping", "Affiche la latence entre le bot et le serveur")
        .addField("u!site", "Site de NeYziX")
        .addField("u!chat", "Chat relié avec tous les serveurs où je suis")
        .addField("u!8ball", "Pose une question au bot | Réponse en Oui ou Non")
        .addField("u!text", "Affiche comment avoir une écriture custom")
        .addField("u!clear", "Staff > Clear 50 messages")
        .setFooter("© UltraGaming | Tous droits réservés.")
        .setColor("0x2E9AFE")
        .setTimestamp()
    message.channel.sendEmbed(embed)
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Hey ${member}, bienvenue sur le serveur :tada::hugging: !`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté le serveur. Nous sommes ravis de t'avoir accueillis :cry:.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', '★━𝓖𝓪𝓶𝒆𝓾𝓻𝓼━★');
    member.addRole(role)
})
