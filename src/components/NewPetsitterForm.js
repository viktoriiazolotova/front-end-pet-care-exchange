import React from "react";
import Alert from "react-bootstrap/Alert";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewPetsitterForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  zipcode: "",
  city: "",
  state: "",
  petTypeTakeCare: "",
  isAvailableHelp: false,
  isLookingForHelp: false,
  photoPetsitter: "",
};

// const isChecked = (param) => {
//   return param ? true : false;
// };

const NewPetsitterForm = ({
  addPetsitterCallbackFunc,
  responseToPostSitterRequest,
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showAlert, setShowAlert] = useState(false);

  const handleNewTextDataChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value.toUpperCase(),
    };
    // console.log("here is the new form data", newFormData);
    setFormData(newFormData);
  };

  const handleNewDataChecked = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.checked,
    };
    // console.log("here is the new form data", newFormData);
    setFormData(newFormData);
    // console.log("inside available", newFormData.isAvailableHelp);
    // console.log("inside looking", newFormData.isAvailableHelp);
  };
  const handleFileInput = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.files[0],
    };
    console.log("here is the new form data", newFormData);
    setFormData(newFormData);
  };

  const handleNewPetsitterAdd = (e) => {
    e.preventDefault();
    addPetsitterCallbackFunc(formData);
    // setFormData(INITIAL_FORM_DATA);
  };

  return (
    <div className="petsitter-form-page">
      <Form className="petsitter-form" onSubmit={handleNewPetsitterAdd}>
        <h1>Submit a form to become PetSitter</h1>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="name placeholder"
                type="text"
                value={formData.name}
                onChange={handleNewTextDataChange}
              />
            </FormGroup>
          </Col>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email placeholder"
                  type="text"
                  value={FormData.email}
                  onChange={handleNewTextDataChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="city">City *</Label>
              <Input
                id="city"
                name="city"
                placeholder="Seattle"
                type="text"
                value={formData.city}
                onChange={handleNewTextDataChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State *</Label>
              <Input
                id="state"
                name="state"
                placeholder="XX"
                type="text"
                value={formData.state}
                onChange={handleNewTextDataChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="zipcode">Zip *</Label>
              <Input
                id="zipcode"
                name="zipcode"
                placeholder="00000"
                type="text"
                value={formData.zipcode}
                onChange={handleNewTextDataChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input
            id="isAvailableHelp"
            name="isAvailableHelp"
            type="checkbox"
            onChange={handleNewDataChecked}

            //   onChange={handleNewTextDataChange}
          />
          <Label check for="isAvailableHelp">
            Available to help
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="isLookingForHelp"
            name="isLookingForHelp"
            type="checkbox"
            onChange={handleNewDataChecked}
            // onChange={handleNewTextDataChange}
          />
          <Label check for="isLookingForHelp">
            Looking for help
          </Label>
        </FormGroup>
        <Row className="mt-3">
          <Col md={4}>
            <FormGroup>
              <Label for="petTypeTakeCare">
                Select pet types you can help with: *
              </Label>
              <Input
                id="petTypeTakeCare"
                name="petTypeTakeCare"
                type="select"
                value={formData.petTypeTakeCare}
                onChange={handleNewTextDataChange}
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
        <Row>
          <Col>
            <FormGroup>
              <Label for="photoPetsitter" sm={6}>
                Add picture to the profile (optional):
              </Label>
              <Col sm={6}>
                <Input
                  type="file"
                  name="photoPetsitter"
                  id="photoPetsitter"
                  // value={formData.photoPetsitter}
                  onChange={handleFileInput}
                />
                <FormText color="muted">
                  Add picture to the profile in format(.jpg, .jpeg), otherwise
                  it will be defaulted.
                </FormText>
              </Col>
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit" onClick={() => setShowAlert(true)}>
          Submit Form
        </Button>
      </Form>
      <Row>
        <Col md={4}>
          <>
            <Alert
              className="petsitter-alert"
              show={showAlert}
              variant="secondary"
            >
              <p>
                {responseToPostSitterRequest
                  ? `${responseToPostSitterRequest}`
                  : " "}
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

NewPetsitterForm.propTypes = {
  addPetsitterCallbackFunc: PropTypes.func.isRequired,
  responseToPostSitterRequest: PropTypes.string.isRequired,
};

export default NewPetsitterForm;
