module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("চলে এসেছি আমি পিচ্চি রাৃঁকিৃঁবৃঁ চৌৃঁধুৃঁরীৃঁ তোমাদের মাঝে🫣🫂", event.threadID, () => api.sendMessage({body: `${global.config.BOTNAME} - Bot Connected ✅\n─────────────────\n╭────────────╮\n🌻Total users: ${global.data.allUserID.length}🌻\n╰────────────╯\n ─────────────────\n𝐀𝐬𝐬𝐚𝐥𝐚𝐦 𝐀𝐥𝐚𝐢𝐤𝐮𝐦\n─────────────────\n𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 ${global.config.BOTNAME} \n─────────────────\nMy Prefix Is [ ${global.config.PREFIX} ]\n─────────────────\nType ${global.config.PREFIX}help to see my cmd list\n─────────────────\nMy Owner Is RAKIB CHOWDHURY.\n─────────────────\nUse ${global.config.PREFIX}Called For Any Issues:\n─────────────────\n╭────────╮\n🌷::𝐄𝐱𝐚𝐦𝐩𝐥𝐞::🌷\n╰────────╯\n─────────────────\n /Text /Mark /Obama\n/Says /Music /Zuck \n/Lexi /Pair /Bot /Help\n ─────────────────`, attachment: fs.createReadStream(__dirname + "/cache/wel.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "۞̳̳̳̳̳̳̳̳̳̳̿̿࿅»̶̶͓͓͓̽̽̽»̶̶͓͓͓̽̽̽❥⃝ আসসালামু আলাইকুম🌺 🥀༊🤗😻🤗༊🥀۞̳̳̳̳̳̳̳̳̳̳̿̿࿅»̶̶͓͓͓̽̽̽»̶̶͓͓͓̽̽̽❥⃝-Wellcome-!!-🌻🥀\n\n {name}. আপনি এই গ্রুপের  {soThanhVien} নং মেম্বার\n\n {threadName}\n\nnগ্রুপে🍀🫰\n                                                                         🖤🦋🥀আসার জন্য তোমাকে অন্তরের অন্তর স্থল থেকে জানাই অবিরাম ভালবাসা!!-🖤🌻🥀🖤━━╬٨♪❤٨ـ \n                                                           ⭕⭕হা্ঁসি্ঁ ম্ঁজা্ঁ ঠা্ঁট্টা্ঁয়্ঁ ব্ঁন্ধু্ঁত্ব্ঁ হ্ঁবে্ঁ চি্ঁর্ঁকা্ঁলী্ঁন্ঁ বে্ঁচে্ঁ থা্ঁকু্ঁক্ঁ ব্ঁন্ধু্ঁত্ব্ঁ ভা্ঁলো্ঁবা্ঁসা্ঁর্ঁ স্ঁম্প্ঁর্কে্ঁ আ্ঁজী্ঁব্ঁন্ঁ⭕⭕\n                                 ❉্᭄͜͡...\n                                          ▓▓▓▓▓▓▓▓\n                                           .                                                                         আমাদের সাথে সময় দেওয়া ও পাশে থাকার অনুরোধ রইলো !!-🍂🌺🥀\n                                       🦋༎❤❤༎🦋\n\n🥰🥀ᏔᎬᏞᏟϴᎷᎬ 🥀🥰 \n\🦋║ლ💞🖤💞 ლ║🦋\n\n💐☘️-ধন্যবাদ প্রিয়--☘️💐─\n\n\𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽BOT OWNER: Rakib Chowdhury ❤️⃪⃝⃘᭄⃕❤️\n\n\𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽ID LINK= https://www.facebook.com/RAKIBCHOWDHURY.A?mibextid=ZbWKwL❤️⃪⃝⃘᭄⃕❤️─\n\n\𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽MASSANGER LINK:https://m.me/RAKIBCHOWDHURY.A❤️⃪⃝⃘᭄⃕❤️🥳😍" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
    }
