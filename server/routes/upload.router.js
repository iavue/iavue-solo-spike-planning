const express = require('express');
const router = express.Router();

// add multer middleware here so it can handle the file upload
const multer = require('multer');

// we need to specify a destination to where the files will be stored, which is the 'uploads' folder
// then also rename the filename so that it will always be unique by using 'Date.now()' which gives the filename the current timestamp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        console.log('file:', file);
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// telling multer to upload a single file from the <input> name 'file' and then 
    // store it in the storage which is the 'uploads/' folder
const upload = multer({ storage }).single('file');


router.post('/', (req,res) => {
    console.log('req.file:', req.file);
    // use the upload middleware to handle the file upload
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
   
});

module.exports = router;