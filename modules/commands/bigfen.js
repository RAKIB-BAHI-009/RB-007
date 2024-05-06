const fs = require("fs");
module.exports.config = {
	name: "bigboss",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BADOL-KHAN - Fixed by Badol", 
	description: "rbbadolkhan",
	commandCategory: "no prefix",
	usages: "bigboss",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kar bot eta")==0 || event.body.indexOf("Eta kar bot")==0 || event.body.indexOf("কার বট এটা")==0 ||
event.body.indexOf("এটা কার বট")==0 ||
event.body.indexOf("kar bot eta")==0 ||
event.body.indexOf("eta kar bot")==0 ||
event.body.indexOf("Owner")==0 ||
event.body.indexOf("BADOL")==0 || event.body.indexOf("Raja babu")==0) {
		var msg = {
				body: "╭───────────•🤍❤️💚💛•─────────╮\n\n❤️𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑🍒𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍❤️\n\n💛𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍🍋𝐑𝐀𝐉𝐀-𝐁𝐀𝐁𝐔💛\n\n💙𝐅𝐁-𝐋𝐈𝐍𝐊💙\n\nhttps://www.facebook.com/www.xxx.com61\n\nhttps://www.facebook.com/RAJA.BABU.TERA.REAL.ABBU.OK.07\n\n💚𝐌𝐄𝐒𝐒𝐄𝐍𝐆𝐀𝐑𝐄-𝐋𝐈𝐍𝐊💚\n\nm.me/100000939642985\n\nm.me/100007070042228\n\n╰──────────•🤍❤️💚💛•──────────╯",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/bigfen.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
