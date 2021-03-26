module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <comando>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panel de ayuda' },
                    footer: { text: 'Respositorio en GitHub: proximamente' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Musica', value: music },
                        { name: 'Filtros', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Para usar los filtros, ${client.config.discord.prefix}filtro (filtro). Ejemplo : ${client.config.discord.prefix}filtro 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - No encontré ese comando!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panel de ayuda' },
                    footer: { text: 'Respositorio en GitHub: proximamente' },
                    fields: [
                        { name: 'Nombre', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'Apodo', value: command.aliases.length < 1 ? 'Ninguno' : command.aliases.join(', '), inline: true },
                        { name: 'Uso', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Encuentra info sobre el comadno.\nArgumentos `[]`, argumentos opcionales `<>`.',
                }
            });
        };
    },
};