const { name } = require('ejs')
const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about/:name', (req, res) => {
    res.render('about', {name: req.params.name})
})

app.listen(port, () => {
 console.log(`aplikasi sudah siap, buka http://localhost:${port}`)
})