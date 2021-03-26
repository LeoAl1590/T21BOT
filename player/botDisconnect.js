module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica parada porque me desconectaron del canal`);
};