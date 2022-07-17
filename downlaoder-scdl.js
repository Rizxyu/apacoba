import { Spotify } from "spotifydl-core"

let handler = async (m, { conn, args, usedPrefix, command }) => {

const spotify = new Spotify({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
})


let kp = await spotify.getTrack("https://open.spotify.com/track/2lCPDg2EWErPYdO3ItPUdH?si=G8L5QQOxQmiJgfhdYBLOuw&utm_source=copy-link&context=spotify%3Aplaylist%3A37i9dQZF1DWWY64wDtewQt")

let kp2 = await spotify.downloadTrack("https://open.spotify.com/track/2lCPDg2EWErPYdO3ItPUdH?si=G8L5QQOxQmiJgfhdYBLOuw&utm_source=copy-link&context=spotify%3Aplaylist%3A37i9dQZF1DWWY64wDtewQt")

var res = {
creator: "Follow IG: rizxyux",
judul: kp.name,
artis: kp.artists,
album: kp.album_name,
rilis: kp.realese_date,
thumb: kp.cover_url,
audio: kp2
}

console.log(res)
m.reply(wait)
conn.sendFile(m.chat, res.thumb, res.judul +'.jpg', `*SPOTIFY DOWNLOADER*
\n*Judul:* ${res.judul}
*Artis:* ${res.artis}
*Album:* ${res.album}
*Dipublish:* ${res.rilis}

Support Me https://trakteer.id/rizxyugnxng`, m)

await conn.sendFile(m.chat, res.audio, res.judul + ".mp3", null, m, null, { asDocument: true})
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(sound(cloud)?(dl)?(cdl)?)$/i
export default handler
