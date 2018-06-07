const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Folyria - *help");
    console.log("Connecté");
});

bot.login("NDU0MzQ1MDExNzMyMDIxMjUw.DfsFnw.Ufb2pIXEr7HRcVpL5QGobKlVgps");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -*help \n -*folyriabot \n -*fabriquant \n -*kick");
    }
    
    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande de Salut Faite");
    }

    if (message.content === prefix + "folyriabot"){
        message.reply("Création du bot le _07/06/2018_ à _19h56_ ");
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
            .addField("!sanabot","Permet de voir l'age du bot", true)
            .addField("!fabriquant","Permet de voir le Créateur du Bot", true)
            .addField("!kick","Permet de kick une personne", true)
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
                message.guild.channels.find("name", "▶accueil◀").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
            }).catch(console.error)
        }
    })
});
