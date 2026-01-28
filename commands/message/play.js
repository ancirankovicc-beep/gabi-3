module.exports = {
    name: 'play',
    description: 'Pusti pesmu ili dodaj u red',
    async execute(message, args, client) {
        if (!args.length) {
            return message.reply('❌ Moraš uneti naziv ili link pesme.');
        }

        const query = args.join(' ');
        const result = await client.playerHandler.playSong(
            await client.playerHandler.createPlayer(
                message.guild.id,
                message.member.voice.channelId,
                message.channel.id
            ),
            query,
            message.author
        );

        if (result.type === 'none') {
            return message.reply('❌ Nema rezultata za tu pretragu.');
        }

        if (result.type === 'playlist') {
            return message.reply(`📃 Dodata plejlista sa **${result.tracks}** pesama.`);
        }

        message.reply(`▶️ Dodata pesma: **${result.track.info.title}**`);
    }
};
