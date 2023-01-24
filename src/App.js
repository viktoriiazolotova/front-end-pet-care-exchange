import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PetsittersList from "./components/PetsittersList";

import NavScrollExample from "./components/NavBar";

// function App() {
//   const [petsittersList, setPetsitterList] = useState([]);
//   const [selectedPetsitter, setSelectedPetsitter] = useState(null);

//   const API_URL = "http://localhost:8000/api/petsitters/";

//   const fetchAllPetsitters = () => {
//     axios
//       .get(API_URL)
//       .then((res) => {
//         console.log(res);
//         const petsittersAPIResCopy = res.data.map((petsitter) => {
//           return {
//             id: petsitter.pk,
//             name: petsitter.name,
//             email: petsitter.email,
//             zipcode: petsitter.zipcode,
//             city: petsitter.city,
//             isAvailableHelp: petsitter.is_available_help,
//             petType: petsitter.pet_type,
//           };
//         });
//         console.log(petsittersAPIResCopy);
//         setPetsitterList(petsittersAPIResCopy);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(fetchAllPetsitters, []);

//   const loadPetsitterOnClick = (petsitter) => {
//     console.log("load petsitter function called");
//     setSelectedPetsitter(petsitter);
//   };

//   return (
//     <div className="App">
//       <header className="App-header"></header>
//       {/* <OffcanvasExample></OffcanvasExample> */}
//       <NavScrollExample></NavScrollExample>
//       <h1>Welcome to the PetCareExchange!</h1>
//       <h2>Select PetSitter</h2>
//       <PetsittersList
//         petsitters={petsittersList}
//         loadPetsitterOnClick={loadPetsitterOnClick}
//       />
//       {/* <h2>Selected Petsitter</h2>
//       {selectedPetsitter
//         ? `${selectedPetsitter.name} - ${selectedPetsitter.email}`
//         : "Click on the petsitter to get more info"} */}
//     </div>
//   );
// }

// export default App;

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Petsitter from "./components/Petsitter";
import NewPetsitterForm from "./components/NewPetsitterForm";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
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
        <Route path="/" element={<Layout />}>
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
