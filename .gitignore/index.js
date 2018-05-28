const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Sanalia - !help");
    console.log("Connecté");
});

bot.login("NDUwNDkwNTg3NDQ4MjEzNTA2.Dez_pA.TQBVy4AiM4JJ2F7AXNdtBZXCIg0");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -!help \n -!sanabot \n -!fabriquant");
    }
    
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
            .addField("!help","Page d'aide", true)
            .addField("!sanabot","Permet de voir l'age du bot", true)
            .addField("!fabriquant","Permet de voir le Créateur du Bot")
            .setColor("0xFF0000")
            .setFooter("Bot dev par GaetanJeff")
        message.channel.sendEmbed(embed);
    }

});
