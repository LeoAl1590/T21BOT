module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No estoy poniendo musica`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Cola mezclada **${client.player.getQueue(message).tracks.length}** cancion(es) !`);
    },
};