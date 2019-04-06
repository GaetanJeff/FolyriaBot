const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")


bot.on('ready', function() {
    bot.user.setGame("[!help] SecBotHeberg");
    console.log("Connecté");
});

bot.login("NDYwODU0NjE3OTU4NTE0Njkw.XKEBGw.MJhSC2ahhYZe1xQuTyw7UxW4ge0");

bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "►nouveaux-salutation").send(` ${member.user.username} viens de rejoindre l'hébergeur`)
})

bot.on('guildMemberRemove', member =>{
    member.guild.channels.find("name", "►nouveaux-salutation").send(` ${member.user.username} viens de quitter l'hébergeur`)
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -!help \n -!secbot \n -!fabriquant \n -!kick \n -!statistique");
    }
    
    if (message.content === "salut"){
        message.channel.send("Salut")
        console.log("Salut")
    }

    if (message.content === prefix + "secbot"){
        message.reply("Création du bot le _16/06/2018_ à _08h42_ ");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("Celui qui m'a fabriqué est GaetanJeff")
        console.log("Commande Fabriquant")
    }

    if (message.content === prefix + "aide"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sanalia")
            .setDescription("Commande d'aide")
            .addField("!help","Page d'aide", true)
            .addField("!secbot","Permet de voir l'age du bot", true)
            .addField("!fabriquant","Permet de voir le Créateur du Bot", true)
            .addField("!kick","Permet de kick une personne", true)
            .addField("!statistique","Vous envoye vos statistiques de votre compte", true)
            .setColor("0xFF0000")
            .setFooter("Bot dev par GaetanJeff")
        message.channel.sendEmbed(embed);
    }
    
    bot.on('message', message => {
        let command = message.content.split(" ")[0];
        const args = message.content.slice(prefix.lenght).split(/ +/);
        command = args.shift().toLowerCase();

        if (command === prefix + "kick") {
            if(message.mentions.users.size === 0) {
                return message.reply("Merci de mentionner l'utilisateur à expulser").catch(console.error);
            }
            let kickMember = message.guild.member(message.mentions.users.first());
            if (!kickMember) {
                return message.reply("Cet utilisateur est introuvable ou impossible à expulser")
            }
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
            }
            kickMember.kick().then(member => {
                message.reply(`${member.user.username} a été epulsé avec succès.`).catch(console.error);
                message.guild.channels.find("name", "►nouveaux-salutation").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
            }).catch(console.error)
        }
    })
    
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "statistique":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#F80303")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur:", userCreateDate[1] + ' ' + userCreateDate[2])
        .setThumbnail(message.author.avatarURL)
        .setFooter("Bot dev par GaetanJeff")
        message.reply("Tu peux regarder tes messages privés ! Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
    }
});
