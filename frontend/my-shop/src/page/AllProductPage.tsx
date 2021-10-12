
import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomCard from "../components/card";
import { AllPageContent, Product } from "../components/Types";
import ProductService from "./ProductService";
import { SearchContext } from "../components/SearchContext";



function AllProductPage({img, title, type} : AllPageContent) {

  const [products, setProduct] = useState <Product[]>([]);
  
  const {searchName} = useContext(SearchContext);
  

  useEffect(() => {
    const productService = new ProductService();
    productService.getAllProducts().then((resolve) => {setProduct(resolve.data); console.log(resolve.data)});
  }, []);


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
            {console.log(searchName)}
            {products && products.filter((product : Product) => product.category.includes(type)).filter((product : Product) => {
              return(
                product.name.toLowerCase().includes(searchName) || !searchName
              );
            }).map((value: Product) => {
              return (
                  <Col md={4}>
                  <CustomCard
                    id={value.id}
                    img={value.img}
                    name={value.name}
                    price={value.price}
                    category={type}
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
