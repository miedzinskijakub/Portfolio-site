import React from 'react';
import styled, { keyframes } from 'styled-components';
import ContactForm from 'components/Form/Form'
import round from '../../../assets/images/background-round.png'
import square from '../../../assets/images/background-square.png'


const StyledWrapper = styled.div`
text-align: center;
font-family: ${({theme}) => theme.font.family.roboto};
background-color: white;
margin-bottom: 30px;
padding: 15px;
box-shadow: 0px 2px 6px 7px rgba(209,209,209,0.10);
border-radius: 10px;
${({theme}) => theme.mq.desktop}{
  display: flex;
  flex-direction: row;
  z-index: 10;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x:hidden;
  overflow-y:hidden;

}

`
const StyledName = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 19px;
    ${({theme}) => theme.mq.tablet}{
        font-size: 3rem;
      }
      ${({theme}) => theme.mq.huge}{
        font-size: 4rem;
        
      }
      ${({theme}) => theme.mq.full}{
       
        z-index: 15;
      }
`
const ContactParagraph = styled.p`
    font-size: 2rem;
    margin-bottom: 19px;
    line-height: 1.6;
    ${({theme}) => theme.mq.tablet}{
        font-size: 2.5rem;
      }
      ${({theme}) => theme.mq.desktop}{


        font-size: 2rem;
        padding: 30px;
      }
      ${({theme}) => theme.mq.huge}{
        padding: 30px;
        margin: 30px;
      }
      ${({theme}) => theme.mq.full}{
        padding: 40px;
        margin: 40px;

        font-size: 3rem;
        z-index: 15;
      }
`
const Status = styled.div`
${({theme}) => theme.mq.full}{
  z-index: 15;
}
`
const pulsat = keyframes`
0% {

    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.7);
}

70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 255, 0);
}

100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
`;

const Pulsate = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 10px;
    background-color: #542CE2;
    width: 10px;
    height: 10px;
    background-clip: padding-box;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(0,98,255,.4);
    animation: ${pulsat} 2s infinite;
    ${({theme}) => theme.mq.huge}{
        width: 15px;
        height: 15px;
      }
`
const Paragraph = styled.p`
    font-size: 2rem;
    text-align: center!important;
    margin: .5rem!important;
    ${({theme}) => theme.mq.tablet}{
        font-size: 2.5rem;
        font-weight: bold;
      }
      
      ${({theme}) => theme.mq.huge}{
        padding: 30px;
        font-size: 3rem;
      }
      ${({theme}) => theme.mq.full}{
        font-size: 4rem;
        z-index: 15;
      }
`

const HalfDescription = styled.div`
${({theme}) => theme.mq.desktop}{
  flex: 0 0 50%;

  z-index: 15;
}
${({theme}) => theme.mq.full}{
  flex: 0 0 50%;

  z-index: 15;
}
`

const ContactShapes = styled.img`
display: none;
${({theme}) => theme.mq.desktop}{
  display: inline-block;

  position: absolute;
  left: -15%;
  top: -5%;
  height: 150%;
}
${({theme}) => theme.mq.full}{
  display: inline-block;

  position: absolute;
  left: -15%;
  top: -5%;
  height: 150%;
}

`
const ContactShapesSquare = styled.img`
display: none;
${({theme}) => theme.mq.desktop}{
  display: inline-block;

  position: absolute;
  z-index: -2;
  right: -10%;
  bottom: -10%;

    width: 400px;
}
    ${({theme}) => theme.mq.full}{
      display: inline-block;

      position: absolute;
 
      right: -10%;
      bottom: -10%;
    
        width: 400px;
    }
`
//        <Sphere><Figma src={figma}></Figma></Sphere>

const MyWorks = () =>(
    <StyledWrapper>

        
        <ContactShapes src={round}>
        </ContactShapes >
        <ContactShapesSquare src={square}>
        </ContactShapesSquare>

        <HalfDescription id="contact">
       <StyledName >Get In Touch <span role="img" aria-label="contact" aria-hidden="false">📬</span></StyledName>
       <ContactParagraph>If you’re ever interested in learning about my work and my working process with clients, please feel free to contact me with information about the projects. We can set up a call or a meet to discuss how I can utilize my skills in achieving the success of your project. 
       You can find me in a few places on the web, but if if you prefer to do it the "old way" then just write to me message.</ContactParagraph>
        </HalfDescription>
        <Status>
        <Paragraph>


        <Pulsate></Pulsate>
        I'm currently avaliable for freelance work.
         </Paragraph>
         <ContactForm/>

        </Status>
    </StyledWrapper>
    );
    
    export default MyWorks;