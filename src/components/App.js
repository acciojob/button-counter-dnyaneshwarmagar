import React, { useState } from 'react';

const ButtonCounter = () => {
  // Initialize the counter state to 0
  const [count, setCount] = useState(0);

  // Event handler to increment the counter when the button is clicked
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Display the count of button clicks */}
      <p>Button clicked {count} times</p>
      {/* Button to increment the counter */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ButtonCounter;
