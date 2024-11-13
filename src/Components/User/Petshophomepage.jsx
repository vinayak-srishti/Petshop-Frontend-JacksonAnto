
import React from 'react';
import home from "../../Assets/homepage.jpg";
import "./Homepage.css";
import curus1 from "../../Assets/curus1.jpg";
import curus2 from "../../Assets/curus2.jpg";
import dog1 from "../../Assets/dog1.jpg";
import dog3 from "../../Assets/dog3.jpg";
import cat2 from "../../Assets/cat2.jpg";
import hompagedog from "../../Assets/hompagedog.jpg";

function Petshophomepage() {
  return (
    <div className="main-background">
      {/* Hero Image Section */}
      <section className="hero-section">
        <img src={hompagedog} className="hero-image" alt="Dog" />
      </section>

      {/* Carousel Section */}
      <div className="carousel-container">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={home} className="d-block w-100" alt="Home" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explore Our Pet Products</h5>
                <p>Find everything you need for your pet.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={curus1} className="d-block w-100" alt="Carousel Image 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Quality Pet Care</h5>
                <p>For healthy, happy pets.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={curus2} className="d-block w-100" alt="Carousel Image 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Top Pet Products</h5>
                <p>Only the best for your furry friends!</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Featured Pets Section */}
      <section className="product-section">
        <h2 className="section-title">Featured Pets</h2>
        <div className="product-container">
          {/* Pet Cards */}
          <div className="product-card">
            <img src={cat2} className="product-image" alt="Pet Cat" />
            <div className="product-details">
              <h5>Adorable Cats</h5>
              <p>Fluffy and friendly felines that will steal your heart.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={dog3} className="product-image" alt="Pet Dog" />
            <div className="product-details">
              <h5>Playful Dogs</h5>
              <p>Energetic companions who love to play and cuddle.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={dog1} className="product-image" alt="Dog" />
            <div className="product-details">
              <h5>Furry Friends</h5>
              <p>Loyal and loving dogs that will be your best friend.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="product-section">
        <h2 className="section-title">Pet Accessories</h2>
        <div className="product-container">
          {/* Accessory Cards */}
          <div className="product-card">
            <img src={curus1} className="product-image" alt="Accessory 1" />
            <div className="product-details">
              <h5>Collars & Leashes</h5>
              <p>Durable and stylish accessories for your pet.</p>
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={curus2} className="product-image" alt="Accessory 2" />
            <div className="product-details">
              <h5>Pet Toys</h5>
              <p>Keep your pet entertained with our fun and safe toys.</p>
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
          <div className="product-card">
            <img src={cat2} className="product-image" alt="Accessory 3" />
            <div className="product-details">
              <h5>Pet Beds</h5>
              <p>Comfortable beds to ensure your pet gets the best rest.</p>
              <button className="btn-primary">Shop Now</button>
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
