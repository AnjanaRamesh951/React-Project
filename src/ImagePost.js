import { Button } from '@mui/material'
import React, { useState } from 'react'
import { storage, db } from "./firebase"
import firebase from "firebase"

function ImagePost({ username }) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        // this will pick the FIRST file selected (to avoid selecting many)
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                // Error function
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // Post image URL inside db
                        db.collection("posts").add({
                            // timestamp is used here to figure out the time the image was uploaded, which is gonna determine the order in which we display the posts (latest at the top)
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            imageUrl: url,
                            username: username,
                            // imagename: image.name
                        });
                        setProgress(0);

                        setImage(null);






                    });
            }
        );

    };

    return (
        <div>
            <progress value={progress} max="100" />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}


export default ImagePost
