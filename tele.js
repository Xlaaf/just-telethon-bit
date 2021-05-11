/** @type {typeof import('telegraf').Telegraf} */
const Telegraf = require('telegraf');
const axios = require('axios')

const bot = new Telegraf('1791149445:AAHylIpRoDM9FhGDGX8kCTjgOmlMretiI90')

let lolkey = '2e0da1f78d1721134b21816d'
let zeks = 'farihdzaky'
let pais = 'Tester'
let xteam = '16f8d8e56b274ea1'
let zhirr = 'zahirgans'

bot.use((ctx, next) => {
  if(ctx.updateSubTypes[0] == "text"){
    console.log("[ @"+ctx.from.username+" ]  User Mengirim Pesan : "+ctx.message.text);
  }else{
    console.log("[ @"+ctx.from.username+" ]  User Mengirim : "+ctx.updateSubTypes[0]);
  }
  next();
})

bot.hears('hai', (ctx) => ctx.reply('Hai Juga'))
bot.hears('assalamualaikum', (ctx) => ctx.reply('waalaikumsalam'))


bot.command("start", ctx => {
    ctx.reply("Halo "+ctx.from.first_name);
    ctx.reply("Bagaimana Kabar Mu?",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Menu', callback_data: 'menu'},
                ]
            ]
        }
    })
})
                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
