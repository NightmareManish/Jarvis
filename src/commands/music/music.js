const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require("discord.js");


const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
  var wallpapers = ["https://cdn.discordapp.com/attachments/730714810614022228/888355120411209738/1792303.png",
  "https://cdn.discordapp.com/attachments/730714810614022228/888355457704542278/977273-desktop-background-music-1920x1080-for-samsung.png",
  "https://cdn.discordapp.com/attachments/730714810614022228/888355852082376724/photo-1513829596324-4bb2800c5efb.png","https://cdn.discordapp.com/attachments/730714810614022228/888355302599196692/maxresdefault.png",
"https://cdn.discordapp.com/attachments/730714810614022228/888355751276449822/photo-1499415479124-43c32433a620.png"]
   var mu = Math.floor(Math.random() * wallpapers.length);
   const newEmbed1 = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Command Menu Music')
   .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
   .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
   .setTimestamp()
   .addFields( 
        
        {name : "🎧 p!play [song name] " , value : ` •  Plays the song mentioned`},
        {name : "🎧 p!np " , value : ` • Shows current song playing! Button Access! `},
        {name : "🎧 p!loop song/queue/off" , value : ` • Loops song/Queue or turns it off `},
        {name : "🎧 p!pause/resume" , value : ` •  Pause/Resume Songs`},
        {name : "🎧 p!queue" , value : ` •  Gives Current queue`},
        {name : "🎧 p!search [song query]" , value : ` •  To search song`},
        {name : "🎧 Filters Available " , value : ` •  Bassboost , 8d , Echo , Nightcore, Vaporwave To run \`p!bassboost\``},
      
        
         
         
      
    
    
       )
       .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setImage(`${wallpapers[mu]}`);
      const newEmbed2 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Command Menu Music 2')
      .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
      .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
      .setTimestamp()
      .addFields( 
           
           {name : "🎧 p!seek [time in secs] " , value : ` • Seeks song to the value Eg :\`p!seek 120\` `},
           {name : "🎧 p!volume [value] " , value : ` • Sets Volume to the value . Eg ! p!volume 70 `},
           {name : "🎧 p!skip " , value : ` • To skip song `},          
           {name : "🎧 p!remove [queue no]" , value : ` • Removes Song from the queue Eg: \`p!remove 3\` `},
           {name : "🎧 p!helpremind" , value : ` • Sets reminders for you `},
           {name : "🎧 p!stop" , value : ` • Clears The queue And stops music  `},
           {name : "🎧 p!dc" , value : ` • Disconnects the Bot From vc `},
          
           
            
            
         
       
       
          )
          .setFooter(client.user.username , client.user.displayAvatarURL() )
         .setImage(`${wallpapers[mu]}`);

      
      message.channel.send({embeds: [newEmbed1, newEmbed2]});
      
           
      
}

module.exports.config = {
    name: "music",
    Description: 'Command',
}