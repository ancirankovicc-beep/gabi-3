const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'support',
    description: 'Podrška i kontakt',
    async execute(message) {
        const embed = new EmbedBuilder()
            .setTitle('🛠️ Podrška')
            .setDescription('Ako ti treba pomoć ili imaš pitanje, pridruži se serveru za podršku.')
            .addFields(
                { name: '🌐 Discord', value: '[Klikni ovde](https://discord.gg/xQF9f9yUEM)' }
            )
            .setColor('#1DB954')
            .setFooter({ text: 'Gabi Music Bot • Developed by Živojinović' });

        message.channel.send({ embeds: [embed] });
    }
};
