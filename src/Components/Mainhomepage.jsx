import React from "react";
import MainNavbar from "./MainNavbar";
import "../Components/Mainhomepage.css";
// import petadv from "../Assets/petadv.mp4"
import mainpic from "../Assets/mainpic.png";
import jimmy from "../Assets/jimmy.png";



function Mainhomepage() {
  return (
    <div className="mainhome">
      <div className="homenavbar">
        <MainNavbar />
      </div>
      {/* <div> */}
      <div className="mainhome-box1">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h1>
                BEST  PET SHOP
              </h1>
              <p>
                A pet shop or pet store is an essential services retailer which
                sells animals and pet care resources to the public. A variety of
                animal supplies and pet accessories are also sold in pet shops.
                The products sold include: food, treats, toys, collars, leashes,
                cat litter, cages and aquariums
              </p>
            </div>
            <div class="col">
              <img src={mainpic} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="mainhome-box2">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <img src={mainpic} alt="" />
            </div>{" "}
            <div class="col">
              <h1>ABOUT DOG</h1>
              <p>
                Dogs are sometimes referred to as man's best friend because they
                are kept as domestic pets and are usually loyal and like being
                around humans.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainhome-box3">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h1>ABOUT CAT</h1>
              <p>
                Cats are very beautiful and friendly animals. They are very good
                at hunting rats and snakes. Cats have two eyes, a tiny nose, two
                perky ears, four legs and a tail. Their bodies are covered with
                smooth fur.
              </p>
            </div>
            <div class="col">
              <img src={mainpic} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainhome-box4">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <img src={mainpic} alt="" />
            </div>{" "}
            <div class="col">
              <h1>OUR PETS</h1>
              <p>
                We're a nation of pet lovers, and rightly so! Cats and dogs
                offer unconditional love, affection and friendship, as well as a
                host of therapeutic benefits, such as improved general health
                and wellbeing - after all, who doesn't like a cuddle from a
                furry friend at the end of a long day?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainhomepage;
