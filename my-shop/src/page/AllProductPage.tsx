import React, { useEffect, useState } from "react";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomCard from "../components/card";
import { AllPageContent, Product } from "../components/Types";


function AllProductPage({url, img, title, type} : AllPageContent) {

  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    fetch(url)
      .then((resolve) => {
        return resolve.json();
      })
      .then((product) => {
        setProduct(product);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [url]);

  return (
    <>
      <Card className="text-white">
        <Card.Img
          src={img}
          alt="Card image"
        />
        <Card.ImgOverlay className="justify-content-center d-flex align-items-center">
          <Card.Title>
            <h1>{title}</h1>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <body>
        <Container>
          <Row>
            {products.map((value: Product) => {
              return (
                <Col md={4}>
                  <CustomCard
                    id={value.id}
                    img={value.img}
                    desc={value.desc}
                    name={value.name}
                    price={value.price}
                    itemType={type}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </body>
    </>
  );
}
export default AllProductPage;
