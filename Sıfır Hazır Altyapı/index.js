const Discord = require('discord.js')
const client = new Discord.Client()
const Util = require('discord.js')
const ayarlar = require('./config.json')
const {config, prefix, offical_fio, token} = require("./config.json")
const fs = require("fs")
const AsciiTable = require('ascii-table')
require('./util/eventHandler.js') (client)
const axios = require("axios").default;
const db = require('wio.db')
const fetch = require('node-fetch');

/////Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  console.log(`[Kiryum]Yüklenen Komut ${dir}/${file}`)
} else {
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
//İzinler
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === offical_fio) permlvl = 4;
  return permlvl;
};
client.login(token);