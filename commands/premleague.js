module.exports ={
    name: 'premleague',
    Description: 'Gives premleague  Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#00fffa')
       .setTitle('Premier League')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rule 1" , value: ' Only  10 Premier league  players allowed In the whole Squad ( +LEGENDS and IMs) i.e 10 players in the WHOLE SQUAD including SUBS'},
           {name: "Rule 2" , value: ' NO legends Allowed Other than Premier League  '},
           {name: "Rule 3" , value: ' If You will break the squad requirements the opponent will get the win !! And that will be final , So save your in squads ! '},
           {name: "Rule 4" , value: ' Its a  One Legged Tourney !'}

           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/787548932082630656/skysports-premier-league-restart_5015502.png');
           
           
           message.channel.send(newEmbed);

       }
    }