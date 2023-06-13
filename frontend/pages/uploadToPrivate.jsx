import React from 'react'
import { uploadFileToIPFS } from './pinata'
import { useState } from 'react'


function uploadToPrivate() {

  
const [file,setFile] = useState('')
const [urls,setUrls] = useState('')


function captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    console.log(file)
    
    setFile(file)}


    async function upload() {
        try{
        const fileUpload = await uploadFileToIPFS(file);
const urls = fileUpload.url;
setUrls(urls); }
catch(error) {  console.log(error) }

    }

  return (
    <div>
            <input type='file' onChange={captureFile} placeholder='file'/>

        <button onClick={upload}>
            UPLOAD 
        </button>
    </div>
  )
}

export default uploadToPrivate
