import React from "react";
import PropTypes from "prop-types";
import { Button, CardFooter } from "reactstrap";
import "./Petsitter.css";
import { Link } from "react-router-dom";
import { IoPaw } from "react-icons/io5";

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

const Petsitter = ({
  id,
  name,
  email,
  zipcode,
  city,
  petType,
  isAvailableHelp,
  deletePetsitter,
}) => {
  let buttonClass = isAvailableHelp
    ? "petsitters__item__toggle--available"
    : "";
  // const updatePetsitterStatus = () => {
  //   updatePetsitter(id, !isAvailableHelp);
  // };

  return (
    // <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 1 }).map((_, idx) => (
    //     <Col>
    //       <Card>
    //         {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    //         <Card.Body background-color="#2fbec8">
    //           <Card.Title className={`tasks__item__toggle ${buttonClass}`}>
    //             {name}
    //           </Card.Title>
    //           <Card.Text>{email}</Card.Text>
    //           <Card.Text>
    //             {zipcode} {city}
    //           </Card.Text>
    //           <Link className="card__link" to={`/petsitteraccount/${id}`}>
    //             View Details
    //           </Link>

    //           <Button variant="outline-primary">Edit</Button>
    //           <Button variant="outline-primary">Delete</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    <Card
      className="card-petsitter"
      style={{
        width: "18rem",
      }}
    >
      <img
        alt="Sample"
        // src="https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o="
      />
      <CardBody>
        <CardTitle className={`tasks__item__toggle ${buttonClass}`} tag="h5">
          {name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {city}, {zipcode}
        </CardSubtitle>
        <CardText>I can help you with {petType}.</CardText>
        <CardText>
          <p>
            <span> 0 </span>
            <IoPaw size="30px" color="#38bac4"></IoPaw>
          </p>
        </CardText>

        <Button onClick={() => deletePetsitter(id)}>Delete</Button>
        <Button>Edit</Button>
      </CardBody>
      <CardFooter>
        {" "}
        <Link className="card__link" to={`/petsitter/`}>
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

Petsitter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  petType: PropTypes.string.isRequired,
  isAvailableHelp: PropTypes.bool.isRequired,
  deletePetsitter: PropTypes.func.isRequired,
};

export default Petsitter;
