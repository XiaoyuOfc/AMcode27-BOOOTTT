import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Jakarta`
    let res = await fetch(API('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!res.ok) throw 'lokasi tidak ditemukan'
    let json = await res.json()
    if (json.cod != 200) throw json
    m.reply(`
Lokasi: ${json.name}
Negara: ${json.sys.country}
Cuaca: ${json.weather[0].description}
Suhu saat ini: ${json.main.temp} °C
Suhu tertinggi: ${json.main.temp_max} °C
Suhu terendah: ${json.main.temp_min} °C
Kelembapan: ${json.main.humidity} %
Angin: ${json.wind.speed} km/jam
    `.trim())
}

handler.help = ['cuaca']
handler.tags = ['internet']
handler.command = /^(cuaca|weather)$/i

export default handler
