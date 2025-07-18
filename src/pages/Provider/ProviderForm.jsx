import React, { useState } from 'react';

const ProviderForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    providerName: '',
    serviceProvided: '',
    availability: 'available',
    location: '',
    contactInfo: '',
    paymentMode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Provider Form Submitted:', formData);
    alert('Form data submitted (check the console).');
    // 🔜 Later: Send this data to backend (MongoDB)
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Service Provider Profile</h2>
      <form onSubmit={handleSubmit}>

        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          required
        />

        <label>Provider Name</label>
        <input
          type="text"
          name="providerName"
          value={formData.providerName}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />

        <label>Service Provided</label>
        <input
          type="text"
          name="serviceProvided"
          value={formData.serviceProvided}
          onChange={handleChange}
          placeholder="e.g., Plumbing, Graphic Design"
          required
        />

        <label>Availability Status</label>
        <select name="availability" value={formData.availability} onChange={handleChange}>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
          <option value="ondemand">On-Demand</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Makati, Manila"
          required
        />

        <label>Contact Information</label>
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Email or Phone"
          required
        />

        <label>Preferred Mode of Payment</label>
        <input
          type="text"
          name="paymentMode"
          value={formData.paymentMode}
          onChange={handleChange}
          placeholder="e.g., GCash, Bank Transfer"
          required
        />

        <button type="submit" style={{ marginTop: '20px' }}>
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProviderForm;
