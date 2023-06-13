import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import  { uploadFileToIPFS }  from './pinata.js'
import { useContext } from 'react'
import { Url_data } from './UrlContext.js'



function userUploadVideo() {

  const [video, setVideo] = useState('');
  const {url,setUrl} = useContext(Url_data); 

  async function uploadVideo(){
    const videoUpload = await uploadFileToIPFS(video);
    console.log(videoUpload.pinataURL);
    setUrl(videoUpload.pinataURL)
 }

 useEffect(() => {
  if(url) {
    const videoElement = document.getElementById('video');  
    videoElement.src = url;
  }
}, [url])
  return (<div> 
<input type="file" onChange={(e) => setVideo(e.target.files[0])} />
<button onClick={uploadVideo}>Upload</button>

<video id="video" controls></video>

</div>
    )
}

export default userUploadVideo