module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} fue añadida a la cola con (**${playlist.tracks.length}** canciones) !`);
};