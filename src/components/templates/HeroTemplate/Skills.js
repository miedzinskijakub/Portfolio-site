import React from 'react';
import styled from 'styled-components';
import Css from '../../../assets/images/svg/css.svg'
import Git from '../../../assets/images/svg/git.svg'
import Html from '../../../assets/images/svg/html.svg'
import Js from '../../../assets/images/svg/js.svg'
import ReactLogo from '../../../assets/images/svg/react.svg'
import Sass from '../../../assets/images/svg/sass.svg'
import Fade from 'react-reveal/Fade';

const StyledWrapper = styled.div`
font-family: ${({theme}) => theme.font.family.roboto};
font-size: 2.3rem;
text-align: center;
${({theme}) => theme.mq.tablet}{
    font-size: 3rem;
  }
  
  ${({theme}) => theme.mq.full}{
    font-size: 4rem;

  }
`
const List = styled.div`

`
const StyledImages = styled.img`
    height: 30px;
    margin: 30px;
    ${({theme}) => theme.mq.tablet}{
        height: 40px;

      }
      ${({theme}) => theme.mq.full}{
        height: 60px;
    
      }
`
const StyledParagraph = styled.p`
${({theme}) => theme.mq.desktop}{


  font-size: 2rem;
}
`
//const ListSkills = [
  //  {"name": "React", },
  //  {"name": "Pub-site", "description": "This is simple pub-page", "technology": "JS"},
//];

const MySkills = () =>(
    <StyledWrapper>
       <h4>Skills & Tools</h4>
        <StyledParagraph>For those who know what they’re looking for..</StyledParagraph>
        <Fade>
        <List>
            <StyledImages src={Html}></StyledImages>
            <StyledImages src={Css}></StyledImages>
            <StyledImages src={Js}></StyledImages>
            <StyledImages src={ReactLogo}></StyledImages>
            <StyledImages src={Git}></StyledImages>
            <StyledImages src={Sass}></StyledImages>

        </List>
        </Fade>
    </StyledWrapper>
    );
    
    export default MySkills;