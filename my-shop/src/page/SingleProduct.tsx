import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Product } from "../components/Types";

const SingleProduct = function SingleProduct() {
  const { itemType, id } = useParams<{ itemType: string, id: string }>();
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    fetch("http://localhost:3001/"+itemType+"/"+id)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        console.log("unexpected error");
      });
  }, [itemType, id]);

  return (
    <Container>
      <Row>
        <h1>hallo</h1>
        <Col sm={8}>
          <img src={product.img} alt="" />
          </Col>
          <Col sm={4}>
            <div>
              {product.desc}
            </div>
          </Col>
      </Row>
    </Container>
  );
};
export default SingleProduct;
