
const Discord = require('discord.js');

const commands = require('./commands/player')

const AUD_BOT_TOKEN = require('./utils/keys')
bot_token = AUD_BOT_TOKEN

const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Connected as ${client.user.tag}`)
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.login(bot_token)

// -------------------------------------------------------------------------------------------------

client.on('message', recivedMessage => commands.soundEffectsPlayer(recivedMessage))