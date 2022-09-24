import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const Div = styled.div`
  margin: 25px 0 25px 0;
`

const Goku = () => {
  const obj1Ref = useRef();
  const tl = useRef();
  const [objClicked, setObjClicked] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true
    })
    tl.current.staggerTo([obj1Ref.current], 3.5 - (0.1 * 4), {rotation:15, ease:77}, 0.1);
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
      <img ref={obj1Ref} className='obj1' onClick={(e) => {handleClick(e)}} src='https://i.pinimg.com/originals/2a/b4/4a/2ab44ac36e1634faaf0c1a5dab03899c.png' alt='SSJ2 Goku' height='280' width='200'/>
    </Div>
  );
};

export default Goku;