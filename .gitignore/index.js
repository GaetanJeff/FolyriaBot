const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Sanalia - !help");
    console.log("Connecté");
});

bot.login("NDUwNDkwNTg3NDQ4MjEzNTA2.Dez_pA.TQBVy4AiM4JJ2F7AXNdtBZXCIg0");

bot.on('message', message => {
    if (message.content === "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande de Salut Faite");
    }

    if (message.content === prefix + "sanabot"){
        message.reply("Création du bot le _28/05/2018_ à _21h25_ ");
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
            .addField("!aide","Page d'aide", true)
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
            let modRole = message.guild.roles.find("name", "📕 Administrateur");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
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
                message.guild.channels.find("name", "general").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
            }).catch(console.error)

        }

        if (command === "ban") {
            let modRole = message.guild.roles.find("name", "📕 Administrateur");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
            const member = message.mentions.members.first();
            if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
            member.ban().then(member => {
                message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
            }).catch(console.error)
        }
    })
});
