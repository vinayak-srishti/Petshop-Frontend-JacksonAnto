import React from 'react'
import "./Purchase.css"
import purchasecat from "../../Assets/purchasecat.jpg"
import purchasedog from"../../Assets/purchasedog.jpg"
function Purchase() {
    return (
        <div>
            <div class="container text-center">
                <div class="row row-cols-2">
                    <div class="col">
                        <figure class="figure">
                            <img src={purchasecat} class="figure-img img-fluid rounded" alt="..." />
                            <figcaption class="figure-caption">A caption for the above image.</figcaption>
                        </figure>
                    </div>

                    <div class="col-">
                        <div class="card cards-height">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name:Persian Cat</li>
                                <li class="list-group-item" >Breed:American</li>
                                <li class="list-group-item">Ordered Date:08/08/2024</li>
                                <li class="list-group-item">Age:1</li>
                                <li class="list-group-item">Delivery Address:Nagercoil
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container text-center dog">
                <div class="row row-cols-2">
                    <div class="col">
                        <figure class="figure">
                            <img src={purchasedog} class="figure-img img-fluid rounded" alt="..." />
                            <figcaption class="figure-caption">A caption for the above image.</figcaption>
                        </figure>
                    </div>
                    <div class="col-">
                        <div class="card cards-heights " >
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Name:Lab</li>
                                <li class="list-group-item">Breed: Anto Shebin</li>
                                <li class="list-group-item">Ordered Date:08/08/2024</li>
                                <li class="list-group-item">Age:1</li>
                                <li class="list-group-item">Delivery Address:Nagercoil
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div> 
    )
}

export default Purchase