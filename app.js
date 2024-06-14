const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h2>Hello World!</h2>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Nama saya elang</h1>')
})

app.listen(port, () => {
 console.log(`aplikasi sudah siap, buka http://localhost:${port}`)
})