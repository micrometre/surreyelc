import React from "react";
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

const App = () => {
  return (
    <>
      <GhostNavbar
        styles={{
          floatButtonSize: 0.9,
          floatButtonX: 6,
          floatButtonY: 4
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </>
  );
};

export default App;
