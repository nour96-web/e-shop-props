import { Carousel } from "react-bootstrap";

import React from 'react'

const Banner = () => {
  return (
    <section class="banner">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/photos-gratuite/equipement-sport-vetements-table-grise-vue-dessus-espace-copie-nature-morte-ideal-pour-blog_639032-1854.jpg?t=st=1719653888~exp=1719657488~hmac=fb4f5fb6ec4df5be3fb93baec9c7e5824c28eb3d96b88561db78f92ccb0a86fe&w=740"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/photos-gratuite/vetements-sport-gymnase-vetements-entrainement_1303-1762.jpg?t=st=1719654111~exp=1719657711~hmac=19995a0126418a3c63b4bad0b9a944292807524906cb2f5b59e0b60f27140a6a&w=740"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/photos-gratuite/composition-football-maillot_23-2147827778.jpg?t=st=1719653975~exp=1719657575~hmac=3d014fb8867d887ed62b89ee114169928aab01c6a9c7c98b2ca56fdd25c13768&w=740"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </section>
  )
}

export default Banner