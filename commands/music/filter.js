module.exports = {
    name: 'filtro',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filtro [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Poné un filtro valido`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - El filtro no existe, fijate de escribirlo bien`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Estoy **poniendo** el filtro a la cancion, esperá... Nota : mientras mas larga la cancion, mas se demora.`);
        else message.channel.send(`${client.emotes.music} - Estoy **sacando** el filtro a la cancion, esperá... Nota : mientras mas larga la cancion, mas se demora.`);
    },
};