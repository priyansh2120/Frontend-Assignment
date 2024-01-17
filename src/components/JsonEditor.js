
import React, { useState } from "react";
const JsonEditor = ({ onSchemaChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    try {
      const parsedSchema = JSON.parse(event.target.value);
      onSchemaChange(parsedSchema);

      // console.log(event.target.value);
      // <Renderer uiSchema={event.target.value} />;
    } catch (error) {
      // Handle JSON parsing errors if needed
      console.error("Invalid JSON input:", error);
    }
  };

  return (
    <div>
      <h2>Array of Objects Editor</h2>
      <textarea
        rows={10}
        cols={50}
        placeholder="Paste array of objects here..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default JsonEditor;
