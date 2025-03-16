import React from 'react'
import Layouts from '../../Components/Layouts/Layouts'
import AdminMenu from '../../Components/Layouts/AdminMenu'
const CreateProduct = () => {
    return (
        <Layouts title={"Dashboard-CreateProduct"}>
            {/* here we use Grid class jiske karn mai ek pannel ko satatic rakh paau gaa or dusre pannel ko dynamic rakh paau gaa   */}
            <div className='container-fluid m-3 p-3'>
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu></AdminMenu>
                    </div>
                    <div className="col-md-9">
                        <h1>Create Product </h1>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default CreateProduct
