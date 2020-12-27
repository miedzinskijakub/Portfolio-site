import React from 'react';
import styled, { keyframes } from 'styled-components';


const animationone = keyframes`
0% {
    transform: translate(0) rotate(0deg) scale(1);
}

20% {
    transform: translate(70px,-1px) rotate(35deg) scale(.9);
}
40% {
    transform: translate(140px,70px) rotate(70deg) scale(1);
}
60% {
    transform: translate(80px,120px) rotate(110deg) scale(1.2);
}
80% {
    transform: translate(-40px,70px) rotate(145deg) scale(1.1);
}
100% {
    transform: translate(0) rotate(0deg) scale(1);
}

`
const animationTwo = keyframes`
0% {
    transform: translate(0) rotate(0deg);
}
20% {
    transform: translate(70px,-1px) rotate(35deg);
}
40% {
    transform: translate(140px,70px) rotate(70deg);
}
60% {
    transform: translate(80px,120px) rotate(110deg);
}
80% {
    transform: translate(-40px,70px) rotate(145deg);
}
100% {
    transform: translate(0) rotate(0deg);
}
`
const animationThree = keyframes`
0% {
    transform: translate(165px,-180px);
}
100% {
    transform: translate(-345px,615px);
}
`

const animationFour = keyframes`
0% {
    transform: translate(-300px,151px) rotate(0deg);
}
100% {
    transform: translate(251px,-200px) rotate(180deg);
}
`
const animationFive = keyframes`
0% {
    transform: translate(61px,-99px) rotate(0deg);
}

21% {
    transform: translate(4px,-190px) rotate(38deg);
}
41% {
    transform: translate(-139px,-200px) rotate(74deg);
}
60% {
    transform: translate(-263px,-164px) rotate(108deg);
}
80% {
    transform: translate(-195px,-49px) rotate(144deg);
}
100% {
    transform: translate(-1px) rotate(180deg);
}
`
const animationSix = keyframes`

0% {
    transform: translate(0) rotate(0deg) scale(1);
}
20% {
    transform: translate(70px,-1px) rotate(35deg) scale(.9);
}
40% {
    transform: translate(140px,70px) rotate(70deg) scale(1);
}
60% {
    transform: translate(80px,120px) rotate(110deg) scale(1.2);
}
80% {
    transform: translate(-40px,70px) rotate(145deg) scale(1.1);
}
100% {
    transform: translate(0) rotate(0deg) scale(1);
}
`
const Dot = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #7d06df;
    top: 2%;
    left: 32%;
    height: 15px;
    width: 15px;
    animation: ${animationone} 25s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 20px;
        width: 20px;
    
      }
    `

    const DotTwo = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #e3b23c;
    left: 7%;
    top: 30%;
    
    height: 10px;
    width: 10px;
    animation: ${animationTwo} 33s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 15px;
        width: 15px;
    
      }
    `
    const DotThree = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #2c528b;
    left: 10%;
    bottom: 260px;
    
    height: 20px;
    width: 20px;
    animation: ${animationFour} 30s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 25px;
        width: 25px;
    
      }
    `
    const DotFour = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #ff3a75;
    right: 24%;
    top: 23%;
    height: 10px;
    width: 10px;
    animation: ${animationFive} 23s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 15px;
        width: 15px;
    
      }
    `
    const DotFive = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #2bcf90;
    right: 63%;
    bottom: 39%;
    height: 10px;
    width: 10px;
    animation: ${animationSix} 26s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 15px;
        width: 15px;
    
      }
    `
    const DotSix = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background-color: #9b6aeb;
    right: 30%;
    bottom: 37%;
    height: 10px;
    width: 10px;
    animation: ${animationThree} 43s linear infinite;
    ${({theme}) => theme.mq.tablet}{
        height: 15px;
        width: 15px;
    
      }
    `
const Dots = () =>(
    <div>
        <Dot></Dot>
        <DotTwo></DotTwo>
        <DotThree></DotThree>
        <DotFour></DotFour>
        <DotFive></DotFive>
        <DotSix></DotSix>
    </div>
    );
    
    export default Dots;