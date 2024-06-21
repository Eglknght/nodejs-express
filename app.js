const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: false }))
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

const c_karyawan = require('./controller/c_karyawan')
app.get('/karyawan', c_karyawan.home)

app.get('/karyawan/detail/:id_karyawan', c_karyawan.detail)

app.get('/karyawan/add', c_karyawan.add)

app.post('/karyawan/add-process', c_karyawan.proses)

    // res.redirect('/karyawan')
// }


app.listen(port, () => {
 console.log(`aplikasi sudah siap, buka http://localhost:${port}`)
})
