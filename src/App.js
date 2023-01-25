import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import NewPetsitterForm from "./components/NewPetsitterForm";
import NoPage from "./pages/NoPage";
import PetsittersList from "./components/PetsittersList";
import Petsitter from "./components/Petsitter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [petsittersList, setPetsitterList] = useState([]);
  const [responseAddsitter, setResponse] = useState("");
  // const [selectedPetsitter, setSelectedPetsitter] = useState(null);

  const API_URL = "http://localhost:8000/api/petsitters/";

  const fetchAllPetsitters = () => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        const petsittersAPIResCopy = res.data.map((petsitter) => {
          return {
            id: petsitter.pk,
            name: petsitter.name,
            email: petsitter.email,
            zipcode: petsitter.zipcode,
            city: petsitter.city,
            isAvailableHelp: petsitter.is_available_help,
            petType: petsitter.pet_type,
          };
        });
        console.log(petsittersAPIResCopy);
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
    const formData = new FormData();
    formData.append("name", newPetsitterInfo.name);
    formData.append("email", newPetsitterInfo.email);
    formData.append("zipcode", newPetsitterInfo.zipcode);
    formData.append("city", newPetsitterInfo.city);
    formData.append("pet_type", newPetsitterInfo.pet_type);

    console.log("add Petsitter function called");
    console.log("here formdata", formData);
    axios
      .post("http://localhost:8000/api/petsitters/", formData)
      .then((response) => {
        // console.log("data from new form", newPetsitterInfo);
        // console.log("add Petsitter function inside");
        // fetchAllPetsitters();
        console.log("here is my response", response);
        const responseAddsitter = response.data + ".";

        setResponse(responseAddsitter);
        const newPetsittersList = [...petsittersList];
        const newPetsitterJSON = {
          ...newPetsitterInfo,
          // id: response.data.task.id,
          // isComplete: response.data.task.is_complete,
          // id: response.config.data.petsitter.pk,
          // isAvailableHelp: response.config.data.petsitter.is_available_help,
        };
        console.log(newPetsitterJSON);
        newPetsittersList.push(newPetsitterJSON);
        setPetsitterList(newPetsittersList);
      })
      .catch((error) => {
        console.log(error);
        let newResponseAddsitter =
          "Check all fields, the field may not be blank or Enter a valid email address.";
        setResponse(newResponseAddsitter);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="petsitters"
            element={<PetsittersList petsitters={petsittersList} />}
          />
          <Route path="petsitter" element={<Petsitter />} />
          <Route
            path="petsitteraccount"
            element={
              <NewPetsitterForm
                addPetsitterCallbackFunc={addPetsitter}
                responseAddsitter={responseAddsitter}
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
