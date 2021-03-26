module.exports = {
    name: 'loop',
    aliases: ['lp', 'repetir'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de musica`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No estoy poniendo musica`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Loop **desactivado**`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Loop **activado**, voy a repetir toda la cola`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Loop **desactivado** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Loop **activado**, voy a repetir toda la cola`);
            };
        };
    },
};