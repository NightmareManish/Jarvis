

module.exports = (client) => {
    console.log('Jarvis is online!');

var us = client.users.cache.size;
us = us/100;
us = us.toString();
us = us.slice(0,-1);
us = parseInt(us);


    let statusarray = [

        `${client.guilds.cache.size}  Servers`,
        `${client.channels.cache.size} Channels`,
        `${us} K Users`,
        `p!help `

    ]
    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, { type: 'WATCHING' })

    }, 10000)

};