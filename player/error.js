module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - No hay musica en el server`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - No estas en un canal de voz`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - No puedo entrar al canal, fijate que mis permisos esten bien`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} está bloqueado en tu pais! Skippeando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`La musica está reproduciendose... esperá e intentá de nuevo!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo malió sal ... Error : ${error}`);
    };
};
