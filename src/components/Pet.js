import React from "react";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import PropTypes from "prop-types";
import "./Pet.css";
import { GiHummingbird, GiSittingDog, GiCat, GiPawHeart } from "react-icons/gi";

const Pet = ({
  petId,
  petName,
  petTypeNeedsCare,
  petNeedsDescription,
  isNeedsCare,
  removePet,
}) => {
  let petIcon = " ";
  if (petTypeNeedsCare === "CAT") {
    petIcon = <GiCat size="30px" color="grey" />;
  } else if (petTypeNeedsCare === "DOG") {
    petIcon = <GiSittingDog size="30px" color="grey" />;
  } else if (petTypeNeedsCare === "BIRD") {
    petIcon = <GiHummingbird size="30px" color="grey" />;
  } else {
    petIcon = <GiPawHeart size="30px" color="grey" />;
  }

  return (
    <div className="pet-card">
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardTitle id="pet-name" className="mb-4" tag="h5">
            Name: {petName}
          </CardTitle>
          <CardText>
            {petTypeNeedsCare} {petIcon}
          </CardText>
          <CardText tag="h6">Looking for someone to take care me?</CardText>
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
  removePet: PropTypes.func.isRequired,
};

export default Pet;
