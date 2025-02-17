import React from "react";
// import home from "../../Assets/homepage.jpg";
import "./Homepage.css";
// import curus1 from "../../Assets/curus1.jpg";
import cursor7 from "../../Assets/cursor7.webp";
import cursor8 from "../../Assets/cursor8.webp";
import cursor5 from "../../Assets/cursor5.webp";
import cursor1 from "../../Assets/cursor1.webp";
import cursor2 from "../../Assets/cursor2.webp";
import dog3 from "../../Assets/dog3.jpg";
import cat2 from "../../Assets/cat2.jpg";
import pettreats from "../../Assets/pettreats.jpg";
import pettoy from "../../Assets/pettoy.webp";
import dogfood from "../../Assets/dogfood.webp";
import catfood from "../../Assets/catfood.webp";
import petcloth from "../../Assets/petcloth.jpeg";
import petbelt from "../../Assets/petbelt.jpg";
// import hompagedog from "../../Assets/hompagedog.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Petshophomepage({ data }) {
  return (
    <div className="main-background">
      {/* Hero Image Section */}
      <div>
        <Navbar />
      </div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={cursor8} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={cursor7} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cursor5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cursor1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={cursor2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Featured Pets Section */}
      <section className="product-section">
        <h2 className="section-title">SHOP BY STORE</h2>
        <div className="product-container">
          {/* Pet Cards */}
          <div className="product-card">
            <img src={cat2} className="product-image" alt="Pet Cat" />
            <div className="product-details">
              <h5> Cats</h5>
              <p>Fluffy and friendly felines that will steal your heart.</p>
              <Link to={`/dogview/${(data = "cat")}`}>
                {" "}
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={dog3} className="product-image" alt="Pet Dog" />
            <div className="product-details">
              <h5>Dogs</h5>
              <p>Energetic companions who love to play and cuddle.</p>
              <Link to={`/dogview/${(data = "dog")}`}>
                {" "}
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={pettreats} className="product-image" alt="Dog" />
            <div className="product-details">
              <h5>Pet Treats</h5>
              <p>Loyal and loving dogs that will be your best friend.</p>
              <Link to={`/dogview/${(data = "pet treats")}`}>
                {" "}
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={pettoy} className="product-image" alt="Dog" />
            <div className="product-details">
              <h5>Pet Toys</h5>
              <p>Loyal and loving dogs that will be your best friend.</p>
              <Link to={`/dogview/${(data = "pet toy")}`}>
                {" "}
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="product-section">
        <h2 className="section-title">POPULAR CATEGORY</h2>
        <div className="product-container">
          {/* Accessory Cards */}
          <div className="product-card">
            <img src={dogfood} className="product-image" alt="Accessory 1" />
            <div className="product-details">
              <h5>Dog Food</h5>
              <p>Durable and stylish accessories for your pet.</p>
              <Link to={`/dogview/${(data = "dog food")}`}>
                {" "}
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={catfood} className="product-image" alt="Accessory 1" />
            <div className="product-details">
              <h5>Cat Food</h5>
              <p>Durable and stylish accessories for your pet.</p>
              <Link to={`/dogview/${(data = "cat food")}`}>
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={petcloth} className="product-image" alt="Accessory 2" />
            <div className="product-details">
              <h5>Groomig</h5>
              <p>Keep your pet entertained with our fun and safe toys.</p>
              <Link to={`/dogview/${(data = "grooming")}`}>
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
          <div className="product-card">
            <img src={petbelt} className="product-image" alt="Accessory 3" />
            <div className="product-details">
              <h5>Pet Accessories</h5>
              <p>Comfortable beds to ensure your pet gets the best rest.</p>
              <Link to={`/dogview/${(data = "accessories")}`}>
                <button className="btn-primary">View Here</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 PetShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Petshophomepage;
