import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/8f24dd81957b7f5b990cb.jpg')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - -- — _「 Saya 」_ - — - - - ◂*
*▸ ----「❉Ade Muadibul Muarif❉」----◂*
*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Alloh SWT*
*❉ Kedua Orangtua Saya*
*❉ Semua Keluarga Saya*
*❉ Teman Hidup Saya(@Nche_yah)*
*❉ Seluruh Dosen Kampus STMIK Komputama Majenang*
*❉ Rekan Kampus STMIK Komputama Majenang*
*❉ Rekan Kampus STMIK Komputama Majenang*
*❉ Dan Seluruh Rekan yang Mengenali saya*
    
*▸ - - - —「 Thanks For Suhu BOT 」— - - - ◂*
*❉ WH MODS DEV*
*❉ Kannachan*
*❉ Papah-Chan*
*❉ Johannes*
*❉ Krisna*
*❉ Rlxfly*

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/c/JasBiruLangit?sub_confirmation=1",
    mediaType: "VIDEO",
    description: "https://Instagram.com/adhebawor27", 
    title: 'AMcode27-BOT',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
