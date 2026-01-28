const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    description: 'Prikaži trenutno puštenu pesmu',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player || !player.current) {
            return message.reply('❌ Trenutno se ne pušta nijedna pesma.');
        }

        const track = player.current.info;

        const embed = new EmbedBuilder()
            .setTitle(`🎶 Trenutno se pušta`)
            .setDescription(`**${track.title}**`)
            .addFields(
                { name: '🎤 Izvođač', value: track.author, inline: true },
                { name: '👤 Zahtevao', value: `<@${track.requester.id}>`, inline: true },
                { name: '⏰ Trajanje', value: this.formatDuration(track.length), inline: true },
                { name: '🔁 Ponavljanje', value: player.loop || 'Isključeno', inline: true },
                { name: '🔊 Jačina', value: `${player.volume}%`, inline: true }
            )
            .setColor('#9b59b6')
            .setFooter({ text: 'Gabi Music Bot' });

        message.channel.send({ embeds: [embed] });
    },

    formatDuration(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
};
