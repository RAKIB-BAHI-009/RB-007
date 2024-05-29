return axios.get('https://loidsenpaihelpapi.miraiandgoat.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "100007070042228";
     
      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`Commands list\n\n` + msg + `\nSpamming the bot are strictly prohibited\n\nTotal Commands: ${commands.size}\n\nDeveloper:\n${firstname}`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => {
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
 if (!command) {
  const arrayInfo = [];
  const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    let i = 0;
    let msg = "";
   
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }
 
    arrayInfo.sort((a, b) => a.data - b.data);
   
const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);
 
   
    for (let cmds of helpView) msg += `╰┈➤》${cmds}\n`;
   
    const siu = ` 》『𝐑𝐀𝐊𝐈𝐁-𝐁𝐀𝐇𝐈-𝟎𝟎𝟕-𝐁𝐎𝐓-𝐂𝐌𝐃-𝐋𝐈𝐒𝐓』《\nPage 『${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}』`;
 
    const randomText = [ "Even a small amount of alcohol poured on a scorpion will drive it crazy and sting itself to death."," The crocodile can't stick its tongue out.","The oldest known animal in the world is a 405-year-old male, discovered in 2007.","Sharks, like other fish, have their reproductive organs located in the ribcage.","The eyes of the octopus have no blind spots. On average, the brain of an octopus has 300 million neurons. When under extreme stress, some octopuses even eat their trunks.","An elephant's brain weighs about 6,000g, while a cat's brain weighs only approximately 30g.","Cats and dogs have the ability to hear ultrasound.","Sheep can survive up to 2 weeks in a state of being buried in snow.","The smartest pig in the world is owned by a math teacher in Madison, Wisconsin (USA). It has the ability to memorize worksheets multiplying to 12.","Statistics show that each rattlesnake's mating lasts up to ... more than 22 hours", "Studies have found that flies are deaf.","In a lack of water, kangaroos can endure longer than camels.","","Dogs have 4 toes on their hind legs and 5 toes on each of their front paws.","The average flight speed of honey bees is 24km/h. They never sleep.","Cockroaches can live up to 9 days after having their heads cut off.","If you leave a goldfish in the dark for a long time, it will eventually turn white.","The flying record for a chicken is 13 seconds.","The mosquito that causes the most deaths to humans worldwide is the mosquito.","TThe quack of a duck doesn't resonate, and no one knows why.","Sea pond has no brain. They are also among the few animals that can turn their stomachs inside out.","Termites are active 24 hours a day and they do not sleep. Studies have also found that termites gnaw wood twice as fast when listening to heavy rock music.","Baby giraffes usually fall from a height of 1.8 meters when they are born.", "A tiger not only has a striped coat, but their skin is also streaked with stripes.."," Vultures fly without flapping their wings.","Turkeys can reproduce without mating.","Penguins are the only birds that can swim, but not fly. Nor have any penguins been found in the Arctic."," The venom of the king cobra is so toxic that just one gram can kill 150 people.","The venom of a small sco
 const text = `\n━━━━━━━━━━━━━━━━\n\n╰┈➤𝗥𝗔𝗞𝗜𝗕_𝗕𝗢𝗧 ${global.config.BOTNAME} Bot\n𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑-𝐑𝐀𝐊𝐈𝐁 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n\n❈:Command Length: ${arrayInfo.length}\n✥:Bot Name: ${global.config.BOTNAME}\n❅:Prefix: ${global.config.PREFIX}\n✥:𝐎𝐖𝐍𝐄𝐑-𝐅𝐁:https://www.facebook.com/SYSTEM.ERROR.KING`;
    var link = [
"https://i.imgur.com/ZdkPGbg.jpeg",
    ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
 }
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);
 
  var link = [
"https://i.imgur.com/ZdkPGbg.jpeg",
  ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
}; 
