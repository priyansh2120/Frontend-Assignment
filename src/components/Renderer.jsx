import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const Renderer = ({ uiSchema }) => {
  const sortedUiSchema = uiSchema.slice().sort((a, b) => a.sort - b.sort);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event, jsonKey) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [jsonKey]: value,
    }));
  };

  const renderInputField = (fieldData) => {
    const inputProps = {
      type: fieldData.uiType.toLowerCase(),
      placeholder: fieldData.placeholder,
      required: fieldData.validate?.required,
      readOnly: fieldData.validate?.immutable,
      pattern: fieldData.validate?.pattern,
      // defaultValue: fieldData.defaultValue,
    };

    return (
      <div key={fieldData.jsonKey}>
        <label>
          {fieldData.label}
          {fieldData.description && (
            <span
              className="info-icon"
              title={fieldData.description}
              style={{ marginLeft: "5px", cursor: "pointer" }}
            >
              <FiInfo />
            </span>
          )}
        </label>
        <input
          {...inputProps}
          value={formData[fieldData.jsonKey] || ""}
          onChange={(e) => handleInputChange(e, fieldData.jsonKey)}
        />
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the formData to the backend
    console.log("Form Data Submitted:", formData);
    
    // Add your API call or data submission logic here
  };

  return (
    <div>
      <h2>Form Preview</h2>
      <form onSubmit={handleSubmit}>
        {sortedUiSchema.map((fieldData) => renderInputField(fieldData))}
        <button type="submit">Submit</button>
      </form>
      {formData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
};

export default Renderer;
