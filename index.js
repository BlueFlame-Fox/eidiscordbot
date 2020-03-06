const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content);
    if (message.content.startsWith(`${prefix}kick`)) {
     if (message.member.roles.find("name", "Administrator") || ("name", "Moderators")) {

        if (message.content.startsWith(`${prefix}kick`)) {
            message.channel.send("BOOP")

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send("Goodbye. " + member.displayName + " has been kicked")
            })
        }
    }
    else {
        message.channel.send("You cannot do that you do not have Administrator or Moderator role")
    }
    
}
if (message.content.startsWith(`${prefix}evenbetterbotfact`)) {}
})

client.login(token);

//if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))