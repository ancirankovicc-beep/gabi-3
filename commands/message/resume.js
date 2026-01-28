module.exports = {
    name: 'pause',
    description: 'Pauziraj trenutno puštenu pesmu',
    async execute(message, args, client) {
        const player = client.playerHandler.getPlayer(message.guild.id);

        if (!player || !player.playing) {
            return message.reply('❌ Trenutno se ne pušta nijedna pesma.');
        }

        player.pause(true);
        message.reply('⏸️ Muzika je pauzirana.');
    }
};
