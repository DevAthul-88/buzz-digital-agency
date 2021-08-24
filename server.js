const express = require('express');
const path = require('path');
const app = express();








app.use(express.static(path.join(__dirname, '/public')))


app.get('/' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'home.html'))
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'about.html'))
})

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'contact.html'))
})

app.get('/pricing' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'pricing.html'))
})

app.get('/services/website' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'website.html'))
})

app.get('/services/mobile' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'mobile.html'))
})


app.get('/services/market' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'market.html'))
})

app.get('/services/video' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'video.html'))
})

app.get('/services/' , function (req, res) {
    res.sendFile(path.join(__dirname, '/public/pages' , 'services.html'))
})


const port = process.env.PORT || 3001

app.listen(port)