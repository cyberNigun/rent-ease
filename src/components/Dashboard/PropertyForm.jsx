// PropertyForm.jsx

import React, { useState } from 'react';
import './PropertyForm.css'; // Import the CSS file for styling

const PropertyForm = () => {
  // Define state variables to store form data
  const [property, setProperty] = useState({
    propertyName: '',
    propertyAddress: '',
    propertyDescription: '',
    rentalPrice: '',
    amenities: ''
  });

  // Event handler to update form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or update local state
    console.log('Form submitted:', property);
    // Reset form fields after submission
    setProperty({
      propertyName: '',
      propertyAddress: '',
      propertyDescription: '',
      rentalPrice: '',
      amenities: ''
    });
  };

  return (
    <div className="property-form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyAddress">Property Address</label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            value={property.propertyAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyDescription">Property Description</label>
          <textarea
            id="propertyDescription"
            name="propertyDescription"
            value={property.propertyDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentalPrice">Rental Price</label>
          <input
            type="text"
            id="rentalPrice"
            name="rentalPrice"
            value={property.rentalPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amenities">Amenities</label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={property.amenities}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default PropertyForm;
