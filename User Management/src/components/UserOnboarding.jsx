
import { useState } from "react";
import Navbar from "./Navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserOnboarding = () => {

  const [dob, setDob] = useState(new Date());
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
                    <div className="col-4"><input className="form-control col-4"  placeholder="First Name"  type='text' required/>  </div>
                    <div className="col-4"><input className="form-control col-4" placeholder="Last Name"  type='text' required/> </div>
                    <div className="col-4"><input className="form-control col-4" placeholder="Date Of Birth"  type='text' required/> </div> <br />
                    <div className="col-4"><input className="form-control col-4" placeholder="Gender"  type='text' required/> </div>  
                    <div className="col-4"><DatePicker  selected={dob} onChange={(date) => setDob(date)} /></div> 
                       
                  </div><br />

                  <div className='form-group row'>
                    <label htmlFor="details" className="heading">Contact Details </label>
                      <div className="col-4"><input className="form-control col-4" placeholder="Mobile Number"  type='text' required/>  </div>
                      <div className="col-4"><input className="form-control col-4" placeholder="Email"  type='text' required/> </div>      
                  </div><br />
                  </form>
                <div className="button-style">
                  <button className="btn btn-outline-primary" style={{marginRight:20}} type="button"> Clear </button>
                  <button className="btn btn-primary" type="button" >Save</button>
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