import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="display display-block">
      <div className="p-2 p-2 m-2 shadow shadow-gray-400 border-spacing-2 border-black">
        <h2 className="font font-sans font-semibold">{title}</h2>
        {isVisible ? (
          <>
            <button
              className="justify-end"
              onClick={() => setIsVisible(!isVisible)}
            >
              Hide
            </button>
            <p className="font font-serif">{description}</p>
          </>
        ) : (
          <button className=" justify-end" onClick={() => setIsVisible(true)}>
            Show
          </button>
        )}
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl text-3xl font-bold font-sans">Instamart</h1>

      <Section
        title="Kitchen Items"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        isVisible={visibleSection === "kitchen"}
        setIsVisible={(display) => {
          if (display) {
            setVisibleSection("kitchen");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <Section
        title="Hair care"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        isVisible={visibleSection === "Hair"}
        setIsVisible={(display) => {
          if (display) {
            setVisibleSection("Hair");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <Section
        title="Body Care"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        isVisible={visibleSection === "Body"}
        setIsVisible={(display) => {
          if (display) {
            setVisibleSection("Body");
          } else {
            setVisibleSection("");
          }
        }}
      />
    </div>
  );
};

export default Instamart;
