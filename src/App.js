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
          <Route path="petsitteraccount" element={<NewPetsitterForm />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
