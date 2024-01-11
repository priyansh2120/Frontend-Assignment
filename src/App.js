// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [schema, setSchema] = useState({});
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);

  const handleSchemaChange = (event) => {
    try {
      const newSchema = JSON.parse(event.target.value);
      setSchema(newSchema);
    } catch (error) {
      console.error('Invalid JSON syntax:', error.message);
    }
  };

  useEffect(() => {
    const fields = Object.keys(schema.properties || {});
    setFormFields(fields);
  }, [schema]);

  const handleFormChange = (event, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', padding: '20px' }}>
      {/* Left Section: JSON Editor */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <textarea
          style={{ width: '100%', height: '300px' }}
          placeholder="Paste UI schema here"
          onChange={handleSchemaChange}
        />
      </div>

      {/* Right Section: Form Preview */}
      <div style={{ flex: 1 }}>
        <form onSubmit={handleSubmit}>
          {formFields.map((fieldName) => (
            <div key={fieldName} style={{ marginBottom: '15px' }}>
              <label>{fieldName}</label>
              <input
                type="text"
                value={formData[fieldName] || ''}
                onChange={(event) => handleFormChange(event, fieldName)}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
