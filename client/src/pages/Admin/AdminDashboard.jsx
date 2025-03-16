import React, { use } from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import AdminMenu from '../../Components/Layouts/AdminMenu'
import {useAuth} from '../../Context/auth'
const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    <Layouts>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            {/* to Show the user details we have to make First container i.e card And here we use USEAUTH for geting deatils of user  */}
            <div className="card w-75 p-3"> 
              <h4> Admin Name : {auth?.user?.name}</h4>
              <h4> Admin Email : {auth?.user?.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default AdminDashboard;
