import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({setProfile_pic}) => {
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfile_pic(imageUrl);
  };
    const navigate=useNavigate()
  return (
    <div className='login'>
      <div className='box-login'>
      <h1>Sign Up</h1>
      <div className="email" ><label>FullName</label>  <input type="text" name=""  placeholder="FullName" /></div>
            <div className="email" ><label>EMAIL</label>  <input type="email" name=""  placeholder="Email adress"  /></div>
            <div className="password"><label>PASSWORD</label>  <input type="password" name=""  placeholder="Password"/></div>
            <div className='upload'><label>Upload Your Photo</label><input type="file" id='myFile' accept="image/*" onChange={handleImageChange}/></div>
            <div className="btn" onClick={()=>navigate("/main")}><input type="button" value="SING IN"/></div>
      </div>
    </div>
  )
}

export default Login



