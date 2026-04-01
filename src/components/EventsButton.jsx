import React, {useState} from 'react';

const EventsButton = () => {
  const handleClick = (evt) => {
    alert("Button was clicked!");
    console.log("Button was clicked!", evt);
  };

  return (
    // 2. Pass the function reference to onClick
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventsButton;