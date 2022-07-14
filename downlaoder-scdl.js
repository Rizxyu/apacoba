import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let cao = await fetch(APIs.skyz + '/downloader/scdl?link=' + args[0])
let json = await cao.json()
let res = {
creator: 'ANJAY YAHAHAHHAHA HAYU SLEBEEEEWWWWWWWWWWSS SUBREK RIZXYU COYYY FOLLOW IG: rizxyux',
audio: json.link,
img: json.thumb,
judul: json.title
}
m.reply(wait)
console.log(res)
conn.sendFile(m.chat, res.img, 'scdl.jpg', `*SOUNDCLOUD DL*\n*Judul:* ${res.judul}\n*Link:*${res.link}`
, m)
conn.sendFile(m.chat, res.audio, res.judul + '.mp3', null, m)
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(sound(cloud)?(dl)?(cdl)?)$/i
export default handler
