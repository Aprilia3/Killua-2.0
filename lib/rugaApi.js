const axios = require('axios')
const { fetchJson, fetchText } = require('../utils/fetcher')
const fs = require('fs-extra')
const link = 'https://arugaz.herokuapp.com'
const mehh = 'https://api.i-tech.id/dl/yt?key=eT16a3-P3Gvx4-8JwS8r-N4jEB2-c9VIz4'
const fileyt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_230923.jpg'
const eroryt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_234624.jpg'

const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
let { 
    vhtearkey,
    apiKey,
    keepSave,
    iTechApi
    } = setting


const silver = async (teks) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/splaybutton?text=${teks}&apikey=apivinz`)
	.then(res => {
		resolve(res.data.result)
	})
	.catch(err => {
		reject(err)
	})
	})

const yutub = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/ytmp3/2?url=${url}&apikey=apivinz`)
	.then(res => {
		resolve(res.data.result)
	})
	.catch(err => {
		reject(err)
	})
	})

const nowm = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
      })
      .catch(err => {
        reject(err)
      })
})

const quran = () => new Promise((resolve, reject) => {
	axios.get('https://api.zeks.xyz/api/randomquran')
		.then(res => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
	})

const brainly = async (query) => new Promise((resolve, reject) => {
	axios.get(`https://api.vhtear.com/branly?query=${query}&apikey=${vhtearkey}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
     })

const play = async (lagu) => new Promise((resolve, reject) => {
	axios.get(`https://api.xteam.xyz/dl/ytmp3?url=${lagu}&APIKEY=test`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
	})

const happymod = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=BotWeA`)
    .then((res) => {
        resolve(res.data)
    })
    .catch((err) => {
        reject(err)
    })
})

const toktok = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://api.arugaz.my.id/api/media/tiktok?url=${url}`)
	.then(res => {
	resolve(res.data.result)
	})
	.catch(err => {
		reject(err)
	})
	})

const nowm2 = async (url) => new Promise((resolve, reject) => {
	axios.get(`http://hujanapi.xyz/api/tiktokdl?url=${url}&apikey=vWI9FfcmTlL2yx8`)
	.then(res => {
	resolve(res.data)
})
.catch(err => {
	reject(err)
})
})

