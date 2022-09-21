import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const Div = styled.div`
  margin: 25px 0 25px 0;
`

const Subtitle = styled.h1`
  color: aqua;
  font-size: 45px;
`

const Welcome = () => {
  const obj1Ref = useRef();
  const tl = useRef();
  const [objClicked, setObjClicked] = useState(false);

  useEffect(() => {
    gsap.to([obj1Ref.current], {x: "500px", duration: 4})
  }, []);



  const handleClick = (e) => {
    setObjClicked(!objClicked);
  }

  return (
    <Div>
      <Subtitle ref={obj1Ref}>Welcome to the Prezzyyyy!!!</Subtitle>
    </Div>
  );
};

export default Welcome;