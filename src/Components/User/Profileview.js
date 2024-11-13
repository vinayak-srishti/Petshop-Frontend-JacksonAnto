import React from 'react';
import "./Profile.css";

function Profileview() {
    return (
        <div className='profile-container'>
            <header className='profile-header'>
                <h1>
                    <span className='ri-user-line profile-icon'/> Profile
                </h1>
            </header>
            <div className='profile-details'>
                <dl className='profile-list'>
                    <div className='profile-item'>
                        <dt>Name:</dt>
                        <dd>Jackson</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Age:</dt>
                        <dd>21</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>City:</dt>
                        <dd>Nagercoil</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Address:</dt>
                        <dd>Behelpuram</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Email:</dt>
                        <dd>jackson003j@gmail.com</dd>
                    </div>
                    <div className='profile-item'>
                        <dt>Phone No:</dt>
                        <dd>7502812184</dd>
                    </div>
                </dl>
                <button className='edit-button'>Edit</button>
            </div>
        </div>
    );
}

export default Profileview;
