import React from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import UserMenu from '../../Components/Layouts/UserMenu'
const Profile = () => {
  return (
    <Layouts title={"Your Order"}>
        <div className="container-fluid m-3 p-3">
        <div className='row'>
                <div className='col-md-3'>
                    <UserMenu></UserMenu>
                </div>
                <div className="col-md-9">
                    <h1>Profile </h1>
                </div>
            </div>
        </div>
    </Layouts>
  )
}

export default Profile
