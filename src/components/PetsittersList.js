import React from "react";

import PropTypes from "prop-types";
import "./PetsittersList.css";
// import Button from "react-bootstrap/Button";
import Petsitter from "./Petsitter";

const PetsittersList = ({
  petsitters,
  loadPetsitterOnclick,
  deletePetsitter,
}) => {
  const getPetsittersCards = (petsitters) => {
    return petsitters.map((petsitter) => (
      <Petsitter
        key={petsitter.id}
        id={petsitter.id}
        name={petsitter.name}
        email={petsitter.email}
        zipcode={petsitter.zipcode}
        city={petsitter.city}
        isAvailableHelp={petsitter.isAvailableHelp}
        petType={petsitter.petType}
        deletePetsitter={deletePetsitter}
      />
      // <li key={petsitter.id} onClick={() => loadPetsitterOnclick(petsitter)}>
      //   {petsitter.name}
      //   <br></br>
      // {/* <Button variant="outline-primary">Edit</Button>
      // <Button variant="outline-primary">Delete</Button> */}

      // </li>
    ));
  };
  return (
    <div className="petsitters-list">
      <ul className="petsitters-list-no-bullet">
        {getPetsittersCards(petsitters)}
      </ul>
    </div>
  );
};

PetsittersList.propTypes = {
  petsitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      // isAvailableHelp: PropTypes.bool.isRequired,
      // petType: PropTypes.string.isRequired,
    })
  ).isRequired,
  //   loadPetsitterOnclick: PropTypes.func.isRequired,
  deletePetsitter: PropTypes.func.isRequired,
};

export default PetsittersList;
