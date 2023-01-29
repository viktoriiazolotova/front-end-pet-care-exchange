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
import PetsList from "./components/PetsList";

function App() {
  const [petsittersList, setPetsitterList] = useState([]);
  const [responseToPostSitterRequest, setResponse] = useState("");
  // const [selectedPetsitter, setSelectedPetsitter] = useState(null);

  const API_URL = "http://localhost:8000/api/petsitters/";

  const fetchAllPetsitters = () => {
    axios
      .get(API_URL)
      .then((res) => {
        // console.log(res.data[0].name);
        const petsittersAPIResCopy = res.data.map((petsitter) => {
          return {
            id: petsitter.pk,
            name: petsitter.name,
            email: petsitter.email,
            zipcode: petsitter.zipcode,
            city: petsitter.city,
            isAvailableHelp: petsitter.is_available_help,
            petTypeTakeCare: petsitter.pet_type_take_care,
          };
        });
        setPetsitterList(petsittersAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchAllPetsitters, []);

  // const loadPetsitterOnClick = (petsitter) => {
  //   console.log("load petsitter function called");
  //   setSelectedPetsitter(petsitter);
  // };

  const addPetsitter = (newPetsitterInfo) => {
    // in order to handle data from reactstrap form needed to in this way below:
    const formData = new FormData();
    formData.append("name", newPetsitterInfo.name);
    formData.append("email", newPetsitterInfo.email);
    formData.append("zipcode", newPetsitterInfo.zipcode);
    formData.append("city", newPetsitterInfo.city);
    formData.append("pet_type_take_care", newPetsitterInfo.pet_type_take_care);
    formData.append("is_available_help", newPetsitterInfo.is_available_help);
    // console.log("add Petsitter function called");
    // console.log("here formdata", formData);

    axios
      .post("http://localhost:8000/api/petsitters/", formData)

      .then((response) => {
        // console.log(formData);
        // console.log(newPetsitterInfo);
        // fetchAllPetsitters();
        // console.log("here is my response", response);
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
        };
        newPetsittersList.push(newPetsitterJSON);
        // console.log("new list", newPetsittersList);
        setPetsitterList(newPetsittersList);
      })
      .catch((error) => {
        console.log(error);
        let responseToPostSitterRequest =
          "Check all fields, the field may not be blank or Enter a valid email address.";
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
              />
            }
          />
          <Route
            path="pets"
            element={
              <div>
                <PetsList></PetsList>
              </div>
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
