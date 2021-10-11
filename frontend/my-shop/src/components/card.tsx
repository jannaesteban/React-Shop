import Card from "react-bootstrap/Card";
import React from "react";
import { Button } from "react-bootstrap";
import { Product } from "./Types";


const 
CustomCard = ({ id, img, desc, name, price, itemType}: Product) => {
  return (
    <>
      <Card style={{ width: "25rem" }} className="otherCard">
        <Card.Img
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {price}
          </Card.Text>
          <Button variant="primary" href={"http://localhost:3000/"+itemType+"/" + id}>
            GET DETAILS
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default CustomCard;
