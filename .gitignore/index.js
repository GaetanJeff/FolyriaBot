const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connecté");
});

bot.login("NDUwNDkwNTg3NDQ4MjEzNTA2.Dez_pA.TQBVy4AiM4JJ2F7AXNdtBZXCIg0");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -*help");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande de Salut Faite");
    }
});
