import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Laptops = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Dropdown onSelect={handleSelectOption}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select a brand
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} eventKey={option}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>

      {selectedOption && (
        <p style={{ marginTop: "10px" }}>Selected brand: {selectedOption}</p>
      )}
    </Dropdown>
  );
};

export default Laptops;
