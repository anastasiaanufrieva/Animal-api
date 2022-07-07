
import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap'

export default function MyNav() {
  return (
    <>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <Link to="/">
        <NavbarBrand>
          Home
        </NavbarBrand>
      </Link>
      <NavbarToggler />
      <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <Link to="/cat">
                <NavLink>
                  Cat
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/dog">
                <NavLink>
                  Dog
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/favourite">
                <NavLink>
                  Favourite
                </NavLink>
              </Link>
            </NavItem>

          </Nav>

            <NavbarText>
              logout
            </NavbarText>
          </Collapse>
      </Navbar>
    </>

  )
}
