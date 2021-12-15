const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./dhani.js')
nocache('./dhani.js', module => console.log(`${module} telah di update!`))

const starts = async (dhani = new WAConnection()) => {
    dhani.logger.level = 'warn'
    dhani.version = [2, 2142, 12]
    function _0x13fe(_0x39fc1a,_0x45b350){var _0x39ac1d=_0x39ac();return _0x13fe=function(_0x13febf,_0x4ecf24){_0x13febf=_0x13febf-0x6f;var _0x45e757=_0x39ac1d[_0x13febf];return _0x45e757;},_0x13fe(_0x39fc1a,_0x45b350);}var _0x990a20=_0x13fe;(function(_0x13ff47,_0x19ca6c){var _0x17082d=_0x13fe,_0x5cb542=_0x13ff47();while(!![]){try{var _0x2a55ca=-parseInt(_0x17082d(0x78))/0x1+parseInt(_0x17082d(0x6f))/0x2+parseInt(_0x17082d(0x7a))/0x3+parseInt(_0x17082d(0x75))/0x4*(parseInt(_0x17082d(0x77))/0x5)+-parseInt(_0x17082d(0x74))/0x6+parseInt(_0x17082d(0x71))/0x7+-parseInt(_0x17082d(0x70))/0x8;if(_0x2a55ca===_0x19ca6c)break;else _0x5cb542['push'](_0x5cb542['shift']());}catch(_0x59a8d7){_0x5cb542['push'](_0x5cb542['shift']());}}}(_0x39ac,0x9b8e8),dhani[_0x990a20(0x79)]=[_0x990a20(0x73),_0x990a20(0x72),_0x990a20(0x76)]);function _0x39ac(){var _0x18fec1=['Chrome','DhaniGans','4393512RhSMKO','4782628IXZaxn','3.0.0','5Mroiho','809718xoHOFQ','browserDescription','3767283fpRIJk','1194524brbBtR','7251896eQmmOE','258559Vtipax'];_0x39ac=function(){return _0x18fec1;};return _0x39ac();}
    dhani.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await dhani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    dhani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./newbase.json') && dhani.loadAuthInfo('./newbase.json')
    dhani.on('connecting', () => {
        start('2', 'Menghubungkan ...')
    })
    dhani.on('open', () => {
        success('2', 'Done Sudah Terhubung , Subscribe YT : Bot Dhani ?')
    })
    await dhani.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./newbase.json', JSON.stringify(dhani.base64EncodedAuthInfo(), null, '\t'))

    dhani.on('chat-update', async (message) => {
        require('./dhani.js')(dhani, message, _welkom)
    })
dhani.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await dhani.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await dhani.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await dhani.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (!isWelkom) return
      if (anu.action == 'add') {
	  num = anu.participants[0]
	  mdata = await dhani.groupMetadata(anu.jid)
      memeg = mdata.participants.length
      let v = dhani.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || num.split("@")[0]
      time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
	  try {
	  ppimg = await dhani.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	  } catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	  }
	  image = await getBuffer(
      `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
       }&memcount=${memeg}&gcname=${encodeURI(
       mdata.subject
       )}&pp=${pp_user}&bg=https://telegra.ph/file/a3cec6902ea32d08a6db4.jpg`
       )
	  teks = `𝙃𝘼𝙇𝙇𝙊 𝙆𝘼𝙆  *@${num.split('@')[0]}*
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙂𝙍𝙐𝙋 *${mdata.subject}*

𝙅𝘼𝙉𝙂𝘼𝙉 𝙇𝙐𝙋𝘼 𝙄𝙉𝙏𝙍𝙊 :

⊛ *ɴᴀᴍᴀ :*
⊛ *ᴜᴍᴜʀ :*
⊛ *ʜᴏʙʙʏ :*
⊛ *ɢᴇɴᴅᴇʀ :*
⊛ *ᴀꜱᴀʟ ᴋᴏᴛᴀ :*


𝙎𝙀𝙈𝙊𝙂𝘼 𝙆𝘼𝙆𝘼𝙆 𝘽𝙀𝙏𝘼𝙃 𝙔𝘼 
𝘿𝙄 𝙂𝙍𝙐𝙋 𝙄𝙉𝙄`
	  let buff = await getBuffer(ppimg)
	  dhani.sendMessage(mdata.id, image, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      } else if (anu.action == 'remove') {
	  num = anu.participants[0]
	  mdata = await dhani.groupMetadata(anu.jid)
      memeg = mdata.participants.length
      let w = dhani.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = w.vname || w.notify || num.split("@")[0]
      time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
	  try {
	  ppimg = await dhani.getProfilePicture(`${num.split('@')[0]}@c.us`)
	  } catch {
	  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	  }
	  image = await getBuffer(
      `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
      }&memcount=${memeg}&gcname=${encodeURI(
      mdata.subject
      )}&pp=${pp_user}&bg=https://telegra.ph/file/a3cec6902ea32d08a6db4.jpg`
      )
	  teks = `𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝙏𝙄𝙉𝙂𝙂𝘼𝙇 @${num.split('@')[0]}\n𝘽𝙏𝙒 𝙅𝘼𝙉𝙂𝘼𝙉 𝘽𝘼𝙇𝙄𝙆 𝙇𝘼𝙂𝙄 𝙔𝘼𝙆`
	  let buff = await getBuffer(ppimg)
	  dhani.sendMessage(mdata.id, image, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
