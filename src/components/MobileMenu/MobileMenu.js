import React from 'react';
import styled from 'styled-components';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import { Link } from 'react-scroll'



const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9998;
    flex-direction: column;
    background-color: white;
    transform: translate(${({ isOpen }) => isOpen ? '0%' : '100%'});
    transition: transform .25s ease-in-out;
    
    ${({ theme }) => theme.mq.desktop}{
        width: auto;
        height: auto;
        justify-content: space-between;
        align-items: center;
        position: relative;
        transform: none;
        flex-direction: row;

    }
    ${({ theme }) => theme.mq.full}{
        width: auto;
        height: auto;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        position: relative;
        transform: none;

        flex-direction: row;

    }
`;

const MenuLink = styled.div`
    cursor: pointer;
    color: #2F2E2E;
    font-size: 2.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-top: 50px;
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: opacity .25s .20s ease-in-out;

${({ theme }) => theme.mq.tablet}{
    margin-top: 60px;
    font-size: 4rem;
    }
    ${({ theme }) => theme.mq.desktop}{
        font-size: 1.8rem;
        margin-right: 50px;
        margin-top: auto;
        position: relative;
        opacity: 1;
        transition: 0.3s;

        &:hover{
        color: #542CE2;

   
        }
    }
    ${({ theme }) => theme.mq.huge}{
        font-size: 2rem;
        margin-top: auto;
        position: relative;
        opacity: 1;

    }
    ${({ theme }) => theme.mq.full}{
        font-size: 2.6rem;
        margin-right: 100px;
        margin-top: auto;
        position: relative;
        opacity: 1;

    }
`



const Icon = styled(BsFillEnvelopeFill)`
display: inline-block;
font-size: 2.6rem;
color: #542CE2;
background: none;
margin-right: 5px;

${({ theme }) => theme.mq.desktop}{
    position: relative;
    height: 20px;

    transition: 0.3s;

    &:hover{
    color: white;

    }
}

${({ theme }) => theme.mq.huge}{
    font-size: 1rem;
    color: #542CE2;
}
${({ theme }) => theme.mq.full}{
    display: inline-block;
    font-size: 2.6rem;
    border-color: #542CE2;
    color: #542CE2;
    background: none;
    margin-right: 5px;
}
`
const LetsTalk = styled.button`

justify-content: center;
text-align: center;
font-size: 2.6rem;
margin-top: auto;
position: relative;
cursor: pointer;
opacity: 1;
border: 2px solid;
border-color: #542CE2;
color: #542CE2;
padding: .4rem 1.5rem!important;
background: none;
border-radius: 100px;


${({ theme }) => theme.mq.tablet}{
font-size: 4rem;
}

${({ theme }) => theme.mq.desktop}{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    margin-top: auto;
    position: relative;
    opacity: 1;
    border: 2px solid;
    border-color: #542CE2;
    color: #542CE2;
    padding: .4rem 1.5rem!important;
    background: none;
    border-radius: 100px;

    transition: 0.3s;

    &:hover{
        box-shadow: 2px 5px 5px 0px #6A41E5, 5px 5px 15px 5px rgba(0,0,0,0);

    background-color: #542CE2;
    color: white;
 
    }
    &:hover ${Icon}{
        color: white;
    }
}
}

`



const MobileMenu = ({ isOpen, toogle }) => {

    const menuItems = [
        <Link onClick={toogle} to="about" spy={true} smooth={true}><p>About</p></Link>,
        <Link onClick={toogle} to="work" spy={true} smooth={true}>Work</Link>,
        <Link onClick={toogle} to="contact" spy={true} smooth={true}><LetsTalk><Icon /><p>Let's talk!</p></LetsTalk></Link>,
    ];

    return (
        <StyledWrapper onClick={toogle} isOpen={isOpen}>


            {menuItems.map((item, index) => (
                <MenuLink key={index} isOpen={isOpen}
                    onClick={toogle}>{item}</MenuLink>
            ))}

        </StyledWrapper>
    )

}

/*
const MobileMenu = ({isOpen, toogle}) => (

    <StyledWrapper onClick={toogle} isOpen={isOpen}>

        
       {menuItems.map( (item, index) => (
        <MenuLink key={index} isOpen={isOpen}
        onClick={toogle}>{item}</MenuLink>
       ))}
        
    </StyledWrapper>
   
   );

*/
export default MobileMenu;