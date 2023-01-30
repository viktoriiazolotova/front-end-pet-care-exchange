import React from "react";
import PropTypes from "prop-types";
import "./PetsittersList.css";
import Petsitter from "./Petsitter";
// import Button from "react-bootstrap/Button";

const PetsittersList = ({
  petsitters,
  loadPetsitterOnClick,
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
        state={petsitter.state}
        isAvailableHelp={petsitter.isAvailableHelp}
        isLookingForHelp={petsitter.isLookingForHelp}
        petTypeTakeCare={petsitter.petTypeTakeCare}
        photoPetsitter={petsitter.photoPetsitter}
        deletePetsitter={deletePetsitter}
        loadPetsitterOnClick={loadPetsitterOnClick}
        // onClick={() => loadPetsitterOnClick(petsitter)}
      />
    ));
  };

  // const selectPetsitterOnClick = (petsitters) => {
  //   return petsitters.map((petsitter) => {
  //     <li key={petsitter.id} onClick={() => loadPetsitterOnClick(petsitter)}>
  //       {petsitter.name}
  //     </li>;
  //   });
  // };

  return (
    <div className="petsitters-list">
      <h1>Here are the petsitters:</h1>
      <ul className="petsitters-list-no-bullet">
        {getPetsittersCards(petsitters)}
        {/* {selectPetsitterOnClick(petsitters)} */}
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
