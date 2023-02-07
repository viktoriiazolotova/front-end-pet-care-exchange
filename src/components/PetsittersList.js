import React from "react";
import PropTypes from "prop-types";
import "./PetsittersList.css";
import { BsCheckCircle } from "react-icons/bs";
import { Button } from "reactstrap";
// import { IoPaw } from "react-icons/io5";
// import { GiPaw } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const PetsittersList = ({
  petsitters,
  loadPetsitterOnClick,
  deletePetsitter,
}) => {
  const getPetsittersCards = (petsitters) => {
    // console.log("petsitters under petsitterlist: ", petsitters);

    return petsitters.map((petsitter) => (
      // console.log({`${petsitter.photoPetsitter}`})
      <li key={petsitter.id}>
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
    ));
  };

  return (
    <div className="petsitters-list">
      <h1>Find the pet owner near you:</h1>
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
