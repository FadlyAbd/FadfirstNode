const express = require('express');
const path = require('path');
const app = express();
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('sectionOpen', (sectionId) => {
    console.log(`Section ${sectionId} opened`);
})
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send("Halaman tidak ditemukan");
  });
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servernya jalan :)`));