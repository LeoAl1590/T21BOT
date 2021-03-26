module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No estoy poniendo musica`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Ya está pausada`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Cancion ${client.player.getQueue(message).playing.title} pausada`);
    },
};