import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { BsCheckCircle } from "react-icons/bs";
import {
  CardBody,
  CardText,
  CardTitle,
  Container,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Col, Row } from "react-bootstrap";
import NewPetForm from "./NewPetForm";
import Pet from "./Pet";
import "./SelectedPetsitter.css";
import { useParams } from "react-router";
// import axios from "axios";

const SelectedPetsitter = ({
  pets,
  selectedPetsitter,
  removePet,
  addPetCallbackFunc,
  responseToPostPetRequest,
  updatePetsitterAvailability,
  updatePetsitterLookingHelp,
  loadPetsitterOnClick,
}) => {
  const [showNewFormAddPet, setNewFormAddPet] = useState(false);
  // console.log("slected petsitter under selected component", selectedPetsitter);

  let classPetsitterIsAvailable = selectedPetsitter.isAvailableHelp
    ? "petsitters-available"
    : "petsitters-not-available";

  let availabilityStatus = selectedPetsitter.isAvailableHelp
    ? "Ready to help."
    : "Unfortunately, I am busy at the moment.";

  let classPetsitterIsLookingForHelp = selectedPetsitter.isLookingForHelp
    ? "petsitters-available"
    : "petsitters-not-available";

  let lookingHelpStatus = selectedPetsitter.isLookingForHelp
    ? "I am looking for help."
    : "Dont need help right now.";

  const updatePetsitterStatusAvailable = () => {
    updatePetsitterAvailability(!selectedPetsitter.isAvailableHelp);
  };

  const updatePetsitterStatusHelp = () => {
    updatePetsitterLookingHelp(!selectedPetsitter.isLookingForHelp);
  };

  const { id } = useParams();
  // console.log(id);
  // useEffect(() => {
  //   console.log("Params", id);
  //   if (selectedPetsitter.name === "") {
  //     loadPetsitterOnClick(id);
  //   }
  // });
  useEffect(() => {
    console.log("Params", id);
    if (selectedPetsitter.name === "") {
      loadPetsitterOnClick(id);
    }
  }, []);

  const getPetsCards = (pets) => {
    return pets.map((pet) => (
      <Pet
        key={pet.petId}
        petId={pet.petId}
        petName={pet.petName}
        petTypeNeedsCare={pet.petTypeNeedsCare}
        petNeedsDescription={pet.petNeedsDescription}
        isNeedsCare={pet.isNeedsCare}
        petsitterId={pet.petsitterId}
        removePet={removePet}
      />
    ));
  };

  return (
    <Container className="mt-4 md-4">
      <Row id="profile-info-div">
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
                  src={`${selectedPetsitter.photoPetsitter}`}
                  id="picture-profile"
                ></img>
                <Button size="sm" type="button">
                  Edit rofile
                </Button>
              </div>
              <div id="div-name-location">
                <CardTitle tag="h4" id="petsitter-name">
                  {selectedPetsitter.name}
                </CardTitle>
                <CardText className="mb-2 text-muted pt-4">
                  {selectedPetsitter.city},{" "}
                  <span style={{ padding: "1%" }}>
                    {selectedPetsitter.state},
                  </span>
                  {selectedPetsitter.zipcode}
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
                  <p>Messages</p>
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
                <div
                  style={{
                    padding: "2%",
                    paddingTop: "4%",
                  }}
                >
                  <CardSubtitle className="pb-4" tag="h5">
                    <span className="text-muted ">
                      Here is my contact info:
                    </span>
                    <hr />
                    <span id="petsitter-email">{selectedPetsitter.email}</span>
                  </CardSubtitle>
                  {/* <Button id="button-contact-me">
                      Contact me (does not work)
                    </Button> */}
                  <div className="petsitter-status-div">
                    <CardText className="pb-3">
                      Click on the circle to change status:
                    </CardText>
                    <CardSubtitle tag="h6" className="mb-4">
                      <BsCheckCircle
                        size="40px"
                        className={classPetsitterIsAvailable}
                        onClick={() => {
                          updatePetsitterStatusAvailable();
                        }}
                      ></BsCheckCircle>
                      Availability:
                    </CardSubtitle>
                    <CardText>{availabilityStatus}</CardText>
                    <CardSubtitle tag="h6" className="mb-2">
                      <BsCheckCircle
                        className={classPetsitterIsLookingForHelp}
                        size="40px"
                        onClick={() => {
                          updatePetsitterStatusHelp();
                        }}
                      ></BsCheckCircle>
                      Looking for help:
                    </CardSubtitle>
                    <CardText>{lookingHelpStatus}</CardText>
                  </div>
                </div>
                <Row>
                  <Row className="p-4">
                    <CardSubtitle className="pb-3 pl-3" tag="h5">
                      My Pets
                    </CardSubtitle>
                    <Col sm="6">
                      <Button
                        id="button-add-pet"
                        size="med"
                        onClick={() => setNewFormAddPet(true)}
                      >
                        Add Pet
                      </Button>
                      <Button
                        size="med"
                        onClick={() => setNewFormAddPet(false)}
                        disabled={!showNewFormAddPet}
                      >
                        Discard Form
                      </Button>
                    </Col>
                  </Row>
                  <Alert show={showNewFormAddPet}>
                    <NewPetForm
                      responseToPostPetRequest={responseToPostPetRequest}
                      addPetCallbackFunc={addPetCallbackFunc}
                    />
                  </Alert>
                  <ul className="pets-cards">{getPetsCards(pets)}</ul>
                </Row>
              </CardBody>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

SelectedPetsitter.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      petId: PropTypes.number.isRequired,
      petName: PropTypes.string.isRequired,
      petTypeNeedsCare: PropTypes.string.isRequired,
      petNeedsDescription: PropTypes.string.isRequired,
      isNeedsCare: PropTypes.bool.isRequired,
      petsitterId: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedPetsitter: PropTypes.shape({
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
  }).isRequired,
  removePet: PropTypes.func.isRequired,
  updatePetsitterAvailability: PropTypes.func.isRequired,
  updatePetsitterLookingHelp: PropTypes.func.isRequired,
  addPetCallbackFunc: PropTypes.func.isRequired,
  responseToPostPetRequest: PropTypes.string.isRequired,
  loadPetsitterOnClick: PropTypes.func.isRequired,
};

export default SelectedPetsitter;
