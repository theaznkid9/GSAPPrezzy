import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const Div = styled.div`
  margin: 25px 0 25px 0;
`

const MyButton = styled.button`
width: 150px;
height: 70px;
font-color: white;
font-size: 16px;
background-color: salmon;
border: none;
&:hover {
  background-color: #E24E0E;
  cursor: pointer;
};
&:active {
  transform: translateY(4px);
};
`;

const SlideButton = () => {
  const obj2Ref = useRef();
  const tl = useRef();
  const [objClicked, setObjClicked] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true
    })
    tl.current.to([obj2Ref.current], {x: "1000px", rotate: 360,duration: 2.5})
  }, []);

  useEffect(() => {
    console.log(objClicked);
    objClicked ? tl.current.play() : tl.current.reverse();
  }, [objClicked]);


  const handleClick = (e) => {
    setObjClicked(!objClicked);
  }

  return (
    <Div>
      <MyButton ref={obj2Ref} onClick={(e) => {handleClick(e)}}>Click Me!</MyButton>
    </Div>
  );
};

export default SlideButton;