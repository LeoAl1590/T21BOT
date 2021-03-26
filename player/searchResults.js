module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Acá están los resultados para ${query}` },
            footer: { text: 'Respositorio en GitHub: proximamente' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};