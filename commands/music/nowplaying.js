module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Respositorio en GitHub: proximamente' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Pedida por', value: track.requestedBy.username, inline: true },
                    { name: 'Playlist', value: track.fromPlaylist ? 'Si' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duracion', value: track.duration, inline: true },
                    { name: 'Filtros activados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volumen', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop', value: client.player.getQueue(message).repeatMode ? 'Si' : 'No', inline: true },
                    { name: 'Pausado', value: client.player.getQueue(message).paused ? 'Si' : 'No', inline: true },

                    { name: 'Progreso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};