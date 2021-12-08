// Jika ada bug / eror mohon maklumi om , ini cuma latihan buat sy untuk belajar dikit" soal programing
// Gada reupload" 😏
// Klo mau colong fitur, jgn asal colong bodoh ntr api eror

// Thanks to ( jgn di hapus jamet)
/*
<p> Loli Killers</p>
<p> Rynz</p>
<p> Eka Danuarta</p>
<p> ZeeoneOfc </p>
<p> Creative Time [ For Template ]</p>
<p> ALL HUMAN</p>
*/
__path = process.cwd()

var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var lolkill = db.get("lolkill");
} catch (e) {
	console.log('')
}

var creator = 'HelgaZex' // ubah jadi nama lu
const listkey = ["HelgaZex","HelgaZex","HelgaZex"]; // ubah apikey nya, tambah aja klo mau

var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { getBuffer } = require(__path + '/lib/function.js');

var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    notapikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.sendFile(__path + '/docs/403.html')
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(__path + '/docs/503.html')
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.sendFile(__path + '/docs/403.html')
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})
// cecan
router.get('/cecan/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var buff = result.url
             res.json({
             	author: 'HelgaZex',
                 buff
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// asupan
router.get('/asupan/cecan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/asupan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

//downloader
router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       aexm.igdl(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/igstory', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.username
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       aexm.igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        if(listkey.includes(apikey)){
       aexm.pinterest(q)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       aexm.ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       aexm.youtube(url)
			.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/ytsearch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/download/ytmp4', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/ytv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
//lk21
router.get('/lk21/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/comingsoon', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/tvseries', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/year', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tahun
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/country', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.country
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/lk21/genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tipe
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// film apik
router.get('/filmapik/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/filmapik/kategori', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/filmapik/play', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/filmapik/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// news
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

//photooxy
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_2=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/grafity_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/petterns', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/text_on_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/3d_summer', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/3d_nature', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/wolf_metal', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/wood_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/flower_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/wooden_board', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/tiktok_effect', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text2
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
       if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/double_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/coffee_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/under_grass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/text_on_cup2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/romantic_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/burn_paper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/photooxy/shadow_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
}
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// search api
router.get('/search/joox', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       aexm.chara(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/search/wattpad', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       aexm.wattpad(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/search/komiku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       aexm.komiku(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/search/otaku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       aexm.otakudesu(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/search/anime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// anime
router.get('/anime/searchanime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/anime/samehadaku_genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/anime/samehadaku_page', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/ahegao', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/bdsm', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/blowjob', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/cuckold', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/cum', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/ero', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/femdom', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/foot', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/gangbang', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/glasses', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/hentai', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/hentaigif', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/jahy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/masturbation', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/orgy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/panties', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/pussy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/thighs', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/nsfw/yuri', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

//game
router.get('/game/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       aexm.tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

// other
router.get('/other/ghstalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/repostalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'HelgaZex',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/hilih', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/fakedata', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.country
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/drakorasi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.search
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/translate', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/infotsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/infocuacadunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/cuacabandara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/coviddunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/covidindo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})
router.get('/other/kbbi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.sendFile(__path + '/docs/403.html')
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.sendFile(__path + '/docs/503.html')
})
} else {
  res.sendFile(__path + '/docs/403.html')
}
})

module.exports = router
