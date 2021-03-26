module.exports = {
    name: 'queue',
    aliases: ['cola'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No estoy poniendo musica`);

        message.channel.send(`**Cola - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(en bucle)' : ''}**\nSonando : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (pedida por : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Y **${queue.tracks.length - 5}** canciones más...` : `En la playlist **${queue.tracks.length}** cancion(es)...`}`));
    },
};