const {
    Client,
    GatewayIntentBits,
    Partials
} = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
    partials: [Partials.Channel]
});
const config = require("./config.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
// 新人报道变量
var reg1 = RegExp(/欢迎大驾光临，/);
var reg2 = RegExp(/一只野生的/);
client.on('messageCreate', message => {

    if (message.content === 'ping') {

        message.channel.send('Pong!');

    };
    if (message.content.match(reg1)||message.content.match(reg2)) {
        message.channel.send('欢迎来到 MacOS Games\n' +
            '此社区是一个新建的社区，各个板块还在完善中，期待有更多的小伙伴加入。');
    }
});

client.login(config.token);