import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pet from "./Pet";

const PetsList = () => {
  const [petsList, setPetsList] = useState([]);
  const API_URL = "http://localhost:8000/api/petsitters/";
  const API_URL_PETS = "http://localhost:8000/api/pets/";
  const fetchAllPets = () => {
    axios
      .get(API_URL_PETS)
      .then((res) => {
        console.log("all_pets", res.data);
        const petsAPIResCopy = res.data.map((pet) => {
          return {
            petId: pet.pk,
            petName: pet.pet_name,
            petTypeNeedsCare: pet.pet_type_needs_care,
            petNeedsDescription: pet.pet_needs_description,
            isNeedsCare: pet.is_needs_care,
            petsitterId: pet.petsitter,
          };
        });
        console.log("petsAPIcopy", petsAPIResCopy);
        setPetsList(petsAPIResCopy);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(fetchAllPets, []);

  //   #function to get all pets for one petsitter
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

  const getPetsCards = (pets) => {
    return petsList.map((pet) => (
      <Pet
        key={pet.petId}
        petId={pets.petId}
        petName={pet.petName}
        petTypeNeedsCare={pet.petTypeNeedsCare}
        petNeedsDescription={pet.petNeedsDescription}
        isNeedsCare={pet.petTypeNeedsCare}
        petsitterId={pet.petsitterId}
      />
    ));
  };

  return (
    <div>
      <h2> Here are our loves pets:</h2>
      <ul>{getPetsCards(petsList)}</ul>
    </div>
  );
};

export default PetsList;
