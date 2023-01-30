import React from "react";

const Pet = ({
  petName,
  petTypeNeedsCare,
  petNeedsDescription,
  isNeedsCare,
  petsitterName,
}) => {
  console.log(petName);

  return (
    <div>
      <p>Name: {petName}</p>
      <p>Pet type: {petTypeNeedsCare}</p>
      <p>Pet needs: {petNeedsDescription}</p>
      <p>
        Looking for someone to take care me?
        {isNeedsCare ? "yes, needs care" : "no needed care right now"}
      </p>
      <a href="/petsitters/"> Contact my owner {petsitterName}</a>
      <hr></hr>
    </div>
  );
};

export default Pet;
