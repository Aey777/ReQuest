import React, { useState } from 'react';

const mockProviders = [
  {
    id: 1,
    companyName: 'FixIt Pro',
    providerName: 'Juan Dela Cruz',
    serviceProvided: 'Plumbing',
    availability: 'available',
    location: 'Makati',
    contactInfo: 'juan@example.com',
    paymentMode: 'GCash',
  },
  {
    id: 2,
    companyName: 'Bright Cleaners',
    providerName: 'Maria Santos',
    serviceProvided: 'House Cleaning',
    availability: 'ondemand',
    location: 'Quezon City',
    contactInfo: 'maria@example.com',
    paymentMode: 'Bank Transfer',
  },
  {
    id: 3,
    companyName: 'TechMate',
    providerName: 'Leo Ramirez',
    serviceProvided: 'Computer Repair',
    availability: 'available',
    location: 'Manila',
    contactInfo: 'leo@example.com',
    paymentMode: 'PayPal',
  }
];

const SeekerSearch = () => {
  const [filters, setFilters] = useState({
    serviceNeeded: '',
    availability: '',
    location: '',
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = mockProviders.filter((provider) => {
      return (
        provider.serviceProvided.toLowerCase().includes(filters.serviceNeeded.toLowerCase()) &&
        provider.availability === filters.availability &&
        provider.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    });

    setResults(filtered);
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <h2>Find a Service Provider</h2>

      <form onSubmit={handleSearch}>
        <label>Service Needed</label>
        <input
          type="text"
          name="serviceNeeded"
          value={filters.serviceNeeded}
          onChange={handleChange}
          placeholder="e.g., Plumbing, Cleaning"
          required
        />

        <label>Availability</label>
        <select
          name="availability"
          value={filters.availability}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Availability --</option>
          <option value="available">Available Now</option>
          <option value="ondemand">On Demand</option>
          <option value="scheduled">Scheduled</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="e.g., Quezon City"
          required
        />

        <button type="submit" style={{ marginTop: '20px' }}>
          Search
        </button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      <h3>Search Results</h3>
      {results.length === 0 ? (
        <p>No providers match your criteria.</p>
      ) : (
        results.map((provider) => (
          <div
            key={provider.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px'
            }}
          >
            <h4>{provider.companyName}</h4>
            <p><strong>Provider:</strong> {provider.providerName}</p>
            <p><strong>Service:</strong> {provider.serviceProvided}</p>
            <p><strong>Availability:</strong> {provider.availability}</p>
            <p><strong>Location:</strong> {provider.location}</p>
            <p><strong>Contact:</strong> {provider.contactInfo}</p>
            <p><strong>Payment Mode:</strong> {provider.paymentMode}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SeekerSearch;
