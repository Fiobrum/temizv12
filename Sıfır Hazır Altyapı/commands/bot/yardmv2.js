const Discord = require('discord.js');
const ayarlar = require('../../config.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return [,"💡","🤖","📜"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};
const bot = new Discord.MessageEmbed()

.setColor('#fa0101') 
.setTitle("Bot Category")
.setThumbnail(client.user.avatarURL)
.addField('**r!i/r!stats/r!istatistik**', 'Send the bots statistics.')
.addField('**r!ping**', 'Measures the bots instant ping.')
.addField('**r!suggest <suggestion>**', 'It sends your requests / suggestions to the bot developer.')
.addField('**Links**', '[Our Support Server](https://discord.gg/cGcpQfsMcf)')
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")

const use1r = new Discord.MessageEmbed()

.setColor('#fa0101') 
.setTitle("Reddit Category")
.setThumbnail(client.user.avatarURL)
.addField('**r!animals active/deactive**', 'Submits random posts every 10 seconds from animal themed subreddits.')
.addField('**r!anime active/deactive**', 'Submits random posts every 10 seconds from anime themed subreddits.')
.addField('**r!dark active/deactive**', 'Submits random posts every 10 seconds from dark themed subreddits.')
.addField('**r!english active/deactive**', 'Submits random posts every 10 seconds from english meme subreddits.')
.addField('**r!film active/deactive**', 'Submits random posts every 10 seconds from film themed subreddits.')
.addField('**r!game active/deactive**', 'Submits random posts every 10 seconds from game themed subreddits.')
.addField('**r!reddit <subreddit name>**', 'Submits random posts from stated subreddits.')
.addField('**r!turkey active/deactive**', 'Submits random posts every 10 seconds from turkish meme subreddits.')
.addField('**r!game active/deactive**', 'Submits random posts every 10 seconds from game themed subreddits.')
.addField('**r!user <username>**', 'Sends user information of specified users.')
.addField('**r!sr <subreddit name>**', 'Sends subreddit informations of specified subreddit.')
.addField('**r!reddit <subreddit name>**', 'Send random post from stated subreddits.')
.addField('**Links**', '[Our Support Server](https://discord.gg/cGcpQfsMcf)')
.setFooter(`Menüyü ${message.author.username} istedi .`, message.author.avatarURL)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
const yardım = new Discord.MessageEmbed()
    .setTitle(`Requested by ${message.author.username}`)
      .setColor("#fa0101")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`** Main menu: 💡 \n Bot Commands: 🤖 \n Reddit Commands: 📜 **`)
  .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["💡","🤖","📜"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])
  await menü.react(emojiler[2])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "🤖") {

 menü.edit(bot)
  }
     if(reaction.emoji.name == "📜") {

      menü.edit(use1r)
       }
       
 if(reaction.emoji.name == "💡") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};