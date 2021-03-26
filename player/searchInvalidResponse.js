module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancelar') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - La seleccion fue **cancelada**`);
    } else message.channel.send(`${client.emotes.error} - Tenes que mandar un numero entre **1** y **${tracks.length}** !`);
};