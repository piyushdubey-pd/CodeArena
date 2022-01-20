import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAuth} from "../../contexts/AuthContext";
import "./UserNavigation.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const {logout}=useAuth();

  return (
    <div className="UserNav sticky-top">
      <Navbar className="NavSize" expand="md">
        <NavbarBrand className="NavPos" href="/">
          <p>
            Code Arena
            <span class="Subtitle">&nbsp; - &nbsp;Coders live and encore</span>
          </p>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <div className="UserNavItemsPos">
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  PostFeed
                </NavLink>
              </NavItem>

              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/components/">
                  Contact us
                </NavLink>
              </NavItem>

              <NavItem className="NavItemPos">
                <NavLink className="NavLinksStyle" href="/" onClick={logout}>
                  Log Out
                </NavLink>
              </NavItem>

              <NavItem className="">
                <NavLink className="NavLinksStyle" href="/components/">
                  {/* Contact us */}
                  <i class="fas fa-2x fa-user"></i>
                </NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="NavLinksStyle " nav caret>
                  Options
                </DropdownToggle>

                <DropdownMenu right className="NavToggleBarStyle">
                  <DropdownItem className="NavLinksStyle">
                    Option 1
                  </DropdownItem>

                  <DropdownItem className="NavLinksStyle">
                    Option 2
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem className="NavLinksStyle">Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>

            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
