const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => ctx.reply('Добро пожаловать в Hamster Kombat!'));
bot.command('game', (ctx) => {
    ctx.replyWithGame('hamster_kombat');
});

bot.launch();

app.get('/', (req, res) => {
    res.send('Welcome to Hamster Kombat Mini App!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
