const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {

console.log("Emrinize Amadeyim");

var randomMesajlar = [

    "Infinitum Discord Services",
    "Reddit Discord Bot",
    "You can join our support server and tell your requests or bot errors!"
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 4000);

client.user.setStatus("dnd");
/*
idle yerine yazılabilecekler

dnd 
idle
online
ofline

*/


}