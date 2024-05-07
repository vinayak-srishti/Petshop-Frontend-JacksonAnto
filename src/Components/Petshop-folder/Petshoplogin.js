import React from 'react'

function Petshoplogin() {
  return (
    <div>
            <div className='nn'>
        <h1 className='heading'>PETSHOP LOGIN</h1>
        <div className="ss">
            <div className="row">
                <div className="col-6" id="username">
                    <label>Username:</label>
                    <input type='text'></input>

                </div>
                <div className="col-6" id='password'>
                    <label>Password:</label>
                    <input type="password"/>
                </div>
                <div className="col-6">
                    <input type='button' value="LOGIN" className='login'></input>
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Petshoplogin