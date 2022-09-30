const {Router} = require('express');
const config = require('config');
const File = require('../models/File');
const router = Router();
const fs = require('fs');

// /api/files/upload
router.post(
    '/upload', 
    async (req, res) => {
        try {
            const file = req.files.file;
            const type = file.name.split('.').pop();
            const dbFile = new File({name: file.name, type});
            await dbFile.save();
        } catch (e) {
            console.log(e);
        }
})

// /api/files/download
router.get(
    '/download',
    async (req, res) => {
        try {
            const file = await File.findOne({_id: req.query.id});
            const path = config.get('filePath') + '\\' + file.name;

            if (fs.existsSync(path)) {
                return res.download(path, file.name)
            }
            return res.status(400).json({ message: 'Ошибка при скачивании файла' })
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Ошибка при скачивании файла' })
        }
})

module.exports = router;