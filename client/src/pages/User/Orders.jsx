import React from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import UserMenu from '../../Components/Layouts/UserMenu'
const Orders = () => {
  return (
    <Layouts title={"YOUR Orders"}>
        <div className="container-fluid p-3 m-3">
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu></UserMenu>
                </div>
                <div className="col-md-9">
                    <h1>All orders </h1>
                </div>
            </div>
        </div>
    </Layouts>
  )
}

export default Orders
