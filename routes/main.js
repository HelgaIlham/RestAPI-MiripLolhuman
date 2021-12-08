__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/docs/home.html')
})

router.get('/docs', (req, res) => {
	res.sendFile(__path + '/docs/dashboard.html')
})
router.get('/docs/asupan', (req, res) => {
	res.sendFile(__path + '/api/asupan.html')
})
router.get('/docs/anime', (req, res) => {
	res.sendFile(__path + '/api/anime.html')
})

router.get('/docs/cecan', (req, res) => {
	res.sendFile(__path + '/api/cecan.html')
})

router.get('/docs/downloader', (req, res) => {
	res.sendFile(__path + '/api/downloader.html')
})

router.get('/docs/filmapik', (req, res) => {
	res.sendFile(__path + '/api/filmapik.html')
})

router.get('/docs/game', (req, res) => {
	res.sendFile(__path + '/api/game.html')
})

router.get('/docs/islam', (req, res) => {
	res.sendFile(__path + '/api/islam.html')
})

router.get('/docs/lk21', (req, res) => {
	res.sendFile(__path + '/api/lk21.html')
})

router.get('/docs/news', (req, res) => {
 	res.sendFile(__path + '/api/news.html')
})

router.get('/docs/nsfw', (req, res) => {
	res.sendFile(__path + '/api/nsfw.html')
})
router.get('/docs/other', (req, res) => {
	res.sendFile(__path + '/api/other.html')
})

router.get('/docs/photooxy', (req, res) => {
 	res.sendFile(__path + '/api/photooxy.html')
})

router.get('/docs/search', (req, res) => {
	res.sendFile(__path + '/api/search.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            namabot: 'AyaaChann',
            namaowner: 'HelgaZex',
            instagram: 'helga_store20',
            github : 'https:\/\/github.com\/HelgaIlham',
        }
    }
    res.json(config)
})

module.exports = router
