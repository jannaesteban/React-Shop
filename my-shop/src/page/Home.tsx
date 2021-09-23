import React, { useEffect, useState } from "react";
import "../App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Caroussel from "../components/Caroussel";
import HomeCard from "../components/HomeCard";

function Home() {
  type Product = {
    img: string;
    desc: string;
    name: string;
    link: string;
  };

  const [products, setProduct] = useState<Product[]>([]);
useEffect(() => {
  fetch("http://localhost:3001/home")
    .then((resolve) => {
      return resolve.json();
    })
    .then((product) => {
      console.log(product)
      setProduct(product);
    })
    .catch(() => {
      console.log("unexpected error");
    });
}, [])

return (
      <body>
        <Caroussel />
        <Container>
          <br />
          <Row className="box">
            <Col md={12}>
              <h1 className="title">SHOP SKIN</h1>
            </Col>
          </Row>
          <Row>
            {products.map((value: Product) => {
              return (
                <Col md={3}>
                  <HomeCard
                    img={value.img}
                    desc={value.desc}
                    name={value.name}
                    link={value.link}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </body>
  );
}
export default Home;
