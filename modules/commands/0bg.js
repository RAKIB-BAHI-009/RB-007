const fs = require("fs");
module.exports.config = {
	name: "bossbg",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BADOL-KHAN - Fixed by Badol", 
	description: "rbbadolkhan",
	commandCategory: "no prefix",
	usages: "bossbg",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Badol vai")==0 || event.body.indexOf("বাদল")==0 || event.body.indexOf("Badol")==0 ||
event.body.indexOf("@MOHAMMAD BADOL CHOWDHURY")==0 ||
event.body.indexOf("রাজা ভাই")==0 ||
event.body.indexOf("100007070042228")==0 ||
event.body.indexOf("100004504180813")==0 ||
event.body.indexOf("@Raja Babu _____// ;* :/ 3:)")==0 || event.body.indexOf("badol vai")==0) {
		var msg = {
				body: "╭───────────•🤍❤️💚💛•─────────╮\n\n❤️𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑🍒𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍❤️\n\n💛𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍🍋𝐑𝐀𝐉𝐀-𝐁𝐀𝐁𝐔💛\n\n💙𝐅𝐁-𝐋𝐈𝐍𝐊💙\n\nhttps://www.facebook.com/www.xxx.com61\n\nhttps://www.facebook.com/RAJA.BABU.TERA.REAL.ABBU.OK.07\n\n💚𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄-𝐋𝐈𝐍𝐊💚\n\nm.me/100000939642985\n\nm.me/100007070042228\n\n╰──────────•🤍❤️💚💛•──────────╯",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/badol-boss.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
