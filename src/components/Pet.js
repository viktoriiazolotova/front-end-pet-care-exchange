import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import "./Pet.css";

const Pet = ({
  petId,
  petName,
  petTypeNeedsCare,
  petNeedsDescription,
  isNeedsCare,
  petsitterName,
  removePet,
}) => {
  console.log(petName, petTypeNeedsCare);

  return (
    <div>
      <p>Name: {petName}</p>
      <p>Pet type: {petTypeNeedsCare}</p>
      <p>Pet needs: {petNeedsDescription}</p>
      <p>
        Looking for someone to take care me?
        {isNeedsCare ? "yes, needs care" : "no needed care right now"}
      </p>
      {/* <a href="/petsitters/"> Contact my owner {petsitterName}</a> */}

      <Button className="pet-card-button" onClick={() => removePet(petId)}>
        Pet is adopted{" "}
      </Button>
      <hr></hr>
    </div>
  );
};

Pet.propTypes = {
  petId: PropTypes.number.isRequired,
  petName: PropTypes.string.isRequired,
  petTypeNeedsCare: PropTypes.string.isRequired,
  petNeedsDescription: PropTypes.string.isRequired,
  isNeedsCare: PropTypes.bool.isRequired,
  petsitterName: PropTypes.string.isRequired,
  removePet: PropTypes.func.isRequired,
};

export default Pet;
