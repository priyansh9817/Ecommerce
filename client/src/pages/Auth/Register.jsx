import React, { useState } from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import axios from "axios"
// react notificatio
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'   // htmlFor navigate aab hm chate hai register karte hi login page pe redirect ho to iska use karete hai ye ek react hook hai  
import "../../styles/Authstyles.css";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")
  const [question, setquestion] = useState("")
  const  navigate =  useNavigate()   // yaha navigate variable iss liye banye hai ki jab form submit karte hi login page pe redirect ho jaaye 
  // function for form handlings 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name,Email,Password,Address,Phone)
    // toast.success('Register suggesfully')   this before connecting frontend
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, { name, email, password, phone, address,question });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login");
      }
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('something went error ')
    }

  };
  return (
    <Layouts title='Register - Ecommerce App'>
      <div className="form-container ">
      <div className='register'>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text"
              value={name} // use for usestate jo value ko likhe uske ke liey h 
              onChange={(e) => setName(e.target.value)}// ye bhi 
              className="form-control"
              id="exampleInputEmail1" placeholder="Enter your name" aria-describedby="emailHelp" required />

          </div>
          <div className="mb-3">
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control"  placeholder="Enter your email" aria-describedby="emailHelp" required   autoComplete="username"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control"  placeholder="Enter your password"  required  autoComplete='current-password'/>

          </div>
          <div className="mb-3">
            <input type="phone" value={phone} onChange={(e) => setphone(e.target.value)} className="form-control"  placeholder='Enter Your phone number' required />
          </div>
          <div className="mb-3">
            <input type="address" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control"  placeholder='Enter Your Address' required />
          </div>
          <div className="mb-3">
            <input type="text" value={question} onChange={(e) => setquestion(e.target.value)} className="form-control"  placeholder='What is your fav movie' required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
    </Layouts>

  )
}

export default Register
