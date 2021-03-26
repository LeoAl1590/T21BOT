module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica parada porque no hay canciones en la cola`);
};