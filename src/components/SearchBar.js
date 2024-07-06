// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(city);
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleSearch}
        />
      )}
    />
  );
};

export default SearchBar;
