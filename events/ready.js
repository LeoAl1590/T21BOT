module.exports = async (client) => {
    console.log(`Logueado como ${client.user.username}. En ${client.guilds.cache.size} servers, con ${client.users.cache.size} usuarios en total`);

    client.user.setActivity(client.config.discord.activity);
};