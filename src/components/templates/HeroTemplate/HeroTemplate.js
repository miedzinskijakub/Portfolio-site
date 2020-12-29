import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dots from 'components/Dots/Dots'
import { Link  } from 'react-scroll'


const FadeInLeft = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

100% {
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

`

const StyledWrapper = styled.div`
    font-size: 3rem;
    padding: 30px; 
    display: flex;
    justify-content: center;
    align-items: right;
    text-align: right;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: ${({theme}) => theme.font.family.roboto};
      ${({theme}) => theme.mq.desktop}{
        overflow: hidden;
      }
`

const StyledHeading = styled.h1`
    color: #121212;
    ${({theme}) => theme.mq.tablet}{
      margin-right: 10px;
      font-size: 10rem;

    }
    ${({theme}) => theme.mq.desktop}{
        margin-right: 10px;
        font-size: 7rem;

      }
      ${({theme}) => theme.mq.full}{
        font-size: 8rem;
        animation-name: ${FadeInLeft};
        animation-delay: 0ms;
        animation-duration: 1000ms;
    
      }
`
const Hello = styled.span`
    display: block;
`
const Hire = styled.button`
    padding: 15px;
    cursor: pointer;
      z-index: 999999999;
    width: 40%;
    color: white;
    background: linear-gradient(-47deg,#762ce2,#542ce2);
    border-style: none;
    border-radius: 100px;
    transition: 0.3s;
    &:hover{
      opacity: 0.9; 
      box-shadow: 2px 5px 5px 0px #6A41E5, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    ${({theme}) => theme.mq.tablet}{
        font-size: 3rem;
    }
    ${({theme}) => theme.mq.desktop}{
        margin-top: 20px;
        margin-right: 10px;

        padding: 10px;
        width: 25%;
        font-size: 2.5rem;
        animation-name: ${FadeInLeft};
        animation-delay: 0ms;
        animation-duration: 1000ms;
      }
      ${({theme}) => theme.mq.full}{
        font-size: 3rem;
        width: 20%;
      }
`


const ScrollEfect = keyframes`
    from{
        transform: translateY(-10px);

    }
    to{

        transform: translateY(10px);
        opacity: 0%;
    }
`;

const Scroll = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 40px;
    border: 1px solid #24292e;
    border-radius: 20px;
    overflow: hidden;

    ::before{
        content: '';
        position: absolute;
        left: 10px;
        top: 7px;
        width: 3px;
        height: 6px;
        background-color: #787878;
        border-radius: 50%;
        animation: ${ScrollEfect} 2s infinite;
    }
    ${({theme}) => theme.mq.tablet}{
      width: 30px;
      height: 45px;
      ::before{
        width: 6px;
        height: 11px;
      }
    }

    
`
/*
    const WaveSvg = styled.svg`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1;
    ${({theme}) => theme.mq.desktop}{
      }
      ${({theme}) => theme.mq.full}{
        height: 200px;
      }
    `
    const WaveSvg1 = styled.svg`
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    z-index: -1;
    ${({theme}) => theme.mq.desktop}{
      }
      ${({theme}) => theme.mq.full}{
        height: 200px;
      }
    `
    */
const Typing = keyframes`
from, to { border-color: transparent }
50% { border-color: black; }
`

    const Job = styled.span`
    display: none;
    ${({theme}) => theme.mq.desktop}{
      display: block;
      font-size: 4rem;
      font-weight: bold;
      border-right: .15em solid red;
      animation: ${Typing} .80s step-end infinite;

    }
    ${({theme}) => theme.mq.full}{
      display: block;
      font-size: 6rem;
      font-weight: bold;

      border-right: .15em solid red;
      animation: ${Typing} .80s step-end infinite;

    }
    `
    /*
    const Fala = styled.img`
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
${({theme}) => theme.mq.desktop}{
      }
      ${({theme}) => theme.mq.full}{
        width: 100%!important;
        height: 300px;    


      }
    `
    const WaveSvg1 = styled.img`
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    z-index: -1;
    opacity: 0.7;
    ${({theme}) => theme.mq.desktop}{
      }
      ${({theme}) => theme.mq.full}{
        width: 100%!important;
        height: 300px;    

      }
    `
      const Waves = styled.div`
      overflow: hidden;
      position: absolute;
    width: 100vw;
    height: 25%;
    bottom: 0px;
    left: 0;
      `

          <Waves>
      <Fala src={Wave}></Fala>
      <WaveSvg1 src={WaveBack}></WaveSvg1>

 
</Waves>
*/
const Hero = () =>(

  
<StyledWrapper id="home">
    <Dots/>
    <StyledHeading >
    <Hello>Hi</Hello>there<Hello>I'm</Hello>Jakub
    <Job>Frontend Developer</Job>
    </StyledHeading>

    <Link to="contact" spy={true} smooth={true}><Hire>Hire me</Hire></Link>
    <Scroll></Scroll>
   

</StyledWrapper>

);

export default Hero;