module.exports ={
    name: 'rules',
    Description: 'Gives RUles !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Gameplay Rules on the Server ')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rule 1" , value: ' Long balls from own half and Backpassing are banned in the Tourneys , Is Your Opponent Performs these Long balls and you concede a GOAL , You will Report recorded proof in #proves channel and THE FINAL DECISION WILL BE TAKEN BY THE STAFF MEMBERS And THAT SHOULD BE Respected . ONLY IF YOU Concede Goal by that , you can do Long ball but remember you must not score with that'},
           {name: "Rule 2" , value: ' If you find Your Opponent lagging , Quit in first 30 mins else quitting afterwards will straight lead to the score at that time or full time score'}
           
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/796271494674120704/12_rules_of_simply_investing-1760w-1100h.png');
           
           
           message.channel.send(newEmbed);

       }
    }