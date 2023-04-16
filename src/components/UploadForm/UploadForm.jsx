import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const history = useHistory();

    // set the state to the image that we are trying to upload
    const handleFileInputChange = (event) => {
        // console.log('event.target.value:', event.target.value);
        // console.log('event.target.files:', event.target.files);
    
        // using .files so we can access the file properties. 
            // since i'm only allowing a single file to be uploaded, we access it at the 0 index.
        setFile(event.target.files[0]);
    }

    // On submit, do:
        // Post file to the server and store in the "uploads" folder
        // Set the "imageUrl" state with the file that was just uploaded
        // Navigate to the the "UploadList" component, where the image will render
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('Inside onSubmit!!');

        // something that has to do with working with binary data like files which can't be sent as plain text to the server.
            // so we have to put it in a special data format and we do that by appending the file to a FormData object so we can send it to the server
        const data = new FormData();
        data.append('file', file);
       
        axios.post('/upload', data)
            .then((response) => {
                console.log('Response.data:', response.data);
                setImageUrls(response.data.path); // set the "imageUrl" state to the uploaded file.path
                // history.push(`/uploadList/${response.data.path}`); 
                    // navigate to the "UploadList" component with uploaded image URL. DOESN'T WORK idk y! 😭
                    // I was trying to get the image to render at the UploadList component and navigate to there.
            })
            .catch((err) => {
                console.log('Error:', err);
            })
    }

    return (
        <>
        {/* Default data format does not work well for forms that include binary data 
            like file uploads so we need to use: enctype="multipart/form-data" 
            to handle file uploads/binary data. 
            I don't think I actually need this inside my form tag because I am sending data 
            to the server using axios.post and I'm already handling the FormData in the onSubmit().
            ???? maybe someone else can explain this better to me. */}
            
        <form encType="multipart/form-data" onSubmit={onSubmit}>
            <div>
                <input type="file"
                    onChange={handleFileInputChange}
                    name="file" />
                    {/* Must include "name" attr so that Multer knows which input field to look for */}
            </div>
            <button type="submit">Submit</button>
        </form>
         {/* If imageUrls exist then do the next thing: render the uploaded image */}
         {imageUrls && <img src={imageUrls} style={{maxWidth: '300px'}} />}
         </>
    )
}

export default UploadForm;