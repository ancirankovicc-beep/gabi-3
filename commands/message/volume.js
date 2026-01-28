module.exports = {
    name: 'volume',
    description: 'Podesi jačinu zvuka',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player) {
            return message.reply('❌ Trenutno se ne pušta muzika.');
        }

        const volume = parseInt(args[0]);

        if (isNaN(volume) || volume < 1 || volume > 100) {
            return message.reply('❌ Unesi broj između 1 i 100.');
        }

        player.setVolume(volume);
        message.reply(`🔊 Jačina zvuka podešena na **${volume}%**.`);
    }
};
