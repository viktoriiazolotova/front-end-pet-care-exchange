import React from "react";
import Alert from "react-bootstrap/Alert";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewPetForm.css";

// const INITIAL_FORM_DATA = {
//   pet_name: "",
//   pet_type_needs_care: "",
//   pet_needs_description: "",
//   is_needs_care: false,
//   //   petsitter: ""?
// };

// const NewPetForm = ({ addPetCallbackFunc, responseToPostPetRequest }) => {
//   const [formData, setFormData] = useState(INITIAL_FORM_DATA);
//   const [showAlert, setShowAlert] = useState(false);

//   const handleNewDataChangePetForm = (e) => {
//     const newFormData = {
//       ...formData,
//       [e.target.name]: e.target.value,
//     };
//     // console.log("here is the new form data for pet", newFormData);
//     setFormData(newFormData);
//   };

//   const handleNewDataCheckedPetForm = (e) => {
//     const newFormData = {
//       ...formData,
//       [e.target.name]: e.target.checked,
//     };
//     // console.log("here is the new form data for pet", newFormData);
//     setFormData(newFormData);
//     // console.log("inside available", newFormData.is_available_help);
//     // console.log("inside looking", newFormData.is_looking_for_help);
//   };

//   const handleNewPetAdd = (e) => {
//     e.preventDefault();
//     addPetCallbackFunc(formData);
//     // #it does not clear pets needs field
//     setFormData(INITIAL_FORM_DATA);
//   };

//   return (
//     <div className="pet-form-page">
//       <Form className="pet-form" onSubmit={handleNewPetAdd}>
//         <h3>Submit a form to add Pet</h3>
//         <Row>
//           <Col md={4}>
//             <FormGroup>
//               <Label for="pet_name">Pet Name</Label>
//               <Input
//                 id="pet_name"
//                 name="pet_name"
//                 placeholder="Pet name placeholder"
//                 type="text"
//                 value={formData.pet_name}
//                 onChange={handleNewDataChangePetForm}
//               />
//             </FormGroup>
//           </Col>
//           <Row>
//             <Col md={4}>
//               <FormGroup className="block-pet-needs-description">
//                 <Label for="pet_needs_description">Pet's needs</Label>
//                 <Input
//                   id="pet_needs_description"
//                   name="pet_needs_description"
//                   placeholder="Describe what are your pets needs"
//                   type="textarea"
//                   value={FormData.pet_needs_description}
//                   onChange={handleNewDataChangePetForm}
//                 />
//               </FormGroup>
//             </Col>
//           </Row>
//         </Row>

//         <FormGroup check>
//           <Input
//             id="is_needs_care"
//             name="is_needs_care"
//             type="checkbox"
//             onChange={handleNewDataCheckedPetForm}
//           />
//           <Label check for="is_needs_care">
//             Does pet needs to be take care?
//           </Label>
//         </FormGroup>

//         <Row>
//           <Col md={4}>
//             <FormGroup>
//               <Label for="pet_type_needs_care">Your pet species:</Label>
//               <Input
//                 id="pet_type_needs_care"
//                 name="pet_type_needs_care"
//                 type="select"
//                 value={formData.pet_type_needs_care}
//                 onChange={handleNewDataChangePetForm}
//               >
//                 <option></option>
//                 <option>Cat</option>
//                 <option>Dog</option>
//                 <option>Bird</option>
//                 <option>Other</option>
//               </Input>
//             </FormGroup>
//           </Col>
//         </Row>

//         <Button type="submit" onClick={() => setShowAlert(true)}>
//           Submit form
//         </Button>
//       </Form>
//       <Row>
//         <Col md={4}>
//           <>
//             <Alert className="pet-alert" show={showAlert} variant="secondary">
//               <p>
//                 {responseToPostPetRequest ? `${responseToPostPetRequest}` : " "}
//               </p>

//               <div className="d-flex justify-content-end">
//                 <Button
//                   onClick={() => setShowAlert(false)}
//                   variant="outline-success"
//                 >
//                   Close
//                 </Button>
//               </div>
//             </Alert>
//           </>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// NewPetForm.propTypes = {
//   addPetCallbackFunc: PropTypes.func.isRequired,
//   responseToPostPetRequest: PropTypes.string.isRequired,
// };

// export default NewPetForm;

const INITIAL_FORM_DATA = {
  petName: "",
  petTypeNeedsCare: "",
  petNeedsDescription: "",
  isNeedsCare: false,
  //   petsitter: ""?
};

const NewPetForm = ({ addPetCallbackFunc, responseToPostPetRequest }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showAlert, setShowAlert] = useState(false);

  const handleNewDataChangePetForm = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value.toUpperCase(),
    };
    // console.log("here is the new form data for pet", newFormData);
    setFormData(newFormData);
  };

  const handleNewDataCheckedPetForm = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.checked,
    };
    console.log("here is the new form data for pet", newFormData);
    setFormData(newFormData);
    // console.log("inside available", newFormData.is_available_help);
    // console.log("inside looking", newFormData.is_looking_for_help);
  };

  const handleNewPetAdd = (e) => {
    e.preventDefault();
    addPetCallbackFunc(formData);
    // #it does not clear pets needs field
    // setFormData(INITIAL_FORM_DATA);
  };

  return (
    <div className="pet-form-page">
      <Form className="pet-form" onSubmit={handleNewPetAdd}>
        <h3>Submit a form to add Pet</h3>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="petName">Pet Name</Label>
              <Input
                id="petName"
                name="petName"
                placeholder="Pet name placeholder"
                type="text"
                value={formData.petName}
                onChange={handleNewDataChangePetForm}
              />
            </FormGroup>
          </Col>
          <Row>
            <Col md={4}>
              <FormGroup className="block-pet-needs-description">
                <Label for="petNeedsDescription">Pet's needs</Label>
                <Input
                  id="petNeedsDescription"
                  name="petNeedsDescription"
                  placeholder="Describe what are your pets needs"
                  type="textarea"
                  value={FormData.petNeedsDescription}
                  onChange={handleNewDataChangePetForm}
                />
              </FormGroup>
            </Col>
          </Row>
        </Row>

        <FormGroup check>
          <Input
            id="isNeedsCare"
            name="isNeedsCare"
            type="checkbox"
            onChange={handleNewDataCheckedPetForm}
          />
          <Label check for="isNeedsCare">
            Does pet needs to be take care?
          </Label>
        </FormGroup>

        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="petTypeNeedsCare">Your pet species:</Label>
              <Input
                id="petTypeNeedsCare"
                name="petTypeNeedsCare"
                type="select"
                value={formData.petTypeNeedsCare}
                onChange={handleNewDataChangePetForm}
              >
                <option></option>
                <option>CAT</option>
                <option>DOG</option>
                <option>BIRD</option>
                <option>OTHER</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit" onClick={() => setShowAlert(true)}>
          Submit form
        </Button>
      </Form>
      <Row>
        <Col md={4}>
          <>
            <Alert className="pet-alert" show={showAlert} variant="secondary">
              <p>
                {responseToPostPetRequest ? `${responseToPostPetRequest}` : " "}
              </p>

              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShowAlert(false)}
                  variant="outline-success"
                >
                  Close
                </Button>
              </div>
            </Alert>
          </>
        </Col>
      </Row>
    </div>
  );
};

NewPetForm.propTypes = {
  addPetCallbackFunc: PropTypes.func.isRequired,
  responseToPostPetRequest: PropTypes.string.isRequired,
};

export default NewPetForm;
