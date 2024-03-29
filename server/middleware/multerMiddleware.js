import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const __dirname = path.resolve();
    const destinationPath = path.join(__dirname, 'client/public/images/uploads');
    cb(null, destinationPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
    storage: storage 
})

export default upload 
