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
  const [responseToPostSitterRequest, setResponseToPetsitterRequest] =
    useState("");
  const [petsList, setPetsList] = useState([]);
  const [responseToPostPetRequest, setResponseToPetRequest] = useState("");

  const [selectedPetsitter, setSelectedPetsitter] = useState({
    id: 0,
    name: "",
    email: "",
    zipcode: "",
    city: "",
    state: "",
    isAvailableHelp: false,
    isLookingForHelp: false,
    petTypeTakeCare: "",
    // photoPetsitter: "http://localhost:8000/media/blank-profile-picture.jpg",
    photoPetsitter: "",
  });

  // to decouple data from Python to Javascript
  const toSnakeCase = {
    isAvailableHelp: "is_available_help",
    isLookingForHelp: "is_looking_for_help",
    petTypeTakeCare: "pet_type_take_care",
    photoPetsitter: "photo_petsitter",
    petName: "pet_name",
    petTypeNeedsCare: "pet_type_needs_care",
    petNeedsDescription: "pet_needs_description",
    isNeedsCare: "is_needs_care",
    petsitterName: "petsitter",
    name: "name",
    email: "email",
    zipcode: "zipcode",
    city: "city",
    state: "state",
    pets: "pets",
    petsitterId: "petsitter",
  };

  // const API_URL = "http://localhost:8000/api/petsitters/";
  // const API_URL_PETS = "http://localhost:8000/api/pets/";

  const API_URL =
    "https://pet-care-exchange-backend.herokuapp.com/api/petsitters/";
  const API_URL_PETS =
    "https://pet-care-exchange-backend.herokuapp.com/api/pets/";
  const fetchAllPetsitters = () => {
    axios
      .get(API_URL)
      .then((res) => {
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

  const loadPets = (id) => {
    axios
      .get(`${API_URL}${id}/pets/`)
      .then((res) => {
        console.log("res.data:", res.data);
        const petsAPIResCopy = res.data.map((pet) => {
          return {
            petId: pet.pk,
            petName: pet.pet_name,
            petTypeNeedsCare: pet.pet_type_needs_care,
            petNeedsDescription: pet.pet_needs_description,
            isNeedsCare: pet.is_needs_care,
            petsitterId: pet.petsitter,
          };
        });
        setPetsList(petsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadPetsitterOnClick = (id) => {
    axios
      .get(`${API_URL}${id}/`)
      .then((response) => {
        const newSelectedPetsitterJson = {
          id: response.data.pk,
          name: response.data.name,
          email: response.data.email,
          zipcode: response.data.zipcode,
          city: response.data.city,
          state: response.data.state,
          isAvailableHelp: response.data.is_available_help,
          petTypeTakeCare: response.data.pet_type_take_care,
          isLookingForHelp: response.data.is_looking_for_help,
          photoPetsitter: response.data.photo_petsitter,
        };
        setSelectedPetsitter(newSelectedPetsitterJson);

        loadPets(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPetsitter = (newPetsitterInfo) => {
    // in order to handle data from reactstrap form needed to in this way below:
    const formData = new FormData();
    for (const field in newPetsitterInfo) {
      formData.append(toSnakeCase[field], newPetsitterInfo[field]);
      // console.log("field, value:", toSnakeCase[field], newPetsitterInfo[field]);
    }

    axios
      .post(API_URL, formData)
      .then((response) => {
        const responseToPostSitterRequest = `${response.data.name} successfully added.`;
        setResponseToPetsitterRequest(responseToPostSitterRequest);
        const newPetsittersList = [...petsittersList];
        const newPetsitterJSON = {
          ...newPetsitterInfo,
          id: response.data.pk,
          isAvailableHelp: response.data.is_available_help,
          petTypeTakeCare: response.data.pet_type_take_care,
          isLookingForHelp: response.data.is_looking_for_help,
          photoPetsitter: response.data.photo_petsitter,
        };
        newPetsittersList.push(newPetsitterJSON);
        setPetsitterList(newPetsittersList);
      })
      .catch((error) => {
        console.log(error);
        let responseToPostSitterRequest =
          "Check all fields, the field may not be blank or exceed the limit of chars or Enter a valid email address.";
        setResponseToPetsitterRequest(responseToPostSitterRequest);
      });
  };

  const addPet = (newPetInfo) => {
    // in order to handle data from reactstrap form needed to in this way below:
    const formData = new FormData();
    for (const field in newPetInfo) {
      formData.append(toSnakeCase[field], newPetInfo[field]);
      formData.append("petsitter", selectedPetsitter.id);
    }
    axios
      .post(API_URL_PETS, formData)
      .then((response) => {
        const responseToPostPetRequest = `${response.data.pet_name} successfully added.`;
        setResponseToPetRequest(responseToPostPetRequest);
        const newPetsList = [...petsList];
        const newPetsJSON = {
          ...newPetInfo,
          petId: response.data.pk,
          petName: response.data.pet_name,
          petTypeNeedsCare: response.data.pet_type_needs_care,
          petNeedsDescription: response.data.pet_needs_description,
          isNeedsCare: response.data.is_needs_care,
          petsitterId: response.data.petsitter,
        };
        newPetsList.push(newPetsJSON);
        setPetsList(newPetsList);
        loadPetsitterOnClick(selectedPetsitter.id);
      })
      .catch((error) => {
        console.log(error);
        let responseToPostPetRequest =
          "Check the pet name field, it may not be blank.";
        setResponseToPetRequest(responseToPostPetRequest);
      });
  };

  const updatePetsitterAvailability = (updatedStatus) => {
    const newPetsittersList = [];
    axios
      .patch(`${API_URL}${selectedPetsitter.id}/`, {
        is_available_help: updatedStatus,
      })
      .then((response) => {
        for (const petsitter of petsittersList) {
          if (petsitter.id !== selectedPetsitter.id) {
            newPetsittersList.push(petsitter);
          } else {
            const newPetsitter = {
              ...petsitter,
              isAvailableHelp: updatedStatus,
            };
            newPetsittersList.push(newPetsitter);
          }
        }
        setPetsitterList(newPetsittersList);
        loadPetsitterOnClick(selectedPetsitter.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePetsitterLookingHelp = (updatedStatus) => {
    axios
      .patch(`${API_URL}${selectedPetsitter.id}/`, {
        is_looking_for_help: updatedStatus,
      })
      .then((response) => {
        const newPetsittersList = [];
        for (const petsitter of petsittersList) {
          if (petsitter.id !== selectedPetsitter.id) {
            newPetsittersList.push(petsitter);
          } else {
            const newPetsitter = {
              ...petsitter,
              isLookingForHelp: updatedStatus,
            };
            newPetsittersList.push(newPetsitter);
          }
        }
        setPetsitterList(newPetsittersList);
        loadPetsitterOnClick(selectedPetsitter.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePetsitter = (id) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removePet = (petId) => {
    console.log("delete pet called");
    axios
      .delete(`${API_URL_PETS}${petId}/`)
      .then(() => {
        const newPetList = [];
        for (const pet of petsList) {
          if (pet.pk !== petId) {
            newPetList.push(pet);
          }
        }
        setPetsList(newPetList);
        loadPetsitterOnClick(selectedPetsitter.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="petsitteraccount"
            element={
              <NewPetsitterForm
                addPetsitterCallbackFunc={addPetsitter}
                responseToPostSitterRequest={responseToPostSitterRequest}
              />
            }
          />
          <Route
            path="petsitters/"
            element={
              <PetsittersList
                petsitters={petsittersList}
                deletePetsitter={deletePetsitter}
                loadPetsitterOnClick={loadPetsitterOnClick}
              />
            }
          ></Route>
          <Route
            path="petsitters/:id/"
            element={
              <SelectedPetsitter
                pets={petsList}
                selectedPetsitter={selectedPetsitter}
                removePet={removePet}
                addPetCallbackFunc={addPet}
                responseToPostPetRequest={responseToPostPetRequest}
                updatePetsitterAvailability={updatePetsitterAvailability}
                updatePetsitterLookingHelp={updatePetsitterLookingHelp}
                loadPetsitterOnClick={loadPetsitterOnClick}
              ></SelectedPetsitter>
            }
          />
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
