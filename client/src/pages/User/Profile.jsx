import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
const Profile = () => {
  return (
    <Layout title={"Your Order"}>
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
    </Layout>
  )
}

export default Profile
