import Card from "react-bootstrap/Card";
import React from "react";
import { Button } from "react-bootstrap";

type Product = {
  img: string;
  desc: string;
  name: string;
  link: string;
};

const HomeCard = ({ img, desc, name, link }: Product) => {
  return (
    <>
      <Card style={{ width: "20rem" }} className="cardHome">
        <Card.Img
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
          <Button variant="primary" href={link}>
            SEE MORE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default HomeCard;