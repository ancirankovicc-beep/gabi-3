const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Prikaži listu dostupnih komandi',
    async execute(message, args, client) {
        const embed = new EmbedBuilder()
            .setTitle('📖 Lista komandi – Ultimate Music Bot')
            .setColor('#1DB954')
            .setDescription('Bot statistika: Aktivan na **1** serveru.\n\n')
            .addFields(
                {
                    name: '💬 Tekstualne komande [18]',
                    value: `
\`!clear\` – Očisti red pesama  
\`!help\` – Prikaži sve komande  
\`!join\` – Pridruži se tvom glasovnom kanalu  
\`!jump\` – Preskoči na određenu pesmu u redu  
\`!loop\` – Podesi ponavljanje (isključeno, pesma, red)  
\`!move\` – Premesti pesmu u redu  
\`!nowplaying\` – Prikaži trenutno puštenu pesmu  
\`!pause\` – Pauziraj trenutnu pesmu  
\`!ping\` – Proveri latenciju i uptime bota  
\`!play\` – Pusti pesmu ili dodaj u red  
\`!queue\` – Prikaži red pesama  
\`!remove\` – Ukloni pesmu iz reda  
\`!resume\` – Nastavi pauziranu muziku  
\`!shuffle\` – Izmešaj red  
\`!skip\` – Preskoči trenutnu pesmu  
\`!stop\` – Zaustavi muziku i izađi iz kanala  
\`!support\` – Podrška i kontakt  
\`!volume\` – Podesi jačinu zvuka (1–100)
`
                },
                {
                    name: '⚡ Slash komande [16]',
                    value: `
\`/autoplay\` – Uključi/isključi autoplay  
\`/clean-up\` – Ručno sakupljanje memorije (owner)  
\`/clear\` – Očisti red pesama  
\`/disable-central\` – Isključi centralni muzički sistem  
\`/join\` – Pridruži se glasovnom kanalu  
\`/loop\` – Podesi ponavljanje  
\`/pause\` – Pauziraj pesmu  
\`/play\` – Pusti ili dodaj pesmu  
\`/queue\` – Prikaži red pesama  
\`/remove\` – Ukloni pesmu  
\`/resume\` – Nastavi muziku  
\`/setup-central\` – Podesi centralni sistem  
\`/shuffle\` – Izmešaj red  
\`/skip\` – Preskoči pesmu  
\`/stop\` – Zaustavi muziku  
\`/volume\` – Podesi jačinu zvuka
`
                }
            )
            .setFooter({ text: 'Gabi Music Bot • Developed by Živojinović' });

        message.channel.send({ embeds: [embed] });
    }
};
