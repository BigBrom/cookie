const express = require('express')
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 8080
const app = express()

app.use(cookieParser())

app.get('/', function (req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    console.log('ip: ', ip);
    
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies.cookieName)
    
    res.cookie('cookieName','hello world', { maxAge: 900000 })
    res.send('hello world')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
