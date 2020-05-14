const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEwNDU3MTQ3MTkxOTg0MjQw.Xr0u3w.arnbtVipuJ2K_wLqacIRVuUHNHA';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!')
})

var version = '1.0.0';

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'help':
            
            let icon = bot.user.displayAvatarURL();
            let embedHelp = new Discord.MessageEmbed()

            embedHelp.setColor('#09ff00');
            embedHelp.setTitle('Bot Information');
            embedHelp.setThumbnail(icon);
            embedHelp.addField('Name', bot.user.username);
            embedHelp.addField('Stworzony przez', 'iuee');

            message.channel.send(embedHelp);
                





            break;
        case 'version':
            message.channel.send(`Version: ${version}`)
            break;
    }

})









bot.login(token);