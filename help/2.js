module.exports ={
    name: '2',
    Description: 'Gives Commands Info !',
   async execute(client,message,args,Discord,msg){
     

      const newEmbed2 = new Discord.MessageEmbed()
    .setColor('#6beea8')
    .setTitle('Help Module')
    .setDescription('Server\'s Info And Commands')
    .addFields(

        {
            name: "1. General Commands ", value: `Gives Info for General commands like ping 
     , twitter , friendly,Other Websites...etc`},
        { name: "2. Rewards", value: `Gives Info for Rewards Commands` },

        { name: "3. Tourneys Info And Rules", value: `Gives Info and rules for Tourneys ` },
        { name: "4. Deadline Commands ", value: `Gives Info for Deadline Commands` },
        { name: "5. Server Competitions", value: `Gives Info For Our Server Competetions` },
        { name: "6. Server Roles", value: `Gives Info for For diffrents roles on the server :)` }





    )
    .setFooter(`You can only React for one at a time`)
    .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg');




       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Command Menu')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription('Tourneys Rewards INFO')
       .addFields( 
            
            {name : "1. p!rewards-freakcup " , value : `Gives Reward Info For Freak cup`},
            {name : "2. p!rewards-ucl" , value : `Gives Reward Info For UEFA Champions League`},
            
            {name : "3. p!rewards-laliga" , value : `Gives Reward Info For laliga `},
            {name : "4. p!rewards-premleague " , value : `Gives Reward Info For Premier League `},
            {name : "5. p!rewards-divisions " , value : `Gives Reward Info For Divisions rewards `},
            {name : "6. p!rewards-mainko" , value : `Gives Reward Info  For Main squad KO`},
            {name : "7. p!rewards-gktourney" , value : `Gives Reward Info For Gk Tourney `}
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433051182170142/pes2021thumb-1594909443576.png');
         
           
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed)
          await msg.react('↩️')
          await msg.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '↩️'), { max: 1, time: 40000 }) 
          .then(async collected => {
            if (collected.first().emoji.name == '↩️') { return msg.edit(newEmbed2).then(async()  => {


              msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
              await msg.react('1️⃣')
              await msg.react('2️⃣')
              await msg.react('3️⃣')
              await msg.react('4️⃣')
              await msg.react('5️⃣')
              await msg.react('6️⃣')
              
              
              await msg.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '1️⃣' ||
              
                  reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣' || reaction.emoji.name == '4️⃣' || reaction.emoji.name == '5️⃣' || reaction.emoji.name == '6️⃣' || reaction.emoji.name == '↩️'), { max: 1, time: 40000 })
                  .then(async collected => {
                      if (collected.first().emoji.name == '1️⃣') { return client.help.get('1').execute(client,message, args, Discord,msg) }
                      else if (collected.first().emoji.name == '2️⃣') { return client.help.get('2').execute(client,message, args, Discord) }
                      else if (collected.first().emoji.name == '3️⃣') { return client.help.get('3').execute(client,message, args, Discord) }
                      else if (collected.first().emoji.name == '4️⃣') { return client.help.get('4').execute(client,message, args, Discord) }
                      else if (collected.first().emoji.name == '5️⃣') { return client.help.get('5').execute(client,message, args, Discord) }
                      else if (collected.first().emoji.name == '6️⃣') { return client.help.get('6').execute(client,message, args, Discord) }
                      
                      else return message.channel.send('Time Up');
              
              
              
              
              
                  }).catch(async () => { return message.channel.send("error") });
            })
            
            }
            else return message.channel.send('Time Up');





          }).catch(async () => { return message.channel.send("error") });
        } 
        
        
}