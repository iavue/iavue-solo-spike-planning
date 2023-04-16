# Solo Spike

## Synopsis: 

Create File Upload in a React app using Multer and render the file (image).

## Deliverable: 

Research React file upload using Multer
Read the Multer documentation to understand how it works and how to set it up.
Watch tutorials on React File Uploads.
Create a new React app 
Install Multer and Express
Add proxy to package.json
Other dependencies that should be considered for installation:
Axios
React-Router-Dom
Nodemon
Set up server.js with Multer middleware with the appropriate configuration: destination folder and file name. 
Create a post route in server.js that uses the upload middleware to handle where and how the file should be stored. Then send the file to the client. 
On client side, create a component that will have an input field type “file”. Set the state to the file that was uploaded and also on submit, post the file to the server once the file is put in to a special data format. Once the response comes back from the server, set the state to response.data.path. Then render the <img> tag with the src as the state.

