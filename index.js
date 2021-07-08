const Discord = require("discord.js")
const client = new Discord.Client() 
const Gamedig = require('gamedig');
// change the prefix to whatever you want
const prefix = ';'

client.on('ready', () => {
    console.log("coucou")
});

client.on("message", (msg) => {
    if(msg.content.startsWith(`${prefix}server`)){
        const jaaju = msg.content.split(' ')
        if(jaaju.length !== 3) return msg.reply(`correct use of the command : ${prefix}server game ip_adress \n Example : ${prefix}server garrysmod ip_adress`)
        
        Gamedig.query({
            type: `${jaaju[1].toString().toLowerCase()}`,
            host: `${jaaju[2].toString().toLowerCase()}`
        }).then((state) => {
        if(jaaju[1] === 'garrysmod'){
            const gmod = new Discord.MessageEmbed()
            .setColor('#08BCFD')
            .setTitle('Bot created by Raiden & Alugalug Cat')
            .setDescription('Here is the result of your search about ' + `${jaaju[2]}` + ' on the game ' + `${jaaju[1]}` + ' !')
            .setThumbnail('https://i.ibb.co/yP0cD9F/dd28ed7cc40b4970812f3ab2552773ac.webp')
            .setTimestamp()   
            .setAuthor('Server informations')
            .setURL('https://github.com/Raidened/RetrieveGameServerInfo_Bot')
            .addFields(
                  { name: 'Name of the server: ', value: (state.name) },
                  { name: 'Map information: ', value: (state.map) },
                  { name: 'Password: ', value: (state.password) },
                  { name: 'Server IP: ', value: (state.connect) },
                  { name: 'Actual players: ', value: (state.players.length + '/' + state.maxplayers)},
                  { name: 'Ping: ', value: (state.ping)}    
            )
            return msg.channel.send(gmod);
        }
        if(jaaju[1] !== 'garrysmod'){
            const autres = new Discord.MessageEmbed()
            .setColor('#08BCFD')
            .setTitle('Bot created by Raiden & Alugalug Cat')
            .setDescription('Here is the result of your search about ' + `${jaaju[2]}` + ' on the game ' + `${jaaju[1]}` + ' !')
            .setThumbnail('https://i.ibb.co/yP0cD9F/dd28ed7cc40b4970812f3ab2552773ac.webp')
            .setTimestamp()   
            .setAuthor('Server informations')
            .setURL('https://github.com/Raidened/RetrieveGameServerInfo_Bot')
            .addFields(
                  { name: 'Name of the server: ', value: (state.name) },
                  { name: 'Server IP: ', value: (state.connect) },
                  { name: 'Actual players: ', value: (state.players.length + '/' + state.maxplayers)},
                  { name: 'Ping: ', value: (state.ping)}
            )
                msg.channel.send(autres);
        }
        }).catch((error) => {
            msg.reply(`the server is offline or you're using the command in the wrong way \n Correct use of the command : ${prefix}server game ip_adress \n Example : ${prefix}server garrysmod ip_adress`)
        }); 
        
        console.log(jaaju.length)

        // Bot was created by Raiden & The Alugalug Cat for support contact us !!! https://github.com/Raidened/RetrieveGameServerInfo_Bot/issues
    }
})

// Your token here
client.login("YourSuperSecretImpostorToken")