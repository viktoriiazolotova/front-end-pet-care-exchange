import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import NewPetsitterForm from "./components/NewPetsitterForm";
import NoPage from "./pages/NoPage";
import PetsittersList from "./components/PetsittersList";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import SelectedPetsitter from "./components/SelectedPetsitter";

function App() {
  const [petsittersList, setPetsitterList] = useState([]);
  const [responseToPostSitterRequest, setResponse] = useState("");
  const [selectedPetsitter, setSelectedPetsitter] = useState({
    id: "",
    name: "",
    email: "",
    zipcode: "",
    city: "",
    state: "",
    is_available_help: false,
    is_looking_for_help: false,
    pet_type_take_care: "",
    photo_petsitter: "",
  });
  const [petsList, setPetsList] = useState([]);

  const API_URL = "http://localhost:8000/api/petsitters/";

  const fetchAllPetsitters = () => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        const petsittersAPIResCopy = res.data.map((petsitter) => {
          return {
            id: petsitter.pk,
            name: petsitter.name,
            email: petsitter.email,
            zipcode: petsitter.zipcode,
            city: petsitter.city,
            state: petsitter.state,
            isAvailableHelp: petsitter.is_available_help,
            isLookingForHelp: petsitter.is_looking_for_help,
            petTypeTakeCare: petsitter.pet_type_take_care,
            photoPetsitter: petsitter.photo_petsitter,
          };
        });
        setPetsitterList(petsittersAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchAllPetsitters, []);
  // did not work
  // const loadPetsitterOnClick = (petsitter) => {
  //   console.log(`${API_URL}${petsitter.id}/pets/`);
  //   axios
  //     .get(`${API_URL}${petsitter.id}/pets/`)
  //     .then((res) => {
  //       const petsAPIResCopy = res.data.map((pet) => {
  //         return {
  //           petId: pet.pk,
  //           petName: pet.pet_name,
  //           petType: pet.pet_type,
  //           petNeedsDescription: pet.pet_needs_description,
  //           isNeedsCare: pet.is_needs_care,
  //           petsitterName: pet.petsitter,
  //         };
  //       });
  //       setPetsList(petsAPIResCopy);
  //       console.log(petsAPIResCopy);
  //       setSelectedPetsitter(petsitter);
  //       console.log("selected", petsitter);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const loadPets = (id) => {
    console.log(`${API_URL}${id}/pets/`);
    axios
      .get(`${API_URL}${id}/pets/`)
      .then((res) => {
        const petsAPIResCopy = res.data.map((pet) => {
          return {
            petId: pet.pk,
            petName: pet.pet_name,
            petType: pet.pet_type,
            petNeedsDescription: pet.pet_needs_description,
            isNeedsCare: pet.is_needs_care,
            petsitterName: pet.petsitter,
          };
        });
        setPetsList(petsAPIResCopy);
        console.log(petsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadPetsitterOnClick = (id) => {
    console.log(`${API_URL}${id}/`);
    axios
      .get(`${API_URL}${id}/`)
      .then((res) => {
        setSelectedPetsitter(res.data);
        console.log("selected petsitter", res.data);
        console.log(selectedPetsitter);
        loadPets(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPetsitter = (newPetsitterInfo) => {
    // in order to handle data from reactstrap form needed to in this way below:
    const formData = new FormData();
    formData.append("name", newPetsitterInfo.name);
    formData.append("email", newPetsitterInfo.email);
    formData.append("zipcode", newPetsitterInfo.zipcode);
    formData.append("city", newPetsitterInfo.city);
    formData.append("state", newPetsitterInfo.state);
    formData.append("pet_type_take_care", newPetsitterInfo.pet_type_take_care);
    formData.append("is_available_help", newPetsitterInfo.is_available_help);
    formData.append(
      "is_looking_for_help",
      newPetsitterInfo.is_looking_for_help
    );

    // console.log("add Petsitter function called");
    // console.log("here formdata", formData);

    axios
      .post("http://localhost:8000/api/petsitters/", formData)

      .then((response) => {
        // console.log(formData);
        // console.log(newPetsitterInfo);
        // fetchAllPetsitters();
        console.log("here is my response", response);
        const responseToPostSitterRequest = `${response.data.name} successfully added.`;
        setResponse(responseToPostSitterRequest);
        const newPetsittersList = [...petsittersList];
        // const newPetsittersList = JSON.parse(JSON.stringify(petsittersList));
        // const newPetinfo = JSON.parse(JSON.stringify(newPetsitterInfo));
        const newPetsitterJSON = {
          // ...newPetinfo,
          ...newPetsitterInfo,
          id: response.data.pk,
          isAvailableHelp: response.data.is_available_help,
          petTypeTakeCare: response.data.pet_type_take_care,
          isLookingForHelp: response.data.is_looking_for_help,
          photoPetsitter: response.data.photo_petsitter,
        };
        newPetsittersList.push(newPetsitterJSON);
        // console.log("new list", newPetsittersList);
        setPetsitterList(newPetsittersList);
      })
      .catch((error) => {
        console.log(error);
        let responseToPostSitterRequest =
          "Check all fields, the field may not be blank or exceed the limit of chars or Enter a valid email address.";
        setResponse(responseToPostSitterRequest);
      });
  };

  const deletePetsitter = (id) => {
    // console.log("deletePetsitter Called");
    axios
      .delete(`${API_URL}${id}/`)
      .then(() => {
        const newPetsittersList = [];
        for (const petsitter of petsittersList) {
          if (petsitter.id !== id) {
            newPetsittersList.push(petsitter);
          }
        }
        setPetsitterList(newPetsittersList);
        console.log(newPetsittersList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="petsitters"
            element={
              <PetsittersList
                petsitters={petsittersList}
                deletePetsitter={deletePetsitter}
                loadPetsitterOnClick={loadPetsitterOnClick}
              />
            }
          />

          <Route
            // path={`petsitter/${selectedPetsitter.id}/`}
            path={"petsitter/:petsitterId/"}
            element={
              <SelectedPetsitter
                pets={petsList}
                selectedPetsitter={selectedPetsitter}
              ></SelectedPetsitter>
            }
          />
          <Route
            path="petsitteraccount"
            element={
              <NewPetsitterForm
                addPetsitterCallbackFunc={addPetsitter}
                responseToPostSitterRequest={responseToPostSitterRequest}
              />
            }
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
