const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
// TO DO: need to add static for the folder where uploads will be saved

/** ---------- EXPRESS ROUTES ---------- **/
// TO DO: Add routes here. And then add multer middleware in the route.


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});