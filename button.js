bot.command('game', (ctx) => {
    ctx.replyWithGame('hamster_kombat', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Play Hamster Kombat', callback_game: 'hamster_kombat' }]
            ]
        }
    });
});
