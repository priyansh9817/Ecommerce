import React from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import UserMenu from '../../Components/Layouts/UserMenu';
import {useAuth} from '../../Context/auth'
const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layouts title={"User Dasboard"}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu></UserMenu>
            </div>
            <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Your Name : {auth?.user?.name}</h3>
              <h3>Your Email : {auth?.user?.email}</h3>
              <h3>Your Address : {auth?.user?.address}</h3>
            </div>
          </div>
          </div>
          
        </div>
    </Layouts>
  )
}

export default UserDashboard;
