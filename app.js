const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))


app.post('/:npm/:nama/:prodi', function (req, res) {
    res.json({
        npm: req.params.npm,
        nama: req.params.nama,
        prodi: req.params.prodi,
        univ: req.query.univ,
        place: req.query.place,
        date: req.query.date,
        alamat: req.body.alamat,
        hobi: req.body.hobi,
        buku: req.body.buku,
        matkul: req.body.matkul
    })
})

app.listen(5000)