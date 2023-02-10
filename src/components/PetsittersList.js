import React from "react";
import PropTypes from "prop-types";
import "./PetsittersList.css";
import { BsCheckCircle } from "react-icons/bs";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { useState } from "react";

const PetsittersList = ({
  petsitters,
  loadPetsitterOnClick,
  deletePetsitter,
}) => {
  const [searchCity, setSearchCity] = useState("");
  const [showAvailable, setAvailableChecked] = useState(false);
  const [showLookingHelp, setLookingHelpChecked] = useState(false);

  // FUNCTIONS TO HANDLE FILTERING
  const searchCityBarPetsitters = (petsitters) => {
    return searchCity !== ""
      ? petsitters.filter((petsitter) => petsitter.city.includes(searchCity))
      : petsitters;
  };
  const checkboxAvailablePetsitters = (petsitters) => {
    return showAvailable
      ? petsitters.filter((petsitter) => petsitter.isAvailableHelp)
      : petsitters;
  };
  const checkboxLookingHelpPetsitters = (petsitters) => {
    return showLookingHelp
      ? petsitters.filter((petsitter) => petsitter.isLookingForHelp)
      : petsitters;
  };

  const getPetsittersCards = (petsitters) => {
    if (searchCity || showAvailable || showLookingHelp) {
      const search_filtered = searchCityBarPetsitters(petsitters);
      const availableFiltered = checkboxAvailablePetsitters(search_filtered);
      const lookingHelpFiltered =
        checkboxLookingHelpPetsitters(availableFiltered);
      petsitters = lookingHelpFiltered;
    }
    return petsitters.map((petsitter) => (
      <li key={petsitter.id}>
        <Card id="petsitter-card">
          <img
            className="image-petsitter"
            alt="Sample"
            src={`${petsitter.photoPetsitter}`}
          ></img>
          <CardBody>
            <CardTitle tag="h3">
              <Link
                className="card__link"
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
            <Button onClick={() => deletePetsitter(petsitter.id)}>
              Delete
            </Button>
          </CardBody>
        </Card>
      </li>
    ));
  };

  return (
    <div className="petsitters-list">
      <h1>Find the pet owner near you:</h1>
      <Form className="container">
        <Row>
          <Col md={4} sm={12}>
            <FormGroup>
              <Label className="search-label" tag="h5" for="searchCity">
                Search by city:
              </Label>
              <Input
                id="searchCity"
                name="searchCity"
                placeholder="Enter the city"
                type="text"
                onChange={(e) => setSearchCity(e.target.value.toUpperCase())}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check>
              <Label className="search-label" check for="showAvailable">
                Show only available to help
              </Label>
              <Input
                id="showAvailable"
                name="showAvailable"
                type="checkbox"
                onClick={(e) => setAvailableChecked(!showAvailable)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Label className="search-label" check for="showLookingHelp">
                Looking for help
              </Label>
              <Input
                id="showLookingHelp"
                name="showLookingHelp"
                type="checkbox"
                onClick={(e) => setLookingHelpChecked(!showLookingHelp)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
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
};

export default PetsittersList;
