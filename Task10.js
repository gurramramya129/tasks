import React, { useState } from 'react';

function Slider({ min, max }) {
  const [value, setValue] = useState(min);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}

export default Slider;