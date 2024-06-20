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

app.get('/experience', (req, res) => {
    let data_kandidat={
        nama : "Eagle",
        umur : 19,
        pekerjaan : "Mahasiswa",
        gaji : 8000000,
        pajak : function(){
            if (data_kandidat.gaji > 10000000) {
                return 'gaji anda kena pajak'
            } else {
                return 'gaji anda tidak kena pajak'
            }
        }
    }
    res.render('exp', {
        data_kandidat: data_kandidat
    })
})
app.get('/karyawan', async (req, res) => {
    const m_karyawan = require('./model/m.karyawan')
    let dataview = {
        semua_karyawan : await m_karyawan.get_semua_karyawan(),
    }
    res.render('karyawan/all', dataview)
})

app.get('/karyawan/detail/:id_karyawan',async (req, res) => {
    const m_karyawan = require('./model/m.karyawan')
    const id = req.params.id_karyawan
    let dataview = {
        detail_karyawan : await m_karyawan.get_satu_karyawan(id),
        Id : req.params.id
    }
    res.render('karyawan/detail', dataview)
})

app.listen(port, () => {
 console.log(`aplikasi sudah siap, buka http://localhost:${port}`)
})
