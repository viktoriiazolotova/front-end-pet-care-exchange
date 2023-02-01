import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  CardBody,
  CardText,
  CardTitle,
  Container,
  CardSubtitle,
  Button,
} from "reactstrap";
import Alert from "react-bootstrap/Alert";
import Pet from "./Pet";
import NewPetForm from "./NewPetForm";
import { Col, Row } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import "./SelectedPetsitter.css";

const SelectedPetsitter = ({
  pets,
  selectedPetsitter,
  removePet,
  addPetCallbackFunc,
  responseToPostPetRequest,
}) => {
  const [showNewFormAddPet, setNewFormAddPet] = useState(false);

  const getPetsCards = (pets) => {
    return pets.map((pet) => (
      <Pet
        key={pet.petId}
        petId={pet.petId}
        petName={pet.petName}
        petTypeNeedsCare={pet.petTypeNeedsCare}
        petNeedsDescription={pet.petNeedsDescription}
        isNeedsCare={pet.isNeedsCare}
        petsitterName={pet.petsitterName}
        removePet={removePet}
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
        <Row className="profile-info-div">
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
                    style={{
                      width: "150px",
                      height: "150px",
                      zIndex: "1",
                      borderRadius: "100px",
                    }}
                  ></img>
                  <Button size="sm" type="button">
                    Edit profile
                  </Button>
                </div>
                <div
                  style={{
                    paddingTop: "50%",
                    paddingLeft: "60%",
                  }}
                >
                  <CardTitle
                    tag="h4"
                    style={{
                      width: "300px",

                      //   alignItems: "center",
                    }}
                  >
                    {selectedPetsitter.name}
                  </CardTitle>
                  <CardText
                    className="mb-2 text-muted"
                    style={{ paddingTop: "5%" }}
                  >
                    {selectedPetsitter.city}, {selectedPetsitter.state},
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
                  <div
                    style={{
                      padding: "2%",
                      paddingTop: "4%",
                    }}
                  >
                    <CardSubtitle style={{ paddingBottom: "4%" }} tag="h5">
                      Here is my Contact info: {selectedPetsitter.email}
                    </CardSubtitle>

                    <Button>Contact me</Button>

                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "3%",
                        marginTop: "3%",
                      }}
                    >
                      <CardText>
                        <BsCheckCircle size="20px"></BsCheckCircle>
                        Availability:
                        <span>
                          {selectedPetsitter.is_available_help
                            ? "Ready to help"
                            : "Unfortunately, I am busy at the moment"}
                        </span>
                      </CardText>
                      <CardText>
                        <BsCheckCircle size="20px"></BsCheckCircle>
                        Looking for help:
                        <span>
                          {selectedPetsitter.is_looking_for_help
                            ? "I am looking for help"
                            : "Dont need help right now"}
                        </span>
                      </CardText>
                      <CardText></CardText>
                    </div>
                  </div>
                  <Row>
                    <Row>
                      <CardSubtitle style={{ padding: "3%" }} tag="h5">
                        My Pets
                      </CardSubtitle>
                      <Col sm="6">
                        <Button
                          size="med"
                          onClick={() => setNewFormAddPet(true)}
                        >
                          Add Pet
                        </Button>
                        <Button
                          size="med"
                          color="success"
                          onClick={() => setNewFormAddPet(false)}
                        >
                          Discard
                        </Button>
                      </Col>
                    </Row>
                    <Alert show={showNewFormAddPet}>
                      <NewPetForm
                        responseToPostPetRequest={responseToPostPetRequest}
                        addPetCallbackFunc={addPetCallbackFunc}
                      />
                    </Alert>
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
      </Container>
    </div>
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
      petsitterName: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPetsitter: PropTypes.shape({
    pk: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    is_available_help: PropTypes.bool.isRequired,
    is_looking_for_help: PropTypes.bool.isRequired,
    pet_type_take_care: PropTypes.string.isRequired,
    photo_petsitter: PropTypes.string.isRequired,
  }).isRequired,
  removePet: PropTypes.func.isRequired,
};

export default SelectedPetsitter;
