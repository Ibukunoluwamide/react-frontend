import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState("")
    const [uploadedFile, setUploadedFile] = useState("")
    const uploadFile = (e)=>{
        // console.log(e.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e)=>{
            // console.log(reader.result)
            setFile(reader.result)
        }
    }
    const uploadBtn = ()=>{
        // console.log(file)
      axios.post('http://localhost:3000/user/upload',{file})
      .then((result) => {
        console.log(result);
        setUploadedFile(result.data.myImage)
      }).catch((err) => {
        console.log(err);
      });
    }
  return (
    <>
     <div className="">
        <input type="file" name="" id="" onChange={(e)=>uploadFile(e)} />
        <button onClick={uploadBtn}>Upload File</button>
        <div className="">
            <img src={uploadedFile} alt="" className='round w-50'/>
        </div>
     </div>
    </>
  )
}

export default FileUpload