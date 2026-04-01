import React, {useState} from 'react';

const EventsButton = () => {
  const handleClick = (evt) => {
    alert("Button was clicked!");
    console.log(evt.target.className);
  };

  return (
    // 2. Pass the function reference to onClick
    <button class = "submitButton" onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventsButton;