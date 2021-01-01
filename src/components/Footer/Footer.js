import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'
import { animateScroll as scroll } from 'react-scroll'



const Arrow = styled.div`

    position: relative;
    color: white;
    text-align: center;
    height: 50px;
    width: 50px;
    background-color: #542CE2;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    box-shadow: 0px 2px 6px 7px rgba(209,209,209,0.52);
    transition: 0.3s;
    &:hover{
    opacity: 0.9; 
    box-shadow: 2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    ${({ theme }) => theme.mq.full}{
        height: 60px;
        width: 60px;
    }
`
const move = keyframes`
0%, 100% {
    transform: translateY(50%);
}

50% {
    transform: translateY(100%);

}
`

const StyledButton = styled(FaChevronUp)`
position: relative;
  color: white;
 left: 0;
 bottom: 0;
  animation: ${move} 2s ease infinite;

`

const StyledDiv = styled.div`
font-family: ${({ theme }) => theme.font.family.roboto};
text-align: center;
`

const StyledMade = styled.div`
margin-top: 20px;
${({ theme }) => theme.mq.full}{
    font-size: 3rem;
}
`
const StyledLast = styled.span`
color: #5933E3;
`
const StyledAllName = styled.span`
font-weight: bold;

`
const StyledGithub = styled(AiFillGithub)`
    font-size: 4rem;
    ${({ theme }) => theme.mq.full}{
        font-size: 5rem;
    }
`
const scrollToTop = () => {
    scroll.scrollToTop();
};

const LinkGithub = styled.a`
color: #FFFFFF;
color: black;
`

const Footer = () => (
    <StyledDiv>
        < Arrow duration={1000}
            onClick={scrollToTop}><StyledButton /></Arrow>
        <StyledMade>©2020 Made with <span role="img" aria-label="heart" aria-hidden="false">❤️</span> by<StyledAllName>&nbsp;Jakub<StyledLast>Miedziński.</StyledLast></StyledAllName></StyledMade>
        <LinkGithub href="https://github.com/miedzinskijakub/"><StyledGithub /></LinkGithub>
    </StyledDiv>
);

export default Footer;