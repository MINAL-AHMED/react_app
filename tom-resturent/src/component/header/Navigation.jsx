import React from "react";
import { NavItem, Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="#">Tom Resturent</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
