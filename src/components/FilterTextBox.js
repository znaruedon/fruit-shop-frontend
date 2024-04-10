
import React from 'react';

const FilterTextBox = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder="Filter fruits..." 
      value={value} 
      onChange={onChange} 
    />
  );
}

export default FilterTextBox;
