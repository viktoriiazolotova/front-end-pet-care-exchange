import React from "react";
import PropTypes from "prop-types";
import "./PetsittersList.css";
import { BsCheckCircle } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
const PetsittersList = ({
  petsitters,
  loadPetsitterOnClick,
  deletePetsitter,
}) => {
  const getPetsittersCards = (petsitters) => {
    // console.log(petsitters);
    return petsitters.map((petsitter) => (
      // console.log({`${petsitter.photoPetsitter}`})
      <li key={petsitter.id}>
        <Card
          style={{
            width: "40rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: "3%",
            margin: "2%",
          }}
        >
          <img
            width="100px"
            height="100px"
            alt="Sample"
            src={`${petsitter.photoPetsitter}`}
          ></img>
          <Row>
            <Col>
              <CardBody>
                <CardTitle tag="h3">
                  {" "}
                  <Link
                    className="card__link"
                    // to={`/petsitters/${petsitter.id}/`}
                    to={`/petsitters/${petsitter.id}/`}
                    key={petsitter.id}
                    onClick={() => loadPetsitterOnClick(petsitter.id)}
                  >
                    {petsitter.name}
                  </Link>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {petsitter.city}, {petsitter.zipcode}, {petsitter.state}
                </CardSubtitle>

                <CardText tag="h6">Availability:</CardText>
                <CardText>
                  <BsCheckCircle
                    size="20px"
                    className={`${
                      petsitter.isAvailableHelp
                        ? "petsitters-available"
                        : "petsitters-not-available"
                    }`}
                  ></BsCheckCircle>{" "}
                  {petsitter.isAvailableHelp
                    ? `I can help you with ${petsitter.petTypeTakeCare}.`
                    : "Sorry, I am busy right now."}
                </CardText>
                <CardText tag="h6">Looking for help:</CardText>
                <CardText>
                  <BsCheckCircle
                    size="20px"
                    className={`${
                      petsitter.isLookingForHelp
                        ? "petsitters-available"
                        : "petsitters-not-available"
                    }`}
                  ></BsCheckCircle>{" "}
                  {petsitter.isLookingForHelp
                    ? "I need help with my pet."
                    : "No need help at this moment."}
                </CardText>
                {/* <CardText>
                  <IoPaw size="30px" color="#38bac4"></IoPaw>
                </CardText> */}
                <Button onClick={() => deletePetsitter(petsitter.id)}>
                  Delete
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </li>
    ));
  };

  return (
    <div className="petsitters-list">
      <h1>Here are the petsitters:</h1>
      <ul className="petsitters-list-no-bullet">
        {getPetsittersCards(petsitters)}
      </ul>
    </div>
  );
};

PetsittersList.propTypes = {
  petsitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      isAvailableHelp: PropTypes.bool.isRequired,
      isLookingForHelp: PropTypes.bool.isRequired,
      petTypeTakeCare: PropTypes.string.isRequired,
      photoPetsitter: PropTypes.string.isRequired,
    })
  ).isRequired,
  deletePetsitter: PropTypes.func.isRequired,
  loadPetsitterOnClick: PropTypes.func.isRequired,
  // updatePetsitterAvailability: PropTypes.func.isRequired,
};

export default PetsittersList;
