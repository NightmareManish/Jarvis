module.exports ={
    name: 'rewards-freakcup',
    Description: 'Gives info of rewards for freak cup !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F33A3A')
       .setTitle('Rewards for Freak Cup ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\nQuater Finalists - 5000 score + 1000 server points'+
           '\nSemi Finals - 10000 score + 3000 server points'+
           '\nRunner up -  15000 score + 5000 server points + Runner up Role'+
           '\nWinner - 20000 score + 8000 server points + NITRO CLASSIC + Ballon d\'or Badge + Freak cup winner Role Role '}  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/599555520172654613/780793008500506644/1637813.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }