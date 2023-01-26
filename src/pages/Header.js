import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHollowCat } from "react-icons/gi";
import { GrSearch } from "react-icons/gr";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <LinkContainer to="/">
          <Navbar.Brand>
            <GiHollowCat size="30px" color="#38bac4"></GiHollowCat>
            PetCareExchange
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/petsitters">
              <Nav.Link>Petsitters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/petsitter">
              <Nav.Link>Petsitter</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/petsitteraccount">
              <Nav.Link>Become Pet sitter</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>
                <GrSearch size="20px"></GrSearch>Search Petsitter
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>SignIn</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/petsitters">Petsitters</Link>
//           </li>
//           <li>
//             <Link to="/petsitter">Petsitter</Link>
//           </li>
//           <li>
//             <Link to="/petsitteraccount">Become petsitter</Link>
//           </li>
//           <li>
//             <Link to="/signup">SignUp</Link>
//           </li>
//           <li>
//             <Link to="/signin">SignIn</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// };

// export default Header;
