const Discord = require("discord.js");
 
exports.run = function(client, message, args) {
  var öneri = args.slice(0).join(" ");
 
  var guildID = "758952014650015754";
 
  var channelID = "788437353072033822"; 
 
  if (!öneri) {
    return message.reply(
      "Provide a message! Correct usage: **!suggest**"
    );
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("#fa0101")
 
      .addField("Action: "," Suggestion")
 
      .addField("User:", message.author.tag)
 
      .addField("ID", message.author.id)
 
      .addField("Suggestion", öneri)

      .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 
      client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);
 
    message.channel.send("Your suggestion has been taken! Thank you...");
  }
};
 
exports.conf = {
  enabled: true,
 
  guildOnly: false,
 
  aliases: ["suggest"],
 
  permLevel: 0
};
 
exports.help = {
  name: "suggest",
 
  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.",
 
  usage: "suggest"
};
 
