module.exports = {
    name: 'limpiar-cola',
    aliases: ['lc'],
    category: 'Music',
    utilisation: '{prefix}lc',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Solo hay una cancion en la cola`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - La cola fue **borrada**`);
    },
};