import React from "react";
import PropTypes from "prop-types";
import { BsCheckCircle } from "react-icons/bs";
import { Button, CardFooter, Row, Col } from "reactstrap";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Petsitter.css";

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

const Petsitter = ({
  id,
  name,
  email,
  zipcode,
  city,
  petTypeTakeCare,
  isAvailableHelp,
  deletePetsitter,
}) => {
  let buttonClass = isAvailableHelp
    ? "petsitters-available"
    : "petsitters-not-available";
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
      // style={{
      //   width: "40rem",
      // }}
      style={{
        width: "40rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "3%",
        margin: "2%",
      }}
    >
      <Row>
        <Col>
          <img
            width="200px"
            height="200px"
            alt="Sample"
            src="https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o="
            // src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h3">{name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {city}, {zipcode}
            </CardSubtitle>

            <CardText tag="h6">Availability:</CardText>
            <CardText>
              <BsCheckCircle
                size="20px"
                className={`${buttonClass}`}
              ></BsCheckCircle>{" "}
              {isAvailableHelp
                ? `I can help you with ${petTypeTakeCare}.`
                : "Sorry, I am busy right now."}
            </CardText>
            <CardText tag="h6">Looking for help:</CardText>

            <CardText>
              <BsCheckCircle
                size="20px"
                className={`${buttonClass}`}
              ></BsCheckCircle>{" "}
              {isAvailableHelp
                ? `I need help with ${petTypeTakeCare}.`
                : "No need help at this moment."}
            </CardText>

            <CardText>
              {/* <span> 0 </span> */}
              <IoPaw size="30px" color="#38bac4"></IoPaw>
            </CardText>
            <Button onClick={() => deletePetsitter(id)}>Delete</Button>
            {/* <Button>Edit</Button> */}
            <Link className="card__link" to={`/petsitter/`}>
              View Details
            </Link>
          </CardBody>
        </Col>
      </Row>

      {/* <CardFooter>
      <Link className="card__link" to={`/petsitter/`}>
          View Details
        </Link>
      </CardFooter> */}
    </Card>
  );
};

Petsitter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  petTypeTakeCare: PropTypes.string.isRequired,
  isAvailableHelp: PropTypes.bool.isRequired,
  deletePetsitter: PropTypes.func.isRequired,
};

export default Petsitter;
