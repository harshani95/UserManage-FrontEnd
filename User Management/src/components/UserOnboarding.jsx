
import { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

const UserOnboarding = () => {

  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [dob,setDob]=useState('');
  const [gender,setGender]=useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [email,setEmail]=useState('');
  

  const saveUser= async ()=>{
    try{
        const response = await axios.post("http://localhost:3000/api/v1/users/create",{
            firstName,
            lastName,
            dob,
            gender,
            contactNumber,
            email
        });
        console.log(response);

        // setName('');
        // setSalary('');
        // setAddress('');

    }catch (e){
        console.log(e)
    }
}


  return (
    <>
    <Navbar /><br />
      <div>
      <div className='container'>
        <div className="row ">
          <div className="outline-onboarding" style={{ width: '100vw'}}>
            <h3>User Onboarding</h3>
              <div className="card-body inline-onboarding">
                <form className="card" style={{ padding: 20}}>
                  <div className='form-group row'>
                    <label htmlFor="details" className="heading">Basic Details </label>
                    <div className="col-4">
                      <input className="form-control col-4" onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name"  type='text' required/>  
                    </div>
                    <div className="col-4">
                      <input className="form-control col-4" onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name"  type='text' required/> 
                    </div>
                    <div className="col-4">
                      <input className="form-control col-4" onChange={(e)=>{setDob(e.target.value)}} placeholder="Date Of Birth"  type='date' required/>
                    </div> <br />
                    <div className="col-4">
                      <input className="form-control col-4" onChange={(e)=>{setGender(e.target.value)}} placeholder="Gender"  type='text' required/>
                    </div>  
                       
                  </div><br />

                  <div className='form-group row'>
                    <label htmlFor="details" className="heading">Contact Details </label>
                      <div className="col-4">
                        <input className="form-control col-4" onChange={(e)=>{setContactNumber(e.target.value)}} placeholder="Mobile Number"  type='text' required/>
                      </div>
                      <div className="col-4">
                        <input className="form-control col-4" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"  type='text' required/>
                      </div>      
                  </div><br />
                  </form>
                <div className="button-style">
                  <button className="btn btn-outline-primary" style={{marginRight:20}} type="button"> Clear </button>
                  <button className="btn btn-primary" type="button" onClick={saveUser}>Save</button>
                </div>      
                
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default UserOnboarding