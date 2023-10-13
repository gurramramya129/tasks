import React, { useState } from 'react';

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Paragraph</button>
      {isVisible && <p>This is the hidden text paragraph.</p>}
    </div>
  );
}

export default ToggleParagraph;