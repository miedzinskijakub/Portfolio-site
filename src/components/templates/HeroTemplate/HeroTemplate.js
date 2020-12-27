import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dots from 'components/Dots/Dots'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
    width: 40%;
    color: white;
    background: linear-gradient(-47deg,#762ce2,#542ce2);
    border-style: none;
    border-radius: 100px;
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

    }
    ${({theme}) => theme.mq.full}{
      display: block;
      font-size: 6rem;
      font-weight: bold;

      border-right: .15em solid red;
      animation: ${Typing} .75s step-end infinite;

    }
    `
    const Fala = styled.svg`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    ${({theme}) => theme.mq.desktop}{
      }
      ${({theme}) => theme.mq.full}{
        width: 100%!important;


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
        width: 100%!important;

      }
    `
      const Waves = styled.div`
      overflow: hidden;
      position: absolute;
    width: 100vw;
    height: 27%;
    bottom: 0px;
    left: 0;
      `
const Hero = () =>(
<StyledWrapper id="home">
    <Dots/>
    <StyledHeading>
    <Hello>Hi</Hello>there<Hello>I'm</Hello>Jakub
    <Job>Frontend Developer</Job>
    </StyledHeading>



    <Link to="contact" spy={true} smooth={true}><Hire>Hire me</Hire></Link>
    <Scroll></Scroll>

    <Waves>
    <Fala xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#542CE2" fillOpacity="1" d="M0,96L34.3,117.3C68.6,139,137,181,206,202.7C274.3,224,343,224,411,213.3C480,203,549,181,617,176C685.7,171,754,181,823,208C891.4,235,960,277,1029,288C1097.1,299,1166,277,1234,245.3C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </Fala>
    <WaveSvg1 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#4528DC" fillOpacity="0.7" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,208C672,245,768,267,864,240C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</WaveSvg1>
</Waves>
</StyledWrapper>

);

export default Hero;