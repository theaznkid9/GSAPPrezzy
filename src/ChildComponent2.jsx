import React, { useState, useEffect } from 'react';

const ChildComponent2 = () => {

  useEffect(() => {
    console.log('renders');
  }, [])

  return (
    <main>
      <h2>Child Component 2</h2>
    </main>
  );
}

export default ChildComponent2;