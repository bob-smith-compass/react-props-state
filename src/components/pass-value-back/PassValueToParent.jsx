import React from 'react';

export default function PassValueToParent({parentSupplies}) {
  return (
    <div>
      <button onClick={parentSupplies}>Pass value!</button>
    </div>
  )
}
