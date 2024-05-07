import React from 'react'
import "./User.css"

function UserView() {
    return (
        <>
        <div className='heading_1'>
            <h1>User View</h1>
        </div>
            <div className='container upper-row' >
                <div className='row para_para ' >
                    <div className='col-6'  >
                        <p>Name:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>Email:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text' />
                    </div>
                    <div className='col-6'>
                        <p>Address:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>Pincode</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>Gender:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>City:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>Date of Birth:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>
                    <div className='col-6'>
                        <p>Contact:</p>
                    </div>
                    <div className='col-6'>
                        <input type='text'/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UserView