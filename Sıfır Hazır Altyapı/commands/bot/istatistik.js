const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setFooter("© Reddit 2020  BOT", client.user.avatarURL())
    .addField("» **Owner of the Bot**", "<@749173333790031894>")
    .addField("» **Delay times**","Message Delay: {ping1} ms \n Bot Delay: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Memory usage**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Operation time**", seksizaman, true)
    .addField("» **Users**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Guilds**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS version**", "v" + Discord.version, true)
    .addField("» **Node.JS version**", `${process.version}`, true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("**» Bot Invitation**", " [Invite](https://discord.com/oauth2/authorize?client_id=794098109398515712&scope=bot&permissions=0)", )
    .addField("**» Support Server**", " [Join Our Server](https://discord.gg/cGcpQfsMcf)", )
    .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
