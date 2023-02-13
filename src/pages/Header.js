import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHollowCat } from "react-icons/gi";
// import { GrSearch } from "react-icons/gr";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" id="nav-bar">
        <LinkContainer to="/">
          <Navbar.Brand>
            <GiHollowCat
              id="nvbar-icon"
              size="40px"
              color="#38bac4"
            ></GiHollowCat>
            PetCareExchange
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/petsitteraccount">
              <Nav.Link>Become Petsitter</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/petsitters/">
              <Nav.Link>Petsitters</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/search">
              <Nav.Link>
                <GrSearch size="20px"></GrSearch>Search Petsitter
              </Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/signup">
              <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>SignIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile settings</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
