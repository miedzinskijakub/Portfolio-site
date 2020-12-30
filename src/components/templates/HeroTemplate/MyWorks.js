import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card'

const StyledWrapper = styled.div`
font-size: 2.3rem;
padding: 30px; 
text-align: center;
display: flex;
flex-direction: column;
width: 100vw;
font-family: ${({theme}) => theme.font.family.roboto};
font-size: ${({theme}) => theme.font.size.s};

${({theme}) => theme.mq.iphone}{
  font-size: 2rem;


}

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
const StyledParagraph = styled.p`
${({theme}) => theme.mq.desktop}{

  font-size: 2rem;
}
${({theme}) => theme.mq.full}{

  font-size: 3rem;
}
`
const CardFlex = styled(Card)`

`
const FlexLetter = styled.div`

`
const MyWorks = () =>(
    <StyledWrapper id="work">
      <FlexLetter>
        <h4>MY RECENT WORK</h4>
        <span role="img" aria-label="smile" aria-hidden="false">🏆</span>
        <StyledParagraph>Here are a few design projects I've worked on recently.</StyledParagraph>
        </FlexLetter>
        <CardFlex/>
    </StyledWrapper>
    );
    
    export default MyWorks;