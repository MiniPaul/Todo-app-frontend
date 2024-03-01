import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate=useNavigate()

    const[email,setEmail]=new useState('')
    const[password,setPassword]=new useState('')

    const handleLogin = async (event) => {
        try {
            const response = await axios.post("http://localhost:3005/todo/login",{email,password})
            console.log(response)
            if(response.status == "201"){
                localStorage.setItem("token",response.data.token)
                console.log("Saved token : ",localStorage.getItem("token"))
                navigate("/todo")
            }
        
            
        } catch (error) {
            alert("Error")
        }

    }


  return (
    <div>
         <div class="custom-div"></div>
        <div className="container">
        <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                <div class="card">

                <div class="custom-div"></div>

                    <h1><center><b>TODO APP</b></center></h1>

                    <h1><center><b>LOG IN HERE</b></center></h1>

                <div class="custom-div"></div>

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
                        <button className="btn btn-info" onClick={handleLogin}>Login</button>
                    </div>

                    <div class="custom-div"></div>

                    <div><Link to="/signup">New user click here</Link></div>

                </div>
                </center>
                </div>
            </div>
            </div>
    </div>
  )
}

export default LoginPage