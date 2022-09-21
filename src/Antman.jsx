import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const Div = styled.div`
  margin: 25px 0 25px 0;
`

const Antman = () => {
  const obj1Ref = useRef();
  const tl = useRef();
  const [objClicked, setObjClicked] = useState(false);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true
    })
    tl.current.to([obj1Ref.current], {x: "1000px", scale: 6, duration: 2})
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
      <img ref={obj1Ref} className='obj1' onClick={(e) => {handleClick(e)}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/d9wv2ge-39320395-a193-4a75-97df-918920f32fb7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZDl3djJnZS0zOTMyMDM5NS1hMTkzLTRhNzUtOTdkZi05MTg5MjBmMzJmYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ERyinhhGWt7y8QuRJENOFWPZvXQ9-CdqQAg0eF8kUOA' alt='Antman' height='100' width='40'/>
    </Div>
  );
};

export default Antman;