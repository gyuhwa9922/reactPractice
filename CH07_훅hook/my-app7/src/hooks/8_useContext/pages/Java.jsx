import React from 'react';

function java(props) {
  return (
    <div>
      <img src='data:image/jpeg;base64,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' alt=''></img>
    </div>
  );
}

export default java;