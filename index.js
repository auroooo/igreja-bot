const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "&";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const timeTaken = Date.now() - message.createdTimestamp;

    if (command === "ping"){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply('Pong! Essa mensagem teve uma latência de ' + timeTaken + 'ms.');
    }
    else if (command === "sum"){
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply('A soma de todos os argumentos fornecidos é ' + sum + '!\nEssa mensagem teve uma latência de ' + timeTaken + 'ms.');
    }
    else if (command === "bomdia"){
        client.channels.cache.get(`804145821985144855`).send(`Bom dia, igreja!\nQue ZarquesMero esteja convosco :pray::church:`)
    }
    else if (command === "evangelho"){
        client.channels.cache.get(`804145821985144855`).send(`**Evangelho do dia:**\n\n\"Em nossa terra, ZarquesMero fez-se presente. Trouxe-nos amor, trouxe-nos alegria. A esperança de dias melhores sempre ressurgem quando ELE toca seus pés em nosso solo e toca nos corações dos seus fiéis mais verdadeiros.\nQue nunca esqueçamos-nos disso: *ELE é a nossa salvação.*\"`)
    }
    else if (command === "abaixopandola"){
        client.channels.cache.get(`804145821985144855`).send('E abaixo ao Pandolino.')
    }

});

client.login(config.BOT_TOKEN);