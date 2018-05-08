const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("u!");

client.on("ready", () => {
  
  console.log("Salut"); 
  client.user.setActivity(`u!help | ${client.guilds.size} serveurs`)
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
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

client.on("message", function(message) {
    if (message.author.equals(client.user)) return;
  
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
});

client.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

client.on('message', message => {

    if (message.content === prefix + "avatar") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici ton avatar")        
        .setColor("0xFF0000")
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .addField("Nom du serveur", message.guild.name)        
        .addField("Crée le :", message.guild.name)
        .addField("Crée par :", "Bientôt")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("© UltraGaming | Tous droits réservés.")
        .setColor("0x00FF00")
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "site") {
        var embed = new Discord.RichEmbed()
        .addField("Notre site", "Bientôt")        
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici la liste des commandes")
        .addField("u!help", "Affiche la liste des commandes")
        .addField("u!avatar", "Affiche ton avatar")
        .addField("u!info", "Affiche les informations du discord")
        .addField("u!ping", "Affiche la latence entre le bot et le serveur")
        .addField("u!site", "Affiche notre site")
        .addField("u!clear", "Staff » Clear 50 messages")
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("© UltraGaming | Tous droits réservés.")
        .setColor("0x2E9AFE")
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
    }
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Hey ${member}, bienvenue sur **UltraGaming** :tada::hugging: !`)
});

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté **UltraGaming**. Nous sommes ravis de t'avoir accueillis :cry:.`)
});

client.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', '★━𝓖𝓪𝓶𝒆𝓾𝓻𝓼━★');
    member.addRole(role)
})
