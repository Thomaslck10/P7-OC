const multer = require('multer');

const MIME_TYPES ={
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const fileName = file.originalname.split('.');
        const name = fileName[0].split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.webp');
    }
});

module.exports = multer({ storage }).single('image');