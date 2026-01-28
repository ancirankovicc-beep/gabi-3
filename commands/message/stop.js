module.exports = {
    name: 'stop',
    description: 'Zaustavi muziku i izađi iz kanala',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player) {
            return message.reply('❌ Trenutno se ne pušta muzika.');
        }

        player.destroy();
        message.reply('🛑 Muzika je zaustavljena i bot je izašao iz kanala.');
    }
};

