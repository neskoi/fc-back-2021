const MAX_SIZE = 500000;
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'public/uploads/', 
    limits: { fileSize: MAX_SIZE },
    filename: function (req, file, cb) {
        const format = file.mimetype.split("/");
        cb(null, `${file.fieldname}-${Date.now()}.${format[1]}`);
    }
});
const upload = multer({storage:storage});

module.exports = upload;
