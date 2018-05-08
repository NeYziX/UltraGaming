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
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro")
            message.channel.send("Je choisi le numéro " + roll + " !");
            break;
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
        
    }});

client.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === "u!hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('442630188136660992').send("Commande u!hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === "u!hlp") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**⇩ Liste des commandes ⇩: \n \n __Bientôt__**');
            }).catch(console.error);
        bot.channels.get('442630188136660992').send("Commande u!help utilisée par : " + message.author.username);
        }             
    }    
});

client.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

client.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .addField("Liste des commandes", message.guild.name)        
        .addField("Crée le :", "19/01/18 20:09:34")
        .addField("Crée par :", ":art: ๖̶̶̶ζ͜MrPăsțeł :art:#0091")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setTitle("Voici la liste des commandes")
        .addField("Commandes basiques", "u!help")
        .setDescription("u!avatar")
        .setDescription("u!ping")
        .addField("u!avatar", "Affiche ton avatar")
        .addField("Crée par :", ":art: ๖̶̶̶ζ͜MrPăsțeł :art:#0091")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setFooter("© NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

client.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "ℬ𝓲𝒆𝓷𝓿𝒆𝓷𝓾𝒆").send(`Hey ${member}, bienvenue sur **UltraGaming** :tada::hugging: !`)
});

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "ℬ𝓲𝒆𝓷𝓿𝒆𝓷𝓾𝒆").send(`${member} a quitté **UltraGaming**. Nous sommes ravis de t'avoir accueillis :cry:.`)
});

client.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', '★━𝓖𝓪𝓶𝒆𝓾𝓻𝓼━★');
    member.addRole(role)
})
