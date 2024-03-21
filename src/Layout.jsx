import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>&copy; 2024 FJSx23. All rights resereved</p>
      </footer>
    </>
  );
};

export default Layout;
