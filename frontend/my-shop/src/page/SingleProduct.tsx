import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import SingleCard from "../components/SingleCard";
import { Product } from "../components/Types";
import ProductService from "./ProductService";

const SingleProduct = function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({} as Product);

  const productService = new ProductService();

  useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((resolve) => setProduct(resolve.data));
  }, [id]);

  return (
    <Container>
        <SingleCard
          id={product.id}
          img={product.img}
          description={product.description}
          name={product.name}
          price={product.price}
          category={product.category}
        />
    </Container>
  );
};
export default SingleProduct;
