import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "./Types";

const SingleCard = ({
  id,
  img,
  description,
  name,
  price,
  category,
}: Product) => {
  return (
    <Card  style={{ width: "40rem", margin:"15px auto" }}>
      <div className="singleCard">
      <Card.Body >  
        <Card.Title>{name}</Card.Title>
        <h6>{category}</h6>
        <Card.Img variant="top" src={img} />
        <Card.Text>
          <br></br>
        <h5>Description:</h5>
          <p> {description}</p>
          <br></br>
          <b>{price}</b>
        </Card.Text>
        <Button variant="primary" href={"http://localhost:3000/" + category}>
          Go back
        </Button>
      </Card.Body>
      </div>
      
    </Card>
  );
};
export default SingleCard;
