import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import Renderer from "./components/Renderer";

const App = () => {
  const [uiSchema, setUiSchema] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [wasClicked, setWasClicked] = useState(false);
  const handleSchemaChange = (schema) => {
    setUiSchema(schema);
  };

  const handleSubmit = () => {
    // console.log(uiSchema);
    setSubmittedData(uiSchema); // Set submittedData only when the submit button is clicked
    setWasClicked(true);
  };

  return (
    <div className="App">
      <JsonEditor onSchemaChange={handleSchemaChange} />
      <button onClick={handleSubmit}>Submit</button>
      {submittedData && wasClicked && <Renderer uiSchema={submittedData} />}
      
    </div>
  );
};

export default App;
