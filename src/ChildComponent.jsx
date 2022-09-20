import React, { useState, useEffect } from 'react';

const ChildComponent1 = ({count}) => {


  useEffect(() => {
    console.log('mounted');
  }, [])

  return (
    <main>
      <h2>ChildComponent</h2>
      <h4>Receives props.count</h4>
    </main>
  );
}

export default ChildComponent1;