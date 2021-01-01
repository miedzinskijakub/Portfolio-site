import React from 'react';
import styled from 'styled-components';
import Baroq from 'assets/images/baroq.png'
import Fade from 'react-reveal/Fade';
import Weather from 'assets/images/weather.png'

const StyledCards = styled.div`
    margin: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 4px rgba(209,209,209,0.92);
    border-radius: 10px;
    padding: 0px;

    transition: 0.3s;
&:hover{
  transform: scale(1.01); 
}
    ${({ theme }) => theme.mq.tablet}{
        font-size: 3rem;
        margin: 0px;
        padding: 0px;
        flex: 0 0 50%;
        margin: 5px;
        width: 400px;
        height: 100%;
      }
      ${({ theme }) => theme.mq.desktop}{
          position: relative;
          margin: 0px;
          padding: 0px;
          flex: 0 0 50%;
          margin: 5px;
          width: 400px;
          height: 100%;
      }
      ${({ theme }) => theme.mq.full}{
        width: 500px;

      }
`

const StyledProjects = styled.div`

`

const StyledName = styled.p`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 19px;
`
const StyledDescription = styled.p`
overflow-wrap: break-word;
font-size: 2rem;


${({ theme }) => theme.mq.desktop}{


  font-size: 2rem;
}

`

const Technology = styled.p`
margin-top: 20px;
font-size: 2rem;
${({ theme }) => theme.mq.desktop}{


  font-weight: bold;
}

`

const ImageCont = styled.div`
width: 100%;
height: 100px; 
background-position: center;
background-repeat: no-repeat; 
background-size: cover;
border-radius: 10px 10px 0px 0px;
${({ theme }) => theme.mq.tablet}{
  width: 100%;
  height: 200px; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
}
${({ theme }) => theme.mq.desktop}{
  width: 100%;
  height: 200px; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
}
`
const DottedLine = styled.div`
    position: relative;
    width: 4rem;
    border-bottom: 4px dotted #542CE2;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    ${({ theme }) => theme.mq.huge}{
        width: 10rem;

        
      }
`
const StyledButtonLive = styled.button`
padding: 15px;
cursor: pointer;
margin-right: 5px;
color: white;
margin-top: 10px;
background: #303030;
border-style: none;
border-radius: 100px;
transition: 0.3s;
&:hover{
  opacity: 0.9; 
}
${({ theme }) => theme.mq.tablet}{
  font-size: 2rem;
}
${({ theme }) => theme.mq.desktop}{
    margin-top: 20px;
    margin-right: 10px;

    padding: 10px;
    width: 25%;
    font-size: 2.5rem;

  }
  ${({ theme }) => theme.mq.full}{
    font-size: 2.5rem;
    width: 25%;
  }
`
const StyledButtonCode = styled.button`
padding: 15px;
cursor: pointer;
margin-top: 10px;

color: white;
background: #303030;
border-style: none;
border-radius: 100px;
transition: 0.3s;
&:hover{
  opacity: 0.9; 
}

${({ theme }) => theme.mq.tablet}{
    font-size: 2rem;
}
${({ theme }) => theme.mq.desktop}{
    margin-top: 20px;
    margin-right: 10px;

    padding: 10px;
    width: 25%;
    font-size: 2.5rem;

  }
  ${({ theme }) => theme.mq.full}{
    font-size: 2.5rem;
    width: 25%;
  } 
`
const FlexCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
width: auto;
`

const Projects = [
  { "images": Weather, "name": "Weather-app", "description": "Simple, lightweight & easy-to-use weather app for website.", "technology": "JS", "live": "https://miedzinskijakub.github.io/Weather-app/", "code": "https://github.com/miedzinskijakub/Weather-app" },
  { "images": Baroq, "name": "Pub-site", "description": "This is simple pub-page", "technology": "JS", "live": "https://miedzinskijakub.github.io/pub/", "code": "https://github.com/miedzinskijakub/pub" },
];

const Card = () => (
  <FlexCard>
    {Projects.map((pro, index) => (
      <Fade left key={index}>
        <StyledCards animate={false} >
          <StyledProjects>
            <ImageCont style={{ backgroundImage: `url(${pro.images})` }}></ImageCont>
            <StyledName>{pro.name}</StyledName>
            <DottedLine></DottedLine>
            <StyledDescription>{pro.description}</StyledDescription>
            <a href={pro.live}><StyledButtonLive>Live</StyledButtonLive></a>
            <a href={pro.code}><StyledButtonCode>GitHub</StyledButtonCode></a>

            <Technology>Technology used: {pro.technology}</Technology>
          </StyledProjects>

        </StyledCards>
      </Fade>

    ))}

  </FlexCard>
);

export default Card;