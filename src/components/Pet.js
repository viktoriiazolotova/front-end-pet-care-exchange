import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import PropTypes from "prop-types";
import "./Pet.css";

const Pet = ({
  petId,
  petName,
  petTypeNeedsCare,
  petNeedsDescription,
  isNeedsCare,
  petsitterId,
  removePet,
}) => {
  // console.log(petName, petTypeNeedsCare);

  return (
    <div className="pet-card">
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Pet type: {petTypeNeedsCare}</CardHeader>
        <CardBody>
          <CardTitle tag="h5"> Name: {petName}</CardTitle>
          <CardSubtitle tag="h6">
            Looking for someone to take care me?
          </CardSubtitle>
          <CardText>
            {isNeedsCare
              ? "YES, I NEED TO BE TAKE CARED!"
              : "NO, I AM GOOD NOW!"}
          </CardText>
          <CardText>Pet needs: {petNeedsDescription}</CardText>

          <Button id="button-adopt-pet" onClick={() => removePet(petId)}>
            Pet is adopted
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

Pet.propTypes = {
  petId: PropTypes.number.isRequired,
  petName: PropTypes.string.isRequired,
  petTypeNeedsCare: PropTypes.string.isRequired,
  petNeedsDescription: PropTypes.string.isRequired,
  isNeedsCare: PropTypes.bool.isRequired,
  petsitterId: PropTypes.number.isRequired,
  removePet: PropTypes.func.isRequired,
};

export default Pet;
