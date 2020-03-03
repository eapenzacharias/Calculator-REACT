import React from 'react';

function Display(props) {
  return (
    <div className="display">{props.value || 0}</div>
  );
}

export default Display;
