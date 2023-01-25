import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./Petsitter.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Petsitter = ({
  id,
  name,
  email,
  zipcode,
  city,
  petType,
  isAvailableHelp,
}) => {
  let buttonClass = isAvailableHelp
    ? "petsitters__item__toggle--available"
    : "";
  // const updatePetsitterStatus = () => {
  //   updatePetsitter(id, !isAvailableHelp);
  // };

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body background-color="#2fbec8">
              <Card.Title className={`tasks__item__toggle ${buttonClass}`}>
                {name}
              </Card.Title>
              <Card.Text>{email}</Card.Text>
              <Card.Text>
                {zipcode} {city}
              </Card.Text>
              <Link className="card__link" to={`/petsitteraccount/${id}`}>
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

Petsitter.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // zipcode: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // petType: PropTypes.string.isRequired,
  // isAvailableHelp: PropTypes.bool.isRequired,
  // deleteTask: PropTypes.func.isRequired,
};

export default Petsitter;
