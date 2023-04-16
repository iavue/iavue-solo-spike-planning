const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
// TO DO: require the uploadRouter
const uploadRouter = require('./routes/upload.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
// TO DO: need to add express.static for the folder where uploads will be saved
app.use('/uploads', express.static('uploads')); 
    // need this so that client can access images so let express serve images as static files and everyone can view them

/** ---------- EXPRESS ROUTES ---------- **/
// TO DO: Add routes here. And then add multer middleware in the route.
app.use('/upload', uploadRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});