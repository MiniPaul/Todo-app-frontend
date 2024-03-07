import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";

const Todopage = () => {

  const navigate = useNavigate()

  const [list,setlist]=new useState('');
  const [responseList, setResponseList] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
        const userId = localStorage.getItem("Id");
        console.log("User id is :", userId);
        const response = await axios.post("http://localhost:3005/api/view", { userid: userId });
        console.log(response.data);
        setResponseList(response.data);
    };
    getData();
}, []); 


  const addhandler= async(event)=>{
    try {
      const userId = localStorage.getItem("Id");
      if (!userId) {
        alert("User ID not found");
        return;
      }
      console.log("User ID : ", userId);
      const response = await axios.post("http://localhost:3005/api/addlist",{userid: userId,list})
      console.log("Add Response ",response)
      if(response.data.message === "Succcessfully added"){
        alert("Successfully Added")
        setResponseList([...responseList, { list }]);
        setlist(''); 
      }
      else{
        alert("Something went wrong")
      }
    } catch (error) {
      console.error("Add error:", error);
      alert("Error")
    }
  }

  const deleteHandler = async (_id) => {
    const listId= _id
    console.log(listId)    
    try {
      const response = await axios.delete("http://localhost:3005/api/delete",{data: { listItemId: _id }})
      console.log(response);
      if (response.data.message === 'Item deleted successfully') {
        alert('Successfully Deleted');
        const newList = responseList.filter(item => item._id !== _id);
        setResponseList(newList);
      } else {
        alert('Something went wrong');
      }      
    }catch (error) {
      alert('Error');
    }    
  };

  return (
    <div>
        <div className="container">
            <div className="row">
            <div class="custom-div"></div>
            <h1><center>TODO  LIST</center></h1>
            <div class="custom-div"></div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                <div class="card">
                  <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center>
                  <label htmlFor="" className="form-label">Add list</label>
                  <input type="text" className="form-control" name="list" value={list} onChange={(event)=>{setlist(event.target.value)}}/>
                  </center>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-info" onClick={addhandler}>Add</button>
                    </div>
                  </div>
                  
                  <div className="row">
                  {responseList.map((value, index) => (
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" key={index}>
                      <div class="card">
                        <div class="card-body d-flex justify-content-between align-items-center">
                          <p class="card-text">{value.list}</p>
                          <RiDeleteBin6Line
                            className="delete-icon"
                            onClick={() => deleteHandler(value._id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-info" onClick={(event)=>{
                        localStorage.removeItem("Id")
                        navigate('/')}}>Log Out</button>
                    </div>
                  </div>

                  </div>

                </center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todopage