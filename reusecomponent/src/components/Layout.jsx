/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import layout from "./Layout.module.css";

function Layout(props) {
  console.log(props);
  return (
    <div className={layout.app}>
      <nav className={layout.nav}>
        <div className={layout.brand}>
          <h3>Brand Name</h3>
        </div>
        <div className={layout.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={layout.main}>{props.children}</main>
      <footer className={layout.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
