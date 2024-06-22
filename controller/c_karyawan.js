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
            res.redirect('/karyawan?status=addsukses')
        }
        } catch (error) {
            res.render('/karyawan/add', {info_error: error})
    
        }
    },
    edit: async(req, res) => {
        const id = req.params.id_karyawan
        let dataview = {
            detail_karyawan : await m_karyawan.get_satu_karyawan(id),
            info_error: null
        }
        res.render('karyawan/form-edit', dataview)
    },
    proses_edit: async(req, res) => {
        let update = await m_karyawan.edit_karyawan(req)
        try {
            if (update.affectedRows > 0) {
                res.redirect('/karyawan?status=editsukses')
            }
        } catch (error) {
            console.log(error)
            res.redirect('/karyawan?status=editgagal')
    
        }
    },

}