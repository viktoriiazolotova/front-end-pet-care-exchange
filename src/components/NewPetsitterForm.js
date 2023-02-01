import React from "react";
import Alert from "react-bootstrap/Alert";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewPetsitterForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  zipcode: "",
  city: "",
  state: "",
  pet_type_take_care: "",
  is_available_help: false,
  is_looking_for_help: false,
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
      [e.target.name]: e.target.value,
    };
    console.log("here is the new form data", newFormData);
    setFormData(newFormData);
  };

  const handleNewDataChecked = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.checked,
    };
    console.log("here is the new form data", newFormData);
    setFormData(newFormData);
    // console.log("inside available", newFormData.is_available_help);
    // console.log("inside looking", newFormData.is_looking_for_help);
  };

  const handleNewPetsitterAdd = (e) => {
    e.preventDefault();
    addPetsitterCallbackFunc(formData);
  };

  return (
    <div className="petsitter-form-page">
      <Form className="petsitter-form" onSubmit={handleNewPetsitterAdd}>
        <h1>Submit a form to become PetSitter</h1>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="name">Name</Label>
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
            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
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
          <Col md={3}>
            <FormGroup>
              <Label for="city">City</Label>
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
          <Col md={3}>
            <FormGroup>
              <Label for="state">State</Label>
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
          <Col md={2}>
            <FormGroup>
              <Label for="zipcode">Zip</Label>
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
            id="is_available_help"
            name="is_available_help"
            type="checkbox"
            onChange={handleNewDataChecked}

            //   onChange={handleNewTextDataChange}
          />
          <Label check for="is_available_help">
            Available to help
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            id="is_looking_for_help"
            name="is_looking_for_help"
            type="checkbox"
            onChange={handleNewDataChecked}
            // onChange={handleNewTextDataChange}
          />
          <Label check for="is_looking_for_help">
            Looking for help
          </Label>
        </FormGroup>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="pet_type_take_care">
                Select pet types you can help with:
              </Label>
              <Input
                id="pet_type_take_care"
                name="pet_type_take_care"
                type="select"
                value={formData.pet_type_take_care}
                onChange={handleNewTextDataChange}
              >
                <option></option>
                <option>Cat</option>
                <option>Dog</option>
                <option>Bird</option>
                <option>Any</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* <Button type="submit">Submit form</Button> */}

        <Button type="submit" onClick={() => setShowAlert(true)}>
          Submit form
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
