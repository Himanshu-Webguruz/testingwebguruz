"use client";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h3
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
        aria-expanded={isOpen}
      >
        {title}
      </h3>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
