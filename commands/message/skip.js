module.exports = {
    name: 'skip',
    description: 'Preskoči trenutnu pesmu',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player || !player.current) {
            return message.reply('❌ Trenutno se ne pušta nijedna pesma.');
        }

        const title = player.current.info.title;
        player.stop();

        message.reply(`⏭️ Preskočena pesma: **${title}**`);
    }
};
