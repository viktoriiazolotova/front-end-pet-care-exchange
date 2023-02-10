import React from "react";
import PropTypes from "prop-types";
import "./PetsittersList.css";
import { BsCheckCircle } from "react-icons/bs";
import { Button } from "reactstrap";
// import { IoPaw } from "react-icons/io5";
// import { GiPaw } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import { useState } from "react";
// import FilterSearch from "./FilterSearch";

const PetsittersList = ({
  petsitters,
  loadPetsitterOnClick,
  deletePetsitter,
}) => {
  // console.log("we are inside petsitetrslist");
  const [search, setSearch] = useState("");
  console.log("search", search);
  const [availableChecked, setAvailableChecked] = useState(false);
  console.log("availableChecked", availableChecked);
  // const [lookingHelpChecked, setLookingHelpChecked] = useState(false);
  // console.log("lookingHelpChecked", lookingHelpChecked);
  // console.log(filteredPetsitters);

  // }
  const getPetsittersCards = (petsitters) => {
    const filteredPetsittersAvailable = petsitters.filter((petsitter) => {
      if (availableChecked) {
        return petsitter.isAvailableHelp === true;
      } else if (availableChecked === false) {
        return petsitter;
      }
      return petsitters;
    });
    // const filteredPetsittersLookingHelp = petsitters.filter((petsitter) => {
    //   if (lookingHelpleChecked) {
    //     return petsitter.isLookingForHelp === true;
    //   } else if (lookingHelpChecked === false) {
    //     return petsitter;
    //   }
    //   return petsitters;
    // });
    return (
      filteredPetsittersAvailable
        // return petsitters
        .filter((petsitter) => {
          return search === "" ? petsitter : petsitter.city.includes(search);
        })
        .map((petsitter) => (
          // return petsitters.map((petsitter) => (
          <li key={petsitter.id}>
            {/* console.log({`${petsitter.id}`}) */}
            <Card id="petsitter-card">
              <img
                className="image-petsitter"
                alt="Sample"
                src={`${petsitter.photoPetsitter}`}
              ></img>
              <CardBody>
                <CardTitle tag="h3">
                  <CardText>
                    {/* <IoPaw size="30px" color="#38bac4"></IoPaw> */}
                    {/* <GiPaw size="30px" color="brown"></GiPaw> */}
                  </CardText>
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
                <Button onClick={() => deletePetsitter(petsitter.id)}>
                  Delete
                </Button>
              </CardBody>
            </Card>
          </li>
        ))
    );
  };

  return (
    <div className="petsitters-list">
      <h1>Find the pet owner near you:</h1>
      <Form className="container">
        <Row>
          <Col md={4} sm={12}>
            <FormGroup>
              <Label className="search-label" tag="h5" for="city">
                Search by city:
              </Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter the city"
                type="text"
                onChange={(e) => setSearch(e.target.value.toUpperCase())}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check>
              <Label className="search-label" check for="isAvailableHelp">
                Available to help
              </Label>
              <Input
                id="isAvailableHelp"
                name="isAvailableHelp"
                type="checkbox"
                value={availableChecked}
                onClick={(e) => setAvailableChecked(!availableChecked)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <ul className="petsitters-list-no-bullet">
        {getPetsittersCards(petsitters)}
      </ul>
      {/* <ul className="petsitters-list-no-bullet">
        {getPetsittersCards(
          petsitters.filter((petsitter) => {
            return search.toUpperCase() === ""
              ? petsitter
              : petsitter.city.includes(search);
          })
        )}
      </ul> */}
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
