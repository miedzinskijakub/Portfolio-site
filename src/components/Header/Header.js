import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components'
import Hamburger from 'components/Hamburger/Hamburger'
import MobileMenu from "components/MobileMenu/MobileMenu"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const scrollToTop = () => {
    scroll.scrollToTop(); 
};
const Bounce = keyframes`
0%, 60%, 75%, 90%, 100% {
    -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
}

0% {
    opacity: 0;
    -webkit-transform: translate3d(0,-3000px,0);
    transform: translate3d(0,-3000px,0);
}

60% {
    opacity: 1;
    -webkit-transform: translate3d(0,25px,0);
    transform: translate3d(0,25px,0);
}

75% {
    -webkit-transform: translate3d(0,-10px,0);
    transform: translate3d(0,-10px,0);
}

90% {
    -webkit-transform: translate3d(0,5px,0);
    transform: translate3d(0,5px,0);
}

100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
`
const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 13px 4px;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    z-index: 9999;  
    animation-name: ${Bounce};
    animation-delay: 0ms;
    animation-duration: 1000ms;

    ${({theme}) => theme.mq.tablet}{
        align-items: center;

        svg{
            font-size: 30px;
        }
    }
    ${({theme}) => theme.mq.desktop}{
        svg{
            font-size: 25px;
        }
}
${({theme}) => theme.mq.huge}{
    svg{
        font-size: 40px;
    }

}

    `;
    const Color = styled.span`
    color: #5933E3;
 
`
const StyledHeading = styled.h3`
font-family: Poppins,sans-serif;
letter-spacing: -0.5px;
font-size: 28px;
font-weight: 700;
cursor: pointer;

${({theme}) => theme.mq.tablet}{
    font-size: 4rem;

  }
  ${({theme}) => theme.mq.full}{
    font-size: 6rem;

  }
`




const Header = () =>{

const [isMenuOpen, setMenuState] = useState(false);


const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
}


    return(
<StyledWrapper>
    <StyledHeading onClick={scrollToTop}>Jakub<Color>Miedziński.</Color></StyledHeading>
    <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen}/>
    <MobileMenu toogle={toggleMobileMenu} isOpen={isMenuOpen}/>
</StyledWrapper>
)
    };

export default Header;