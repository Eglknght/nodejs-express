const m_karyawan = require('../model/m_karyawan')

module.exports = 
{
    home: async (req, res) => {
        let dataview = {
            req : req,
            semua_karyawan : await m_karyawan.get_semua_karyawan(),
        }
        res.render('karyawan/all', dataview)
    },

    detail: async (req, res) => {
        const id = req.params.id_karyawan
        let dataview = {
            detail_karyawan : await m_karyawan.get_satu_karyawan(id),
            Id : req.params.id
        }
        res.render('karyawan/detail', dataview)
    },

    add: async(req, res) => {
        res.render('karyawan/form-add', {info_error: null})
    },
    proses: async(req, res) => {
        let insert = await m_karyawan.add_karyawan(req)
        try {
        if (insert.affectedRows > 0) {
            res.redirect('/karyawan?status=sukses')
        }
        } catch (error) {
            res.render('/karyawan/add', {info_error: error})
    
        }
    }

}