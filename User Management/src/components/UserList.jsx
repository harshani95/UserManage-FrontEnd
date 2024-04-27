import { useState } from "react";
import Navbar from "./Navbar";

const UserList = () => {

  const [users] = useState([]);

  return (
    <>
    <Navbar /><br />
    <div className="container">
    <div className="row">
      <h2>User List</h2><br />
            <div className="col-12">
  
                <table className='table'>
                    <thead>
                        <tr className="table-primary">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date Of Birth</th>
                            <th>Gender</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{new Date(user.dob).toLocaleDateString()}</td>
                                <td>{user.gender}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                </tr>
                             ))}
                     </tbody>
                </table>
      
            </div>
        </div>
  
    </div>
    
    </>
  )
}

export default UserList