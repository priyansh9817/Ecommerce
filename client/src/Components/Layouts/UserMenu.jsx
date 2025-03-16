import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { MdProductionQuantityLimits } from "react-icons/md";
const UserMenu = () => {
    return (
        <>
        <div className="text-center">
            <h1 className='my-4'>Dashboard</h1>
        <div className="list-group">
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
                  <h6> <CgProfile /> Profile</h6>
                </NavLink>
                <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
                    Your Orders <MdProductionQuantityLimits />
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default UserMenu
