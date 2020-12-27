import React from 'react';
import styled from 'styled-components';
import Baroq from 'assets/images/baroq.png'
import Fade from 'react-reveal/Fade';

const StyledCards = styled.div`
    margin: 20px;
    margin-bottom: 30px;
    padding: 15px;
    box-shadow: 0px 2px 6px 7px rgba(209,209,209,0.92);
    border-radius: 10px;
    ${({theme}) => theme.mq.tablet}{
        margin: 10px;
        padding: 15px;
        font-size: 3rem;
      }
      ${({theme}) => theme.mq.desktop}{
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        width: 70%;
      }
      ${({theme}) => theme.mq.full}{
        width: 50%;
    
      }
`

const StyledProjects = styled.div`
    margin: 20px;

`

const StyledName = styled.p`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 19px;
`
const StyledDescription = styled.p`
overflow-wrap: break-word;

`

const Technology = styled.p`
margin-top: 20px;
font-size: 2rem;

`

const Image = styled.img`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    height: 120px;
    border-radius: 10px;
    ${({theme}) => theme.mq.tablet}{
        width: 70%;

        height: 300px;
      }
`
const ImageCont = styled.div`

`
const DottedLine = styled.div`
    position: relative;
    width: 4rem;
    border-bottom: 4px dotted #542CE2;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    ${({theme}) => theme.mq.huge}{
        width: 10rem;

        
      }
`

const Projects = [
    {"images": Baroq,"name": "Weather-app", "description": "Simple, lightweight & easy-to-use weather app for website.", "technology": "JS"},
    {"images": Baroq,"name": "Pub-site", "description": "This is simple pub-page", "technology": "JS"},
];

const Card = () =>(
    <div>
        {Projects.map( (pro, index) => (
                            <Fade left key={index}>

            <StyledCards animate={false} >
                <StyledProjects>
                <ImageCont><Image src={pro.images}></Image></ImageCont>
                <StyledName>{pro.name}</StyledName>
                <DottedLine></DottedLine>
                <StyledDescription>{pro.description}</StyledDescription>
                <Technology>Technology used: {pro.technology}</Technology>
                </StyledProjects>

                </StyledCards>
                </Fade>

        ))}  

    </div>
    );
    
    export default Card;