import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Product } from "../components/Types";
import ProductService from "./ProductService";

const SingleProduct = function SingleProduct() {
  const { itemType, id } = useParams<{ itemType: string; id: string }>();
  const [product, setProduct] = useState<Product>({} as Product);

  const productService = new ProductService();

  useEffect(() => {
    productService
      .getAllData(itemType + "/" + id)
      .then((response) => response.data)
      .then((myData) => setProduct(myData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemType, id]);
  return (
    <Container>
      <Row>
        <h1>hallo</h1>
        <Col sm={8}>
          <img src={product.img} alt="" />
        </Col>
        <Col sm={4}>
          <div>{product.desc}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleProduct;
