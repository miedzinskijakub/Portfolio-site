import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card'

const StyledWrapper = styled.div`
font-size: 2.3rem;
padding: 30px; 
text-align: center;
flex-direction: column;
width: 100vw;
font-family: ${({theme}) => theme.font.family.roboto};

${({theme}) => theme.mq.tablet}{

    font-size: 2.5rem;
  }
  
  ${({theme}) => theme.mq.huge}{

    font-size: 3rem;
  }
  ${({theme}) => theme.mq.full}{
    font-size: 3.5rem;

  }
`



const MyWorks = () =>(
    <StyledWrapper id="work">
        <h4>MY RECENT WORK</h4>
        <span role="img" aria-label="smile" aria-hidden="false">🏆</span>
        <p>Here are a few design projects I've worked on recently.</p>
        <Card/>
    </StyledWrapper>
    );
    
    export default MyWorks;