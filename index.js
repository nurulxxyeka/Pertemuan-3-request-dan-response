const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
    res.send(`Hari ini kita puasa`);
});

// Params
app.get('/book/:penerbit/:thTerbit', (req, res) => {
    const thTerbit = req.params.thTerbit;
    const penerbit = req.params.penerbit;
    res.send(`Book ini telah terbit oleh: ${penerbit} di tahun: ${thTerbit} telah ready`);
});

// Params
app.get('/book/:thTerbit', (req, res) => {
    const thTerbit = req.params.thTerbit;
    res.send(`Book ini telah terbit pada tahun: ${thTerbit} telah ready`);
});

// Query
app.get('/get-by-thTerbit', (req, res) => {
    const thTerbit = req.query.thTerbit;
    
    res.send(`Book yang telah terbit pada Tahun: ${thTerbit} telah ready`);
}); 

// Query2
app.get('/get-penerbit', (req, res) => {
    const penerbit = req.query.penerbit;
    const thTerbit = req.query.thTerbit;
    
    res.send(`Book yang telah di terbitkan oleh : ${penerbit} pada Tahun: ${thTerbit} telah ready`);
}); 

// Body parsing middleware
app.use(express.json());

// POST untuk menambahkan buku baru
app.post('/book', (req, res) => {
    const penerbit = req.body.penerbit;
    const thTerbit = req.body.thTerbit;
    const tema = req.body.tema;

    const msg = {
        status: "berhasil",
        data: { "penerbit": penerbit, "Tahun": thTerbit, "tema": tema }
    };

    res.send(msg);
});


app.delete('/', (req, res) => {
    res.send(`Data telah dihapus`);
});

app.post('/', (req, res) => {
    res.send(`Data telah diperbarui`);
});

app.listen(port, () => {
    console.log(`Server telah tersambung pada port: ${port}`);
});
