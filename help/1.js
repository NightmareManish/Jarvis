module.exports ={
    name: '1',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Help Module')
       .setDescription('Server\'s Info And Commands')
       .addFields( 
            
            {name : "1. p!twitter " , value : `Gives twitter link for Efootball PES`},
            {name : "2. p!youtube" , value : `Gives Youtube Link of Freakgamer`},

            {name : "3. p!official" , value : `Gives Official Website Of efootball pes `},
            {name : "4. p!clear " , value : `**Moderator Command: Clears Messages! `},
            {name : "5. p!ping" , value : `For Time Pass Lol! :) `}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784432882173214781/pes_25th_anni_1594813901230.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}