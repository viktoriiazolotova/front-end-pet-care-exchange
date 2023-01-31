import React from "react";
import {
  CardBody,
  CardText,
  CardTitle,
  Container,
  CardSubtitle,
  Button,
} from "reactstrap";
// import { useState, useEffect } from "react";
// import axios from "axios";
import Pet from "./Pet";
import { Col, Row } from "react-bootstrap";

// const SelectedPetsitter = ({ pets, SelectedPetsitter }) => {
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

const SelectedPetsitter = ({ pets, selectedPetsitter }) => {
  const getPetsCards = (pets) => {
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
    <div
      className="selected-petsitter"
      //   style={{
      //     background: "pink",
      //   }}
    >
      <Container>
        <Row
          style={{
            display: "flex",
            backgroundColor: "#38bac4",
            height: "200px",
            margin: "5%",
            // width: "auto",
          }}
        >
          <div>
            <div className="Card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "150px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                  }}
                >
                  <img
                    alt="pictureProfile"
                    src={`${selectedPetsitter.photo_petsitter}`}
                    // width="100px"
                    // height="100px"
                    style={{ width: "150px", height: "150px", zIndex: "1" }}
                  ></img>
                  <Button size="sm" type="button">
                    Edit profile
                  </Button>
                </div>
                <div
                //   style={{
                //     marginTop: "130px",
                //   }}
                >
                  <CardTitle
                    tag="h6"
                    // style={{
                    //   height: "100px",
                    //   alignItems: "center",
                    // }}
                  >
                    {selectedPetsitter.name}
                  </CardTitle>
                  <CardText className="mb-2 text-muted">
                    {/* {selectedPetsitter.city}, {selectedPetsitter.state}, */}
                    {/* {selectedPetsitter.zipcode} */}
                  </CardText>
                </div>
              </div>

              <div style={{ backgroundColor: "#f8f9fa" }}>
                <div
                  style={{
                    height: "100px",
                    display: "flex",
                    justifyContent: "end",
                    textAlign: "center",
                    padding: "5px",
                    width: "90%",
                  }}
                >
                  <div>
                    <p tag="h5">0</p>
                    <p>PetHearts</p>
                  </div>
                  <div className="px-3">
                    <p tag="h5">0</p>
                    <p>Reviews</p>
                  </div>
                  <div>
                    <p tag="h5">0</p>
                    <p>Pets</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "between",
                  alignItems: "center",
                }}
              >
                <CardBody>
                  <div>
                    <CardSubtitle tag="h6">
                      Here is my detailed info:
                    </CardSubtitle>

                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        // textAlign: "center",
                        padding: "5%",
                      }}
                    >
                      <CardText>
                        Availability:
                        {/* {selectedPetsitter.is_available_help
                          ? "Ready to help"
                          : "Unfortunately, I am busy at the moment"} */}
                      </CardText>
                      <CardText>
                        Looking for help:{" "}
                        {/* {selectedPetsitter.is_looking_for_help
                          ? "I am looking for help"
                          : "Dont need help right now"} */}
                      </CardText>
                      <CardText></CardText>
                    </div>
                  </div>
                  <Row>
                    <CardSubtitle tag="h6"> My Pets</CardSubtitle>
                    <ul>{getPetsCards(pets)}</ul>
                    {/* <Col sm="6">
                      <img alt="pet_photo1"></img>
                    </Col>
                    <Col sm="6">
                      <img alt="pet_photo2"></img>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="6">
                      <img alt="pet_photo3"></img>
                    </Col>
                    <Col sm="6">
                      <img alt="pet_photo4"></img>
                    </Col> */}
                  </Row>
                </CardBody>
              </div>
            </div>
          </div>
        </Row>
        {/* <h1>Hi, here is detail info about me</h1>
        <h2> Here are our loves pets:</h2> */}
        {/* <ul>{getPetsCards(pets)}</ul> */}
      </Container>
    </div>
  );
};

export default SelectedPetsitter;
