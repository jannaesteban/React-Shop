import React, { useEffect, useState } from "react";
import "../App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Caroussel from "../components/Caroussel";
import ProductService from "./ProductService";
import CustomCard from "../components/card";
import { AllPageContent, Product } from "../components/Types";

function Home() {
  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const productService = new ProductService();
    productService.getAllProducts().then((resolve) => setProduct(resolve.data))
  }, []);
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
                <Col md={4}>
                  <CustomCard
                    id={value.id}
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    category={value.category}
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
