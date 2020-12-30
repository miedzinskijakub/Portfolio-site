import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dots from 'components/Dots/Dots'
import { Link } from 'react-scroll'


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
    font-family: ${({ theme }) => theme.font.family.roboto};
      ${({ theme }) => theme.mq.desktop}{
        overflow: hidden;

      }  
 
`

const StyledHeading = styled.h1`
    color: #121212;
    font-size: 7rem;
    ${({ theme }) => theme.mq.iphone}{
      font-size: 9rem;
   
    }
    ${({ theme }) => theme.mq.tablet}{
      margin-right: 10px;
      font-size: 13rem;

    }
    ${({ theme }) => theme.mq.desktop}{
        margin-right: 10px;
        font-size: 10rem;

      }
      ${({ theme }) => theme.mq.huge}{
        font-size: 12rem;
        display: inline-block;
    
      }
      ${({ theme }) => theme.mq.full}{
        font-size: 14rem;
        animation-name: ${FadeInLeft};
        animation-delay: 0ms;
        animation-duration: 1000ms;
    
      }

`
const Hello = styled.span`
    display: block;
    ${({ theme }) => theme.mq.huge}{
      font-size: 10rem;
      display: inline-block;
  
    }
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
    ${({ theme }) => theme.mq.tablet}{
      font-size: 2rem;
      width: 30%;
    }
    ${({ theme }) => theme.mq.desktop}{
        margin-top: 20px;
        margin-right: 10px;

        padding: 10px;
        width: 20%;

        font-size: 2.5rem;
        animation-name: ${FadeInLeft};
        animation-delay: 0ms;
        animation-duration: 1000ms;
      }
      ${({ theme }) => theme.mq.huge}{

        width: 20%;


      }
      ${({ theme }) => theme.mq.full}{
        font-size: 3rem;
        width: 15%;
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
    ${({ theme }) => theme.mq.tablet}{
      width: 30px;
      height: 45px;
      ::before{
        width: 6px;
        height: 11px;
      }
    }

    
`

const Typing = keyframes`
from, to { border-color: transparent }
50% { border-color: black; }
`

const Job = styled.span`
    display: block;
    font-size: 2.7rem;
    border-right: .15em solid red;
    animation: ${Typing} .80s step-end infinite;
    margin-top: 10px;
    margin-bottom: 10px;
    ${({ theme }) => theme.mq.iphone}{
      font-size: 3rem;
  
    }

    ${({ theme }) => theme.mq.tablet}{
      font-size: 6rem;

    }
    ${({ theme }) => theme.mq.desktop}{
      display: block;
      font-size: 5rem;
      font-weight: bold;
      border-right: .15em solid red;
      animation: ${Typing} .80s step-end infinite;

    }
    
    ${({ theme }) => theme.mq.huge}{
      font-size: 7.5rem;
  
    }
    ${({ theme }) => theme.mq.full}{
      display: block;
      font-size: 9rem;
      font-weight: bold;

      border-right: .15em solid red;
      animation: ${Typing} .80s step-end infinite;

    }
   
    `

const Hero = () => (


  <StyledWrapper id="home">
    <Dots />
    <StyledHeading >
      <div>Hi there</div>

      <div>I'm Jakub</div>

      <Job>Frontend Developer</Job>
    </StyledHeading>

    <Link to="contact" spy={true} smooth={true}><Hire>Hire me</Hire></Link>
    <Scroll></Scroll>


  </StyledWrapper>

);

export default Hero;