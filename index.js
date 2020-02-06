const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const readline = require('readline-sync');

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        console.log(message.content);

        if (message.content.startsWith(`${prefix}kick`)) {
            message.channel.send("BOOP")

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send("Goodbye. " + member.displayName + " has been kicked")
            })
        }
    }
    if (message.content.startsWith(`${prefix}message`)) {
        let msg = readline.question("What is your message? ");
        message.channel.send(msg)
    }
})

client.login(token);