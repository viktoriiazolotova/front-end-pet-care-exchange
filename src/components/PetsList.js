import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import Pet from "./Pet";

const PetsList = (pets) => {
  //   const [petsList, setPetsList] = useState([]);
  //   const API_URL = "http://localhost:8000/api/petsitters/";
  //   const API_URL_PETS = "http://localhost:8000/api/pets/";
  //   const fetchAllPets = () => {
  //     axios
  //       .get(API_URL_PETS)
  //       .then((res) => {
  //         console.log("all_pets", res.data);
  //         const petsAPIResCopy = res.data.map((pet) => {
  //           return {
  //             petId: pet.pk,
  //             petName: pet.pet_name,
  //             petType: pet.pet_type,
  //             petNeedsDescription: pet.pet_needs_description,
  //             isNeedsCare: pet.is_needs_care,
  //             petsitterId: pet.petsitter,
  //           };
  //         });
  //         console.log("petsAPIcopy", petsAPIResCopy);
  //         setPetsList(petsAPIResCopy);
  //       })

  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   useEffect(fetchAllPets, []);

  // #function to get all pets for one petsitter
  //   let id = 3;
  //   const loadPetsPerPersitter = () => {
  //     axios
  //       .get(`${API_URL}${id}/pets/`)
  //       .then((res) => {
  //         console.log("load pets for one petsitter", res.data);
  //       })

  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   useEffect(loadPetsPerPersitter, []);

  const getPetsCards = ({ pets }) => {
    return pets.map((pet) => (
      <Pet
        key={pet.petId}
        petId={pets.petId}
        petName={pet.petName}
        petType={pet.petType}
        petNeedsDescription={pet.petNeedsDescription}
        isNeedsCare={pet.petTypeNeedsCare}
        petsitterName={pet.petsitterName}
      />
    ));
  };

  return (
    <div>
      <h2> Here are our loves pets:</h2>
      <ul>{getPetsCards(pets)}</ul>
    </div>
  );
};

export default PetsList;
