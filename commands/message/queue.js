const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Prikaži red pesama',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player || player.queue.size === 0) {
            return message.reply('📜 Red pesama je prazan.');
        }

        const tracks = player.queue
            .map((track, i) => `\`${i + 1}.\` ${track.info.title}`)
            .slice(0, 10)
            .join('\n');

        const embed = new EmbedBuilder()
            .setTitle('📜 Red pesama')
            .setDescription(tracks)
            .setColor('#9b59b6')
            .setFooter({ text: 'Gabi Music Bot • Developed by Živojinović' });

        message.channel.send({ embeds: [embed] });
    }
};
