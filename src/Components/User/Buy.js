import React from 'react'
import curus2 from "../../Assets/curus2.jpg"

import "./Buy.css"
function Buy() {
    return (

        <div className='container'>
            <div className='row'>
                <div className='col-8'>

                    <div className='buy-img'>
                        <div class="card" style={{ width: "50rem" }}>
                            <img src={curus2} class="card-img-top" alt="..." />

                        </div>
                        
                    </div>
                </div>
                <div className='col-4' >
                    <div className='heading-buy'>
                    <h1>Dog</h1>
                    <p>Name:lab<br/>
                    Age:1<br/>
                    Breed:american
                    </p>
                    </div>
                            
                        </div>
            </div>

        </div>
    )
}

export default Buy