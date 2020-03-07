const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content);
    if (message.content.startsWith(`${prefix}kick`)) {
     if (message.member.roles.find("name", "Administrator")) {

        if (message.content.startsWith(`${prefix}kick`)) {
            message.channel.send("BOOP")

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send("Goodbye. " + member.displayName + " has been kicked")
            })
        }
    }
    else {
        message.channel.send("You cannot do that you do not have Administrator")
    }
}

if (message.content.startsWith(`${prefix}serverinfo`)) {
    const serverinfo = new Discord.RichEmbed()
        .setColor('#035096')
        .setTitle('Server info')
        .addField('Server name:',  `${message.guild.name}`, true)
        .addField('Server Owner:', `${message.guild.owner}`, true)
        .addField('Total Members:', `${message.guild.memberCount}`, true)
        .addField('Ping', new Date().getTime() - message.createdTimestamp + " ms", true)

    message.channel.send(serverinfo);
}

if (message.content.startsWith(`${prefix}help`)) {
    const help = new Discord.RichEmbed()
    .setColor('#035096')
    .setTitle('Commands')
    .addField('$help', 'if you say $help the bot will DM you a list of commands.')
    .addField('$kick', 'If you say $kick @USERNAME \n it will kick anyone on the server. \n <Administrator only command>', true)
    .addField('$serverinfo', 'if you say $serverinfo will give you information all about the server.', true)

    message.author.send(help)
}
if (message.content.startsWith(`${prefix}report`)) {
    message.guild.owner.send(message.content);
}
})

client.login(token);

     