import React, { useState, useEffect } from 'react';
import ChildComponent1 from './ChildComponent.jsx';
import ChildComponent2 from './ChildComponent2.jsx';


const ParentButton = () => {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <h2>Counter</h2>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div>
        <ChildComponent1 count={count} />
        <ChildComponent2 />
      </div>
    </main>
  );
}

export default ParentButton;