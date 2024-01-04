import React, { useState } from 'react';
import axios from 'axios';

function MakeAdminForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/admin/make-admin', { email });

      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert('Server error: ' + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        alert('No response received from server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('An error occurred.');
      }    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Make Admin</button>
    </form>
  );
}

export default MakeAdminForm;