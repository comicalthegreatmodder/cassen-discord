const discord = require('discord.js');
const client = new discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

console.log("Hello World! The cassen module is working correctly!");

var token = "";
var prefix = "";

module.exports = {
    token: (supplytoken) => {
        token = supplytoken;
    },
    setPrefix: (supplyprefix) => {
        prefix = supplyprefix;
    },
    login: () => {
        client.login(token);
    },
    check: (checkmsg) => {
        client.on('ready', () => {
            console.log(checkmsg);
        });
    },
    commandCreateBasic: (inputmsg, outputmsg) => {
        client.on('messageCreate', message => {
            if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix)) {
                if (message.content === inputmsg) {
                    message.channel.send(outputmsg);
                }
            }
        });
    }
}