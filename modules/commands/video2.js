module.exports.config = {
	name: "anime",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "BADOL-KHAN",
	description: "Random video",
	commandCategory: "mcs-team",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎-𝐋𝐈𝐒𝐓 」====\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n𝟙.╰┈► 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 ◄┈╯ \n𝟚. ╰┈►𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟛.╰┈► 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟜.╰┈► 𝐒𝐀𝐃 𝐕da𝐄𝐎 ◄┈╯\n𝟝.╰┈► 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟞.╰┈► 𝐒𝐇𝐀𝐈𝐑𝐈 ◄┈╯\n𝟟.╰┈► 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟠.╰┈► 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟡.╰┈► 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍 𝐅𝐎𝐑𝐈𝐃 𝐒𝐈𝐑 ◄┈╯\n𝟙𝟘.╰┈► 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟙𝟙.╰┈► 𝐂𝐑𝐔𝐒𝐇 𝐆𝐈𝐑𝐋𝐒 ◄┈╯\n𝟙𝟚.╰┈► 𝐁𝐑𝐎𝐊𝐄𝐍 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎-𝐋𝐈𝐒𝐓 」===\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n𝟙𝟛.╰┈► 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎 ◄┈╯\n𝟙𝟜.╰┈► 𝐇𝐎𝐓 ◄┈╯\n𝟙𝟝.╰┈► 𝐈𝐓𝐄𝐌 ◄┈╯\n\n☀️এই বার্তাটি রিপ্লে করে আপনি কতগুলি ভিডিও নম্বর☀️\n☀️দেখতে চান তা আমাকে বলুন☀️\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n┏━━ [ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻  𝐁𝐀𝐃𝐀𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n┃🌺 𝐁𝐨𝐭 𝐌𝐨𝐝𝐢𝐟𝐲 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 \n┗━━━━━━━━━━━━➢", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: ".☀️আপনার চয়েস করা ভিডিওটি ডাউনলোড করা হলো দেখে নিন☀️\n\n┏━━ [ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🍒 𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍\n┃🍒 𝐁𝐨𝐭 𝐌𝐨𝐝𝐢𝐟𝐲 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 \n┗━━━━━━━━━━━━➢",
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "http://65.109.58.118:26189/video/love";
        else if ("2" == a.body)
         var   h = "http://65.109.58.118:26189/video/cpl";
        else if ("3" == a.body)
         var   h = "http://65.109.58.118:26189/video/short";
        else if ("4" == a.body)
          var  h = "http://65.109.58.118:26189/video/sadvideo";
        else if ("5" == a.body)
          var  h = "http://65.109.58.118:26189/video/status";
        else if ("6" == a.body)
          var  h = "http://65.109.58.118:26189/video/shairi";
        else if ("7" == a.body)
          var  h = "http://65.109.58.118:26189/video/baby";
        else if ("8" == a.body)
          var  h = "http://65.109.58.118:26189/video/anime";
        else if ("9" == a.body)
         var   h = "http://65.109.58.118:26189/video/humaiyun";
        else if ("10" == a.body)
         var  h = "http://65.109.58.118:26189/video/islam";
         else if ("11" == a.body)
         var  h = "http://65.109.58.118:26189/video/broken";
         else if ("12" == a.body)
         var  h = "http://65.109.58.118:26189/video/horny";
        else if ("13" == a.body)
         var  h = "http://65.109.58.118:26189/video/hot";
        else if ("14" == a.body)
         var  h = "http://65.109.58.118:26189/video/item";
        return { p, h };
    }
};
