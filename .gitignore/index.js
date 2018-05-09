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

    if (message.content === prefix + "color") {
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
        .addField("Notre site", "Bientôt")        
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "color") {
        var embed = new Discord.RichEmbed()
        .setTitle(":small_blue_diamond: Voici comment écrire en couleur")
        .setDescription("↵ Signifie un retour à la ligne")
        .addField("` 00 Message [Enveloppé de base] `", "` 00 Message [Enveloppé de base] `")
        .addField("```Markdown ↵ # 01 Message [Markdown] ↵```", "```Markdown ↵ # 01 Message [Markdown] ↵```")
        .addField("```Css ↵ # 02 Message [Css] ↵```", "```Css ↵ # 02 Message [Css] ↵```")
        .addField("```Js ↵ # 03 Message [Js] ↵ ]```", "```Js ↵ # 03 Message [Js] ↵ ]```")
        .addField("```Diff ↵ - 04 Message [Diff] ↵```", "```Diff ↵ - 04 Message [Diff] ↵```")
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
