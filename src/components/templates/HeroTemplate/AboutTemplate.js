import React from 'react';
import styled, { keyframes } from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import cv from '../../../assets/styles/CV.pdf'
import Wave from '../../../assets/images/wave.png'
import WaveBack from '../../../assets/images/wave_back.png'

const FadeInLeft = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}
100% {
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
`
const FadeInRight = keyframes`
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
    background-color: #542CE2;
    color: white;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-direction: column;
    padding: 30px;
    font-family: ${({ theme }) => theme.font.family.roboto};
    ${({ theme }) => theme.mq.tablet}{
      font-size: 2.5rem;
  }
  ${({ theme }) => theme.mq.desktop}{
    flex-direction: row;
    align-items: center;

}
  ${({ theme }) => theme.mq.huge}{
    flex-direction: row;
    align-items: center;

}

`
const Image = styled.img`
    position: relative;
    max-width: 600px;
    width: 150px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;

    ${({ theme }) => theme.mq.desktop}{
      left: 0%;
      transform: translateX(-0%);
      flex: 0 0 50%;
      max-width: 30%;
      height: 400px;
      animation-name: ${FadeInLeft};
      animation-delay: 0ms;
      animation-duration: 1000ms;
  }
    ${({ theme }) => theme.mq.huge}{
      left: 0%;
      transform: translateX(-0%);
      flex: 0 0 50%;
      max-width: 30%;
      height: 450px;
      animation-name: ${FadeInLeft};
      animation-delay: 0ms;
      animation-duration: 1000ms;
  }
`

const Download = styled.button`
    padding: 15px;
    width: 70%;
    color: black;
    background: white;
    border-style: none;
    border-radius: 100px;
    cursor: pointer;

    transition: 0.3s;
    &:hover{
      opacity: 0.5; 
      box-shadow: 2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0);
    }
  
    ${({ theme }) => theme.mq.tablet}{
      font-size: 2.5rem;
    }
    ${({ theme }) => theme.mq.desktop}{
      font-size: 2rem;
      width: 40%;

    }
`
const WaveSvg = styled.svg`
position: relative;
width: 100%;
top: -1px;

`
const StyledText = styled.div`
margin-top: 30px;
margin-bottom: 30px;
line-height: 25px;
font-family: ${({ theme }) => theme.font.family.roboto};
${({ theme }) => theme.mq.tablet}{
  line-height: 30px;
  font-size: 2.5rem;
}
${({ theme }) => theme.mq.desktop}{
  font-size: 2.2rem;
  padding: 35px;
}
${({ theme }) => theme.mq.full}{
  font-size: 3rem;
  line-height: 45px;


}
`
const StyledHeading = styled.h3`
  margin-top: 30px;
  font-weight: bold;
  ${({ theme }) => theme.mq.desktop}{
    font-size: 2.5rem;
  }
  ${({ theme }) => theme.mq.full}{
    font-size: 4rem;


  }
`
const Half = styled.div`
${({ theme }) => theme.mq.desktop}{
  flex: 0 0 50%;
  max-width: 50%;
  animation-name: ${FadeInRight};
  animation-delay: 0ms;
  animation-duration: 1000ms;
}
${({ theme }) => theme.mq.huge}{
  flex: 0 0 50%;
  max-width: 50%;
  animation-name: ${FadeInRight};
  animation-delay: 0ms;
  animation-duration: 1000ms;
}
`

const Fala = styled.img`
position: absolute;
bottom: -10px;
left: 0;
width: 100%;
${({ theme }) => theme.mq.iphone}{
  height: 160px;    

}
${({ theme }) => theme.mq.desktop}{
  height: 260px;
  }
  ${({ theme }) => theme.mq.full}{
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
${({ theme }) => theme.mq.iphone}{
  height: 160px;    

}
${({ theme }) => theme.mq.desktop}{
  height: 260px;
  }
  ${({ theme }) => theme.mq.full}{
    width: 100%!important;
    height: 300px;    

  }
 
`
const Waves = styled.div`
  
  position: relative;
width: 100vw;
height: 20%;
top: -1px;
${({ theme }) => theme.mq.iphone}{
  height: 20%;    

}
  `



const About = () => (
  <div>
    <Waves>
      <Fala src={Wave}></Fala>
      <WaveSvg1 src={WaveBack}></WaveSvg1>
    </Waves>

    <StyledWrapper id="about">


      <Image src={photo}></Image>
      <Half>
        <StyledHeading>A bit about me<span role="img" aria-label="smile" aria-hidden="false">👋</span></StyledHeading>
        <StyledText>
          I'm a 20 year old developer who loves to create and find solutions.
          I'm interested in programming, mainly in javascript, designing websites and applications gives me great pleasure. I learn fast and I'm eager to learn new technologies. I'm looking for a job and development opportunities as a junior frontend developer.

        </StyledText>
        <a href={cv} download><Download>Download CV</Download></a>
      </Half>

    </StyledWrapper>

    <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#542CE2" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,208C672,245,768,267,864,240C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </WaveSvg>
  </div>
);

export default About;