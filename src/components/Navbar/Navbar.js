import React, { useState } from 'react';
import '../../Data/bootstrap.min.css';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  const { length, price } = props.cart;
  const total = props.cart.reduce((sum, course) => {
    return sum + course.price;
  }, 0 )
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark">
        <Nav className="mx-auto text-light">Hello</Nav>
        <Nav className="mx-auto text-light">Added: {length}</Nav>
        <Nav className="mx-auto text-light">Total Price: {total.toFixed(2)}</Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;