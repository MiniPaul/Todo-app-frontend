import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserSignup = () => {    

    const navigate=useNavigate()

    const[name,setname]=new useState('')
    const[email,setEmail]=new useState('')
    const[password,setPassword]=new useState('')

    const handleSignup= async (event)=>{
        const response = await axios.post("http://localhost:3005/todo/signup",{name,email,password})
        console.log(response)
        if(response.data.status == "success")
        {
            alert("Successfully Registered")
        }
        if(response.data.status == "failed")
        {
            alert("Email already registered")
        }
    }

  return (
    <div>
        <div class="custom-div"></div>
        <div className="container">
        <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>

                    <h1><center><b>New User Signin</b></center></h1>

                <div class="custom-div"></div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={(event)=>setname(event.target.value)} />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                    </div>

                <br />

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info" onClick={handleSignup}>Signup</button>
                    </div>

                    <div class="custom-div"></div>

                    <div><Link to="/">Login</Link></div>

                </center>
                </div>
            </div>
            </div>
    </div>
  )
}

export default UserSignup