bot.action('menu', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    ctx.reply('──────ᕙᕗ 𝓜𝓮𝓷𝓾 𝓚𝓾𝓻𝓪𝓼𝓪𝔀𝓪 𝓑𝓸𝓽 ᕙᕗ ──────\n\n──────ᕙᕗ 𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝕸𝖊𝖓𝖚 ᕙᕗ ──────\n1./yta (link)\n2./tiktok (nowm) (link video)\n3./ytsearch (judul)\n4./ytv (link)\n5./tiktokmsc (linkvideo)\n6./igdl (link)\n\n──────ᕙᕗ 𝓣𝓮𝔁𝓽 𝓜𝓪𝓴𝓮𝓻 ᕙᕗ ──────\n1./lightext (text)\n2./text3dbox (text)\n3./grafiti (text)\n4./nulis (text)\n5./ff (text)\n6./warzone (text)\n7./maker (text)\n8./maker1 (text)\n9./bp (text)\n10./greenneon (text)\n11./qrcode\n\n──────ᕙᕗ 𝓘𝓷𝓯𝓸𝓻𝓶𝓪𝓼𝓲  ᕙᕗ ──────\n1./wikipedia (pencarian)\n2./kbbi (pencarian)\n3./infogempa\n4./merdeka\n5./fakta\n6./jadwalsholat (kota)\n7./brainly (pencarian)\n8./quran (nomor surah)\n9./cuaca (kota)\n\n──────ᕙᕗ 𝓡𝓪𝓷𝓭𝓸𝓶  ᕙᕗ ──────\n1./shorturl (link)\n2./randomquotes\n3./quotes\n4./lirik (lagu)\n5./chord (lagu)\n6./tinyurl (link)\n7./font (text)\n8./font2 (text)\n9./meme\n10./darkjokes\n\n──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴 ᕙᕗ ──────\n1./github (username)\n2./igstalk  (username)\n\n──────ᕙᕗ Source Code ᕙᕗ ──────\n https://bit.ly/3vOIORq')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                             
bot.command('menu', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    ctx.reply('──────ᕙᕗ 𝓜𝓮𝓷𝓾 𝓚𝓾𝓻𝓪𝓼𝓪𝔀𝓪 𝓑𝓸𝓽 ᕙᕗ ──────\n\n──────ᕙᕗ 𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝕸𝖊𝖓𝖚 ᕙᕗ ──────\n1./yta (link)\n2./tiktok (nowm) (link video)\n3./ytsearch (judul)\n4./ytv (link)\n5./tiktokmsc (linkvideo)\n6./igdl (link)\n\n──────ᕙᕗ 𝓣𝓮𝔁𝓽 𝓜𝓪𝓴𝓮𝓻 ᕙᕗ ──────\n1./lightext (text)\n2./text3dbox (text)\n3./grafiti (text)\n4./nulis (text)\n5./ff (text)\n6./warzone (text)\n7./maker (text)\n8./maker1 (text)\n9./bp (text)\n10./greenneon (text)\n11./qrcode\n\n──────ᕙᕗ 𝓘𝓷𝓯𝓸𝓻𝓶𝓪𝓼𝓲  ᕙᕗ ──────\n1./wikipedia (pencarian)\n2./kbbi (pencarian)\n3./infogempa\n4./merdeka\n5./fakta\n6./jadwalsholat (kota)\n7./brainly (pencarian)\n8./quran (nomor surah)\n9./cuaca (kota)\n\n──────ᕙᕗ 𝓡𝓪𝓷𝓭𝓸𝓶  ᕙᕗ ──────\n1./shorturl (link)\n2./randomquotes\n3./quotes\n4./lirik (lagu)\n5./chord (lagu)\n6./tinyurl (link)\n7./font (text)\n8./font2 (text)\n9./meme\n10./darkjokes\n\n──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴 ᕙᕗ ──────\n1./github (username)\n2./igstalk  (username)\n\n──────ᕙᕗ Source Code ᕙᕗ ──────\n https://bit.ly/3vOIORq')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                             
bot.command('infogempa', (ctx) => {
    ctx.reply('Tunggu Sebentar Saya Sedang Mencari Info.....')
    axios.get('https://mhankbarbar.herokuapp.com/api/infogempa')
    .then(res => {
        // console.log(res);
        ctx.reply("📍 Lokasi : "+res.data.lokasi+"\n🔽 Kedalaman : "+res.data.kedalaman+"\n📌 Koordinat : "+res.data.koordinat+"\n🔴 Magnitude : "+res.data.magnitude+"\n🔵 Potensi : "+res.data.potensi+"\n⏰ Waktu : "+res.data.waktu);
    }).catch(e => {
         console.log(e);
    })
})

bot.command('text3dbox', ctx => {
    ctx.reply('Mohon Menunggu....')
    let teks1 = ctx.message.text;
    let def = teks1.split("text3dbox ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('http://api.zeks.xyz/api/text3dbox?apikey='+zeks+'&text='+buku2)
})

bot.command('wikipedia', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("wikipedia ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://alfians-api.herokuapp.com/api/wiki?q='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(`Ditemukan :${res.data.result}`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('shorturl', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("shorturl ");
    inputArray.shift();
              message = inputArray.join();                                              
    axios.get('http://public-restapi.herokuapp.com/api/bitly-shortener?url='+message)
    .then(res => {
         //console.log(res);
         let la = res.data.result
         ctx.reply(`
┣⊱ Url : ${res.data.long_url}
┣⊱ Short : ${res.data.link}
`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('lightext', ctx => {
    ctx.reply('Tunggu.....')
    let teks1 = ctx.message.text;
    let def = teks1.split("lightext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/lithgtext?text='+buku2+'&apikey='+zeks)
    .then(res => {
    ctx.replyWithPhoto(res.data.result)
    })
})

bot.command('grafiti', ctx => {
    ctx.reply('Tunggu...')
    let teks1 = ctx.message.text;
    let def = teks1.split("grafiti ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/grafiti?text='+buku2+'&apikey='+zeks)
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})

bot.command('quotes', (ctx) => {
    axios.get('https://mhankbarbar.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('randomquotes', (ctx) => {
    axios.get('http://docs-jojo.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('kbbi', (ctx, args) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
          message = inputArray.join(" ");

    //console.log
    axios.get('https://mnazria.herokuapp.com/api/kbbi?search='+message)
    .then(res => {
        //console.log(res.data.search);
        ctx.reply("Ditemukan : \n"+res.data.result)
    })
}) 

bot.command('nulis', (ctx) => {
    let teks = ctx.message.text;
    let abc = teks.split("nulis ");
    abc.shift();
        fgah = abc.join(" ");
        //console.log(message)                                                                                                                                                                                                       
        ctx.replyWithPhoto('http://api.zeks.xyz/api/nulis?text='+fgah+'&apikey='+zeks)
})                                                                                                 

bot.command('tiktokp', ctx => {
    let input = ctx.message.text;
    let inputArray = input.split("tiktokp ");
    inputArray.shift();
              message = inputArray;
              //console.log(inputArray)
    axios.get('https://api.vhtear.com/tiktokprofile?query='+message+'&apikey=AW62938KK46292gJ73639h')
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result.picture)
         ctx.reply(`
┏━━❉ *TIKTOK* ❉━━━┓
┣⊱ Nama : ${res.data.result.title}
┣⊱ Username : ${message}
┣⊱ Folow : ${res.data.result.follow}
┣⊱ Follower : ${res.data.result.follower}
┣⊱ Like : ${res.data.result.like_count}
┣⊱ Post : ${res.data.result.video_post}
┣⊱ Verified : ${res.data.result.verified}
┣⊱ Bio : ${res.data.result.bio}
┣⊱ Deskripsi : ${res.data.result.description}
┗━━━━━━━━━━━━━━━━
         `);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('ytsearch', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Tolong Kasih Kata Yang Benar, Contoh: /ytsearch boboiboy"
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                                                                                    
        const link = await axios.get ('http://lolhuman.herokuapp.com/api/ytsearch?apikey='+lolkey+'&query='+messager)
        const { result } = link.data
        const hasil = result.slice(0, 3)
        hasil.forEach(async(res) => {
        ctx.replyWithPhoto({url: res.thumbnail}, {caption: `──────ᕙᕗ 𝐒𝐞𝐚𝐫𝐜𝐡  ᕙᕗ ────── 
                                                                                                                                                                                                 
ᕙᕗ Judul: ${res.title}
ᕙᕗLink: https://www.youtube.com/watch?v=${res.videoId}
ᕙᕗ Tanggal Unggahan: ${res.published}
ᕙᕗ Penonton: ${res.views}
`})
         
                    })
        }catch(e){
        }
}
})


bot.command('github', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Contoh: /github python" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            const link = await axios.get('https://pencarikode.xyz/stalk/github?q='+messager+'&apikey='+pais)
            const data = link.data.result
            ctx.replyWithPhoto({url: data.avatar_url}, {caption: `──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴  ᕙᕗ ──────
ᕙᕗ Pengguna: ${data.username}
ᕙᕗ Nama: ${data.name}
ᕙᕗ Id: ${data.id}
ᕙᕗ Url: ${data.url}
ᕙᕗ Tipe: ${data.type}
ᕙᕗ Perusahaan: ${data.company}
ᕙᕗ Blog: ${data.blog}
ᕙᕗ Lokasi: ${data.location}
ᕙᕗ Email: ${data.email}
ᕙᕗ Biodata: ${data.bio}
ᕙᕗ Twitter: ${data.twitter_username}
ᕙᕗ Repo: ${data.public_repos}
ᕙᕗ Pengikut: ${data.followers}
ᕙᕗ Diikuti: ${data.following}
ᕙᕗ Bergabung Pada: ${data.created_at}
`})
        }catch{
            ctx.reply(`Rusak!`)
        }  
    }
})
bot.command('igstalk', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Contoh: /igstalk xlaaff" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                        
        const link = await axios.get('https://pencarikode.xyz/stalk/instagram?username='+messager+'&apikey='+pais)
        const data = link.data.result.user                                                                   
        ctx.replyWithPhoto({url: data.hd_profile_pic_versions[0].url}, {caption: `──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴  ᕙᕗ ──────
        
ᕙᕗ Username: ${data.username}
ᕙᕗ Nama: ${data.full_name}
ᕙᕗ Terverifikasi: ${data.is_verified ? 'Ya' : 'Tidak'}
ᕙᕗ Media: ${data.media_count}
ᕙᕗ Pengikut: ${data.follower_count}
ᕙᕗ Diikuti: ${data.following_count}
ᕙᕗ Biodata: ${data.biography}
ᕙᕗ Kategori: ${data.category ? `${data.category}` : null}
ᕙᕗ Url Biodata: ${data.external_url ?  `${data.external_url}` : null }
ᕙᕗ Total Igtv: ${data.total_igtv_videos}
ᕙᕗ Bisnis: ${data.is_business ? 'Ya' : 'Tidak'}
ᕙᕗ WhatsApp: ${data.whatsapp_number ? `${data.whatsapp_number}` : null}
`})
        }catch{
            ctx.reply(`Tidak Ditemukan`)
        }
    }
})

  
bot.command('merdeka', async (ctx) => {
    try{                                                                                                                                                                                              
    const link = await axios.get (`https://pencarikode.xyz/news/merdeka?apikey=`+pais)
    const linke = link.data.result
    const random = linke[Math.floor(Math.random() * (linke.length))]                                                                                                                                                                                           
    ctx.replyWithPhoto({ url: random.thumb}, { caption: `──────ᕙᕗ 𝓝𝓮𝔀𝓼 ᕙᕗ ──────\n\nᕙᕗ Judul: ${random.judul}\n\nᕙᕗ Diunggah: ${random.uptime}\n\nᕙᕗ Link : ${random.link}`})
    
    }catch(e){
    }
})                                                                       

bot.command('lirik', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("lirik ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://mnazria.herokuapp.com/api/jooxnich?search='+message)
    .then(res => {
         //console.log(res);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
             ctx.reply(`Lirik : ${res.data.lirik}\n\n`)
    }).catch(e => {
         console.log(e);
   })
})

bot.command('fakta', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("fakta ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://videfikri.com/api/fakta/')
    .then(res => {
         //console.log(res);
         ctx.reply('Cek fakta\n'+res.data.result.fakta); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('igdl', ctx => {
    let input = ctx.message.text;
    ctx.reply('Mohon  Tunggu.....')
        let inputArray = input.split(" ");
        inputArray.shift();
        let link = inputArray.join(" ")
    axios.get('http://lolhuman.herokuapp.com/api/instagram?apikey='+lolkey+'&url='+link)
    .then(res => {
    ctx.replyWithVideo(res.data.result)
    })
})

bot.command('ff', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "tOLONG tAMBAHKAN tEKS, CoNtOh: /ff burik"
        ctx.reply(message)
    } else{
        inputArray.shift();
        burik = inputArray.join(" ")
        try{                                                                                                                                                                                                                      
            ctx.replyWithPhoto({url: 'http://lolhuman.herokuapp.com/api/ephoto1/freefire?apikey='+lolkey+'&text='+burik})
        }catch(e){
        }
    }
})

bot.command('warzone', async (ctx) => {
    let input = ctx.message.text  
    const peak = input.trim().substring(input.indexOf(' ') + 1)
    if (peak.length >= 2) {
    const jaki = peak.split(`|`)[0]
    const gans = peak.split(`|`)[1]
    if(!jaki, !gans){
        ctx.reply('Tambahkan Teks contoh: /warzone jaki|gans')
    }else{                                                                                                                                                                                                                                                           
    ctx.replyWithPhoto({url: 'http://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey='+lolkey+'&text1='+jaki+'&text2='+gans})
        }
    }else{
        ctx.reply(`Ikuti Contoh Ini /arzone jaki|gans`)
    }
})
    
bot.command('cuaca', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("cuaca ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://api.xteam.xyz/cuaca?kota='+pesan+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         ctx.reply(`Kota : ${res.data.message.kota}\nHari : ${res.data.message.hari}\nCuaca: ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nSuhu : ${res.data.message.suhu}\nTekanan : ${res.data.message.pressure}\nKelembapan : ${res.data.message.kelembapan}\nAngin : ${res.data.message.angin}`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('quran', (ctx) => {
    ctx.reply("Tunggu..")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");
    
    axios.get('https://hadi-api.herokuapp.com/api/quran?no='+message)
    .then(res => {
        //console.log(res.data.result.list);                                                                                         
        ctx.reply("Surah : "+res.data.result.surah+"\nAyat: "+res.data.result.ayat+"\nTerjemahan: "+res.data.result.terjemahan)
    }).catch(e => {
        console.log(e);
    })
})

bot.command('chord', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("chord ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://alfians-api.herokuapp.com/api/chord?q='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('brainly', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("brainly ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.xteam.xyz/brainly?soal='+message+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);
         ctx.reply('Soal:'+res.data.soal+'\nJawaban:\n'+res.data.jawaban); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('tinyurl', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("tinyurl ");
    inputArray.shift();
              pesan = inputArray.join();                                              
    axios.get('https://zahirr-web.herokuapp.com/api/short/tiny?url='+pesan+'&apikey='+zhirr)
    .then(res => {
         //console.log(res);
         let la = res.data.result
         ctx.reply(`
┣⊱ Short : ${res.data.result.link}
`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('jadwalsholat', (ctx) => {
    ctx.reply("Tunggu..")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");
    
    axios.get('https://api.xteam.xyz/jadwalsholat?kota='+pesan+'&APIKEY='+xteam)
    .then(res => {
    	//console.log(res)
        ctx.reply("Kota : "+res.data.Kota+"\nTanggal: "+res.data.Tanggal+"\nSubuh: "+res.data.Subuh+"\nDzuhur: "+res.data.Dzuhur+"\nAshar: "+res.data.Ashar+"\nMaghrib: "+res.data.Magrib+"\nIsya: "+res.data.Isha)
    }).catch(e => {
        console.log(e);
    })
})

bot.command('jadwaltv', (ctx) => {
    ctx.reply("....")
    axios.get('http://docs-jojo.herokuapp.com/api/jadwaltvnow')
    .then(res => {
        //console.log(res.data.result);
        ctx.reply("Jam : "+res.data.result.jam+"\nJadwal : \n"+res.data.result.jadwalTV)
    }).catch(e => {
        console.log(e);
    })
})

bot.command('bp', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("bp ");
    def.shift();
        pesan = def.join(" ");

    ctx.replyWithPhoto('https://api.zeks.xyz/api/logobp?text='+pesan+'&apikey='+zeks)
})

bot.command('qrcode', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("qrcode ");
    def.shift();
        pesan = def.join(" ");

    ctx.replyWithPhoto('https://api.zeks.xyz/api/qrencode?apikey='+zeks+'&text='+pesan)
})

bot.command('greenneon', ctx => {
    ctx.reply('Please Wait....')
    let teks1 = ctx.message.text;
    let def = teks1.split("greenneon ");
    def.shift();
        pesan = def.join(" ");

    ctx.replyWithPhoto('https://api.zeks.xyz/api/gneon?apikey='+zeks+'&text='+pesan)
})

bot.command('meme', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("meme ");
    inputArray.shift();

    axios.get('https://api.zeks.xyz/api/memeindo?apikey=apivinz')
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('maker', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("maker ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://zahirr-web.herokuapp.com/api/maker3d?text='+message+'&apikey='+zhirr)
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result.results); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('maker1', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("maker1");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://zahirr-web.herokuapp.com/api/maker3d/no2?text='+pesan+'&apikey='+zhirr)
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result.results); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('font', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("font ");
    inputArray.shift();
             pesan = inputArray.join(" ");

    axios.get('http://hadi-api.herokuapp.com/api/font?teks='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('font2', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("font2 ");
    inputArray.shift();
             pesan = inputArray.join(" ");

    axios.get('http://hadi-api.herokuapp.com/api/font2?teks='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('darkjokes', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("darkjokes ");
    inputArray.shift();

    axios.get('http://hadi-api.herokuapp.com/api/darkjokes')
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('tiktokmsc', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Tolong Sertakan Link, contoh: /tiktokmsc https://vt.tiktok.com/ZSJDd3PqT/"
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                 
        ctx.replyWithAudio({url: `http://lolhuman.herokuapp.com/api/tiktokmusic?apikey=`+lolkey+`&url=`+messager}, {title: '@kurasawabot'})
        }catch(e){
            ctx.reply(`Link tidak ditemukan`)
        }
    }
})

bot.command('tiktok', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("tiktok ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('http://lolhuman.herokuapp.com/api/tiktok?apikey='+lolkey+'&url='+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.result.link);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('yta', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("yta ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://api.zeks.xyz/api/ytmp3?url='+message+'&apikey='+zeks)
    .then(res => {
         //console.log(res);
         ctx.replyWithAudio(res.data.result.url_audio);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('ytv', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("ytv ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://videfikri.com/api/ytmp4/?url='+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.result.urlVideo);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('fbdl', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("fbdl ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://alyx-api.herokuapp.com/api/fb?url='+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.result.hd);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('mediafiredl', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("mediafiredl ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('http://docs-jojo.herokuapp.com/api/mediafire?url='+message)
    .then(res => {
         //console.log(res);
         ctx.reply('Link Sudah Jadi!\n'+res.data.url);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('pintedl', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("pintedl ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('http://docs-jojo.herokuapp.com/api/pinterest?url='+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('jadwaltv', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("jadwaltv ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('http://docs-jojo.herokuapp.com/api/jadwaltv?ch='+message)
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('soundcloud', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("soundcloud ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://api.xteam.xyz/dl/soundcloud?url='+message+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);
         ctx.replyWithAudio(res.data.result.dataurl)
    }).catch(e => {
         console.log(e);
   })
})

bot.command('ssweb', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("ssweb ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://mnazria.herokuapp.com/api/screenshotweb?url='+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithPhoto(res.data.gambar)
    }).catch(e => {
         console.log(e);
   })
})

bot.launch()