const movie = async (url) => new Promise((resolve,reject) => {
	console.log('Get Movie from Query')
	fetchJson(`https://api.zeks.xyz/api/film?q=${url}&apikey=apivinz`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const wp = async (url) => new Promise((resolve, reject) => {
    console.log('Get Story from Wattpad!')
    fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${url}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

const filmapik = async (url) => new Promise((resolve, reject) => {
    console.log('Get Filmapik From Query')
    fetchJson(`https://api.arugaz.my.id/api/media/filmapik/search?query=${url}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

const nhpdf = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/nhentaipdfdownload?query=${query}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
    })
    .catch(err => {
        reject(err)
    })
})

const ig = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://keepsaveit.com/api/?api_key=${keepSave}&url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const gsm = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then(res => {
        if (res.data.error) resolve(res.data.error)
        const swdkp = `*Type Handphone : ${res.data.result.title}*\n\n${res.data.result.spec}`
        resolve(swdkp)
    })
    .catch(err => {
        reject(err)
    })
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Object}
 */
const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://api.vhtear.com/ongoinganoboy&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const ssweb = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/tools/ssweb?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&link=${url}`)
    .then(res => {
        resolve(res)
    })
    .catch(err => {
        reject(err)
    })
})

const listnek = () => new Promise((resolve,reject) => {
	console.log('Getting Nekopoi List')
	fetchJson(`https://api.vhtear.com/nekojavlist&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const cosplay = () => new Promise((resolve,reject) => {
	console.log('Getting Cosplay')
	fetchJson(`https://api.vhtear.com/nekojavcosplay&apikey=${vhtearkey}`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const trend = () => new Promise((resolve, reject) => {
	console.log('Getting Trending Twitter')
	fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})

const twit = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/media/twvid?url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const yt3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.zeks.xyz/api/ytplaymp3?q=${url}&apikey=apivinz`)
    .then(res => {
        resolve(res.data.result)
    })
    .catch(err =>  {
        reject(err)
    })
})

/**
 * Search for IG Story.
 * @param {String} query
 * @returns {Object}
 */
const its = (query) => new Promise((resolve, reject) => {
    console.log('Searching for IG Story...')
    fetchJson(`https://api.vhtear.com/igstory?query=${query}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * 
 * @param {String} query
 * @returns {Object} 
 */
const xsearc = (query) => new Promise((resolve,reject) => {
    console.log('Searching for XXX Videos...')
    fetchJson(`https://api.vhtear.com/xxxsearch?query=${query}&apikey=${vhtearkey}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

/**
 * Search for WhatsApp sticker.
 * @param {String} query 
 * @returns {Object}
 */
const sticker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const fb2 = async (url) => new Promise((resolve,reject) => {
    axios.get(`https://api.arugaz.my.id/api/media/facebook?url=${url}`)
    .then(res => {
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

const fb = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/fbdl?link=${url}&apikey=${vhtearkey}`)
    .then(res => {
        resolve(res.data.result)
    })
    .catch(err => {
        reject(err)
    })
})

/**
 * Get fresh videos from TikTok.
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const kusonime = async (judul) => new Promise((resolve, reject) => {
    axios.get(`https://docs-jojo.herokuapp.com/api/kuso?q=${judul}`)
    .then((res) => {
        const initext = `*Judul :* ${res.data.title}\n*Sinopsis :* ${res.data.sinopsis}\n*Info :* ${res.data.info}\n\n*Link Download* : _${res.data.link_dl}_`
        resolve({link: res.data.thumb, text: initext})
    })
    .catch((err) => {
        reject(err)
    })
})

/**
 * Get weekly zodiac fortune.
 * @param {String} zodiac
 * @returns {Object}
 */
const zodiak2 = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const dewabatch = async (judul) => new Promise((resolve, reject) => {
	axios.get(`https://docs-jojo.herokuapp.com/api/dewabatch?q=${judul}`)
	.then((res) => {
		const textdew = `${res.data.result}\n\nSinopsis: ${res.data.sinopsis}`
		resolve({link: res.data.thumb, text: textdew})
	})
	.catch((err) => {
		reject(err)
	})
})

const simi = (chat) => new Promise((resolve, reject) => {
	console.log('Get Response from Simsumi!')
	fetchJson(`http://simsumi.herokuapp.com/api?text=${chat}&lang=id`)
	.then((result) => resolve(result))
	.catch((err) => reject(err))
})
const maps = async (jalan) => new Promise((resolve, reject) => {
axios.get(`https://mnazria.herokuapp.com/api/maps?search=${jalan}`)
.then((res) => {
	resolve(res.data.gambar)
	})
	.catch((err) => {
		reject(err)
		})
		})

const bokep2 = async () => new Promise((resolve, reject) => {
	axios.get(`${link}/api/indohot`)
	.then((res) => {
		const textv = `Negara: ${res.data.result.country}\nDurasi: ${res.data.result.durasi}\nGenre: ${res.data.result.genre}\nJudul: ${res.data.result.judul}\nLink: ${res.data.result.url}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})

const cekzodiak = async (nama,tgl,bln,thn) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/getzodiak?nama=${nama}&tgl-bln-thn=${tgl}-${bln}-${thn}`)
    .then((res) => {
        const text = `Nama: ${res.data.nama}\nUltah: ${res.data.ultah}\nZodiak: ${res.data.zodiak}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cooltext = async (teks) => new Promise((resolve, reject) => {
	axios.get(`https://api.haipbis.xyz/randomcooltext?text=${teks}`)
	.then((res) => {
		const textc = `Teks: ${res.data.text}\nGambar: ${res.data.image}`
		resolve({link: res.data.image, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const story = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/igstory?query=${query}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) => {
        reject(err)
    })
})

const ig2 = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://docs-jojo.herokuapp.com/api/insta?url=${url}`)
    .then((res) => {
        resolve(res.data)
    })
    .catch((err) => {
        reject(err)
    })
})
const cerpen = async () => new Promise((resolve, reject) => {
	axios.get(`http://docs-jojo.herokuapp.com/api/cerpen`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const cersex = async () => new Promise((resolve, reject) => {
	axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
	.then((res) => { 
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const puisi = async () => new Promise((resolve, reject) => {
	const puiti = ['1','3']
	const ranisi = puiti[Math.floor(Math.random() * puiti.length)]
	axios.get(`${link}/api/puisi${ranisi}`)
	.then((res) => {
		resolve(res.data)
	})
	.catch((err) => {
		reject(err)
	})
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/yta2?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ymp3 = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/ytmp3/2?url=${url}&apikey=apivinz`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://hujanapi.xyz/api/ytdl?url=${url}&apikey=vWI9FfcmTlL2yx8`)
    .then((res) => {
		resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ingfo = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/infoalamat?query=${query}&apikey=${vhtearkey}`)
    .then((res) =>{
        resolve(res.data)
    })
    .catch(err => {
        reject(err)
    })
})

/**
 * Search for movie.
 * @param {String} title
 * @returns {Object}
 */
const film = (title) => new Promise((resolve, reject) => {
    console.log(`Searching for Movie ${title}...`)
    axios.get(`https://api.vhtear.com/downloadfilm?judul=${title}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const neo = async (title) => new Promise((resolve, reject) => {
    console.log(`Searching Anime ${title}`)
    axios.get(`http://docs-jojo.herokuapp.com/api/neonime_search?q=${title}`)
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})


const jam = async (query) => new Promise((resolve, reject) => {
    axios.get(`https://api.i-tech.id/tools/jam?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kota=${query}`)
    .then((res) => {
        resolve(res.data)
    })
    .catch((err) => {
        reject(err)
    })
})

const ymp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://st4rz.herokuapp.com/api/ytv2?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const kbbi = async (url) => new Promise((resolve, reject) => {
    axios.get(`http://enznoire.herokuapp.com/kbbi?kata=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalktt = async (url) => new Promise ((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve(res.data.error)
        const ttxt = `*User :* ${res.data.result.username}\n*Nama :* ${res.data.result.title}\n*Verified :* ${res.data.result.verified}\n*Deskripsi :* ${res.data.result.description}\n*Bio :* ${res.data.result.bio}\n*Followers :* ${res.data.result.follower}\n*Following :* ${res.data.result.follow}\n*Video Post :* ${res.data.result.video_post}\n*Total Like :* ${res.data.result.like_count}\n\n*Url Account :* ${res.data.result.url_account}`
        resolve(ttxt)
    })
    .catch((err) => {
        reject(err)
    })
})

const stalktwit = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/media/stalktwitt?user=${url}`)
    .then((res) => {
        if (res.data.error) resolve(res.data.error)
        const ttas = `*Username :* ${res.data.username}\n*Full Name :* ${res.data.fullname}\n*Follower :* ${res.data.follower}\n*Following :* ${res.data.following}\n*Bio :* ${res.data.descText}\n*Bio URL :* ${res.data.descUrl}`
        resolve(ttas)
    })
    .catch((err) => {
        reject(err)
    })
})

const stikig = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/igstalk?username=${url}&apikey=apivinz`)
	.then((res) => {
		if (res.data.error) resolve(res.data.error)
		const tuxt = `*Username :* ${res.data.username}\n*Fullname :* ${res.data.fullname}\n*Followers :* ${res.data.follower}\n*Following :* ${res.data.following}\n*Verified Account :* ${res.data.is_verified}\n*Bussiness Account :* ${res.data.is_bussiness}\n*Private Account :* ${res.data.is_private}\n\n*Bio :* ${res.data.bio}`
		resolve(tuxt)
		})
		.catch((err) => {
			reject(err)
	})
    })

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `*Username :* ${res.data.graphql.user.username}\n*Full Name :* ${res.data.graphql.user.full_name}\n*Followers :* ${res.data.graphql.user.edge_followed_by.count}\n*Following :* ${res.data.graphql.user.edge_follow.count}\n*Business Account :* ${res.data.graphql.user.is_business_account}\n*Private Account :* ${res.data.graphql.user.is_private}\n*Verified Account :* ${res.data.graphql.user.is_verified}\n*Blocked From Viewer :* ${res.data.graphql.user.blocked_by_viewer}\n*Link Bio :* ${res.data.graphql.user.external_url}\n*Followed by Viewer :* ${res.data.graphql.user.followed_by_viewer}\n*FB ID :* ${res.data.graphql.user.fbid}\n*Country Block :* ${res.data.graphql.user.country_block}\n*Follows Viewer :* ${res.data.graphql.user.follows_viewer}\n*Has Clips :* ${res.data.graphql.user.has_clips}\n*Has Blocked Viewer :* ${res.data.graphql.user.has_blocked_viewer}\n*Id Account :* ${res.data.graphql.user.id}\n*Highlight Count :* ${res.data.graphql.user.highlight_reel_count}\n*Requested by Viewer :* ${res.data.graphql.user.has_requested_viewer}\n*Business Category Name :* ${res.data.graphql.user.business_category_name}\n*Category :* ${res.data.graphql.user.category_name}\n*Join Instagram Recently :* ${res.data.graphql.user.is_joined_recently}\n*Connected to Facebook :* ${res.data.graphql.user.connected_fb_page}\n*TimeLine Video :* ${res.data.graphql.user.edge_felix_video_timeline.count}\n*Should Show Category :* ${res.data.graphql.user.should_show_category}\n\n*Biography :* ${res.data.graphql.user.biography}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})


/**
 * Create missing person image.
 * @param {String} text1
 * @param {String} text2
 * @param {String} text3
 * @param {String} url
 * @returns {Object}
 */
const missing = (text1, text2, text3, url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson(`https://api.vhtear.com/missingperson?text1=${text1}&text2=${text2}&text3=${text3}&link=${url}&apikey=${vhtearkey}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

const ttpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.vhtear.com/tiktokprofile?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.picture}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const gsmpict = async (url) => new Promise((resolve) => {
    axios.get(`https://api.vhtear.com/gsmarena?query=${url}&apikey=${vhtearkey}`)
    .then((res) => {
        resolve(`${res.data.result.image}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const burpot = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/media/stalktwitt?user=${url}`)
    if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
    resolve(`${res.data.profile}`)
})

const stikigpict = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/igstalk?username=${url}&apikey=apivinz`)
	.then((res) => {
		if (res.data.error) resolve('https://i.ibb.co/pbZB6z7/fc6b621c54fe.jpg')
	resolve(`${res.data.profile_pic}`)
})
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.graphql.user.profile_pic_url_hd}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const quote = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/random/text/quotes`)
    .then((res) => {
        const text = `*Author : Thoriq Azzikra*\n\nQuote : ${res.data.result.quote}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const githubpict = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/githubprofile?username=${url}&apikey=BotWeA`)
	.then((res) => {
        if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.result.avatar}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const github = async (url) => new Promise((resolve, reject) => {
	axios.get(`https://tobz-api.herokuapp.com/api/githubprofile?username=${url}&apikey=BotWeA`)
	.then((res) => {
	const ahaha = `- *Username :* ${res.data.result.username}\n- *Name :* ${res.data.result.name}\n- *Followers :* ${res.data.result.follower}\n- *Following :* ${res.data.result.following}\n- *Location :* ${res.data.result.location}\n- *Twitter Username :* ${res.data.result.twitter_username}\n- *Company :* ${res.data.result.company}\n- *Email :* ${res.data.result.email}\n- *Public Repository :* ${res.data.result.public_repository}\n- *Public Gists :* ${res.data.result.public_gists}\n\n- *Bio :* ${res.data.result.biography}\n- *URL Profile :* ${res.data.result.url}`
        resolve(ahaha)
    })
    .catch((err) => {
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.arugaz.my.id/api/edu/idwiki?query=${url}`)
    .then((res) => {
        resolve(res.data.results)
    })
    .catch((err) =>{
        reject(err)
    })
})

const daerah = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/daerah`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jadwaldaerah = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Jadwal Sholat ${url}\n\nImsyak: ${res.data.Imsyak}\nSubuh: ${res.data.Subuh}\nDzuhur: ${res.data.Dzuhur}\nAshar: ${res.data.Ashar}\nMaghrib: ${res.data.Maghrib}\nIsya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://rest.farzain.com/api/cuaca.php?id=${url}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    .then((res) => {
		if (res.data.respon.cuaca == null) resolve('Maaf daerah kamu tidak tersedia')
        const text = `Cuaca di: ${res.data.respon.tempat}\n\nCuaca: ${res.data.respon.cuaca}\nAngin: ${res.data.respon.angin}\nDesk: ${res.data.respon.deskripsi}\nKelembapan: ${res.data.respon.kelembapan}\nSuhu: ${res.data.respon.suhu}\nUdara: ${res.data.respon.udara}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const chord = async (url) => new Promise((resolve, reject) => {
    axios.t(`http://docs-jojo.herokuapp.com/api/chord?q=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`https://alfians-api.herokuapp.com/nulis?text=${teks}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const artinama = async (nama) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/artinama?nama=${nama}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const cekjodoh = async (nama,pasangan) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/jodohku?nama=${nama}&pasangan=${pasangan}`)
	.then((res) => {
		const textc = `Nama : ${res.data.nama}\nPasangan : ${res.data.pasangan}\nPositif: ${res.data.positif}\nNegatif : ${res.data.negatif}`
		resolve({link: res.data.gambar, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const corona = () => new Promise((resolve, reject) => {
    axios.get(`https://api.terhambar.com/negara/World`)
    .then((res) => {
        const sushi = `Info Covid-19 ${res.data.negara}\n\n*Kasus Baru :* ${res.data.kasus_baru}\n*Total Kasus :* ${res.data.total}\n*Sembuh :* ${res.data.sembuh}\n*Penanganan :* ${res.data.penanganan}\n*Meninggoy :* ${res.data.meninggal}\n*Meninggal Baru :* ${res.data.meninggal_baru}\n\n*Update :* ${res.data.terakhir}`
        resolve(sushi)
    })
    .catch((err) => {
        reject(err)
    })
})

const covidindo = () => new Promise((resolve, reject) => {
	axios.get(`https://api.terhambar.com/negara/Indonesia`)
	.then((res) => {
		const textv = `Info Covid-19 ${res.data.negara}\n\n*Kasus Baru :* ${res.data.kasus_baru}\n*Total Kasus :* ${res.data.total}\n*Sembuh :* ${res.data.sembuh}\n*Penanganan :* ${res.data.penanganan}\n*Meninggoy :* ${res.data.meninggal}\n*Meninggal Baru :* ${res.data.meninggal_baru}\n\n*Update :* ${res.data.terakhir}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})
const bapakfont = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`https://api.zeks.xyz/api/alaymaker?kata=${kalimat}&apikey=apivinz`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const lirik = async (judul) => new Promise((resolve, reject) => {
	axios.get(`https://scrap.terhambar.com/lirik?word=${judul}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})




const instagram = async (url) => new Promise(async (resolve) => {
    const api = `https://api.vhtear.com/instadl?link=${url}&apikey=${vhtearkey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
        }else{
            resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})

/**
 * Get Instagram Metadata
 *
 * @param  {String} url
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    const uri = url.replace(/\?.*$/g, '')
    igGetInfo(uri, {})
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

		

module.exports = {
    ytmp3,
	yutub,
	toktok,
	silver,
    ig,
	quran,
	brainly,
    ymp3,
	nowm,
    stalktwit,
    corona,
    burpot,
    its,
    ymp4,
    insta,
    ytmp4,
    nhpdf,
    stalkig,
    stalkigpict,
    quote,
    wiki,
    daerah,
    jadwaldaerah,
    anoboy,
    cuaca,
    chord,
    happymod,
    tulis,
    film,
    stalktt,
    ttpict,
    sticker,
    wp,
	play,
    ig2,
	artinama,
	trend,
	cekjodoh,
	covidindo,
	github,
	githubpict,
	bapakfont,
	lirik,
    movie,
    zodiak2,
    gsm,
    gsmpict,
    jam,
    twit,
	cerpen,
	cersex,
	puisi,
	cooltext,
	cekzodiak,
    dewabatch,
    neo,
	bokep2,
	kbbi,
	maps,
	instagram,
	filmapik,
    fb,
    fb2,
	nowm2,
    kusonime,
	cosplay,
	listnek,
    ingfo,
    stikig,
    stikigpict,
    asupan,
    yt3,
    ssweb,
    story,
    missing
}
