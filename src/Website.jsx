import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 300px;
  margin-bottom: 400px;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`

const Search = styled.input`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  width: 40%;
  height: 35px;
  border-radius: 5%;
`

const Button = styled.button`
  width: 40px;
  height: 35px;
  border-radius: 5%;
`

const InnerContainer = styled.div`
  margin: 1% 1% 1% 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: auto;
`

const InnerContainer2 = styled.div`
  margin: 1% 1% 1% 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  height: auto;
`

const WTitle = styled.div`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  width: 30%;
  height: auto;
  font-size: 40px;
  color: white;
  font-family: Copperplate;
  padding: 1% 1% 1% 1%;
  transform: translateY(100px);
  opacity: 0;
`

const Element = styled.div`
  width: 20%;
  height: auto;
  font-size: 25px;
  border-right: 2px solid grey;
  color: tan;
  font-family: Tahoma;
  padding: 1% 1% 1% 1%;
  transform: translateY(100px);
  opacity: 0;
  transform-origin: 0% 100%;
`

const Website = () => {
  const obj1Ref = useRef();
  const obj2Ref = useRef();
  const obj3Ref = useRef();
  const obj4Ref = useRef();
  const obj5Ref = useRef();
  const obj6Ref = useRef();
  const tl = useRef();
  const [objClicked, setObjClicked] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power4.inOut",
        duration: 2
      }
    })
    tl.current.to([obj1Ref.current], {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
    tl.current.to([obj2Ref.current], {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.8")
    tl.current.to([obj3Ref.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.7")
    tl.current.to([obj4Ref.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.6")
    tl.current.to([obj5Ref.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.5")
    tl.current.to([obj6Ref.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.4")
  }, []);

  useEffect(() => {
    console.log(objClicked);
    objClicked ? tl.current.play() : tl.current.reverse();
  }, [objClicked]);


  const handleClick = (e) => {
    setObjClicked(!objClicked);
  }

  return (
    <div>
      <Button onClick={(e) => {handleClick(e)}}></Button>
      <Container>
        <InnerContainer>
          <WTitle ref={obj1Ref} >Really Innovative Website Name Here</WTitle>
          <Search placeholder={'Seach Something...'} ref={obj2Ref}></Search>
        </InnerContainer>
        <InnerContainer2>
          <Element ref={obj3Ref}>Hack Reactor -> React Hacking</Element>
          <Element ref={obj4Ref}>RFCE Peeps Are SPECTACULAR</Element>
          <Element ref={obj5Ref}>SDC ? More like EZPZ</Element>
          <Element ref={obj6Ref}>Can I Get a Thumbs Check?</Element>
        </InnerContainer2>
      </Container>
    </div>
  );
};

export default Website;