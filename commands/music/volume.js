module.exports = {
    name: 'volumen',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volumen [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en mi mismo canal de voz`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No estoy poniendo musica`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Escribí un numero valido`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Pone un nunmero (entre 1 y 100)`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volumen cambiado a **${parseInt(args[0])}%**`);
    },
};