module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/3yGXa7H.jpeg",
            "https://i.imgur.com/3yGXa7H.jpeg",
            "https://i.imgur.com/3yGXa7H.jpeg",
            "https://i.imgur.com/3yGXa7H.jpeg",
            
"https://i.imgur.com/3yGXa7H.jpeg"];var callback = () => api.sendMessage({body:`𝐁𝐎𝐓-𝐍𝐀𝐌𝐄-𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐁𝐎𝐓 

🍒𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑-𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍🍒
--------------------------------------------\n┏━━ [  𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻𝐍𝐚𝐦𝐞 :  [ 𝐑𝐛-𝐁𝐚𝐝𝐨𝐥-𝐊𝐡𝐚𝐧 ]\n┃🌻𝐅𝐚𝐜𝐜𝐛𝐨𝐨𝐤 :  [ 𝐑𝐁 𝐁𝐀𝐃𝐎𝐋 𝐊𝐇𝐀𝐍 ]\n┃🌻𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : [ 𝐈𝐬𝐥𝐚𝐦 ]\n┃🌻𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐊𝐡𝐮𝐥𝐧𝐚 ]\n┃🌻𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐏𝐚𝐢𝐤𝐠𝐚𝐜𝐡𝐚 ]\n┃🌻𝐆𝐞𝐧𝐝𝐞𝐫 : [ 𝐌𝐚𝐥𝐞 ]\n┃🌻𝐀𝐠𝐞 : [ 𝟏𝟖+ ]\n┃🌻𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : [ 𝐒𝐢𝐧𝐠𝐥𝐞 ]\n┃🌻𝐖𝐨𝐫𝐤 : [ 𝐉𝐨𝐛 ]\n┃🌻𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 : [ wa.me/+8801782721761 ]\n┃🌻𝐅𝐛 𝐔𝐬𝐞𝐫 : [www.xxx.com61]\n┃🌻𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐚𝐫𝐞 : [ m.me/100000939642985 ]\n┗━━━━━━━━━━━━➢`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
