import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/petsitters">Petsitters</Link>
          </li>
          <li>
            <Link to="/petsitter">Petsitter</Link>
          </li>
          <li>
            <Link to="/petsitteraccount">Become petsitter</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
