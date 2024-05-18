const express = require('express');
const path = require('path');
const app = express();
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('sectionOpen', (sectionId) => {
    console.log(`Section ${sectionId} opened`);
})
// Middleware buat serve static files (CSS, JS, Images, etc.)
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use(express.static(path.join(__dirname, 'public')));

// Route buat halaman HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res)=> {
    res.sendFile(path.join(__dirname,  'public', 'index.html'))
});
// Jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servernya jalan :)`));