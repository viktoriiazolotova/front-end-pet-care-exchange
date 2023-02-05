import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
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
// import { useParams } from "react-router-dom";
import NewPetForm from "./NewPetForm";
import Pet from "./Pet";
import "./SelectedPetsitter.css";

const SelectedPetsitter = ({
  petsitters,
  pets,
  selectedPetsitter,
  removePet,
  addPetCallbackFunc,
  responseToPostPetRequest,
  updatePetsitterAvailability,
  updatePetsitterLookingHelp,
  // updatePetsitterId,
}) => {
  const [showNewFormAddPet, setNewFormAddPet] = useState(false);

  let classPetsitterIsAvailable = selectedPetsitter.is_available_help
    ? "petsitters-available"
    : "petsitters-not-available";

  let availabilityStatus = selectedPetsitter.is_available_help
    ? "Ready to help."
    : "Unfortunately, I am busy at the moment.";

  let classPetsitterIsLookingForHelp = selectedPetsitter.is_looking_for_help
    ? "petsitters-available"
    : "petsitters-not-available";

  let lookingHelpStatus = selectedPetsitter.is_looking_for_help
    ? "I am looking for help."
    : "Dont need help right now.";

  const updatePetsitterStatusAvailable = () => {
    updatePetsitterAvailability(!selectedPetsitter.is_available_help);
  };

  const updatePetsitterStatusHelp = () => {
    updatePetsitterLookingHelp(!selectedPetsitter.is_looking_for_help);
  };
  // const params = useParams();
  // useEffect(() => {
  //   console.log("Params", params);
  // }, [params]);

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
    <div className="selected-petsitter">
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
                    id="picture-profile"
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
                    }}
                  >
                    {selectedPetsitter.petsitterId}
                    {selectedPetsitter.name}
                  </CardTitle>
                  <CardText
                    className="mb-2 text-muted pt-4"
                    // style={{ paddingTop: "5%" }}
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
                      Here is my Contact info: {selectedPetsitter.email}
                    </CardSubtitle>

                    <Button id="button-contact-me">
                      Contact me (does not work)
                    </Button>

                    <div className="petsitter-status-div">
                      <CardText className="pb-3">
                        Click on the circle to change status:
                      </CardText>
                      {/* mb-2 means margin bottom */}
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
                    <ul className="pets-cards">{getPetsCards(pets)}</ul>
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
      petsitterId: PropTypes.number.isRequired,
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
  updatePetsitterAvailability: PropTypes.func.isRequired,
  updatePetsitterLookingHelp: PropTypes.func.isRequired,
};

export default SelectedPetsitter;
