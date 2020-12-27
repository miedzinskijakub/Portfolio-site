import React from 'react';
import * as emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({theme}) => theme.font.family.roboto};
  ${({theme}) => theme.mq.full}{
       
    z-index: 15;
  }
`

const StyledInput = styled.input`
background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  border-style: none;
  margin: 5px;
  padding: 10px;
  outline: none;
  width: 70%;
:focus{
  box-shadow: 0 0 3pt 1pt #542CE2;

}
${({theme}) => theme.mq.huge}{
  width: 50%;
  height: 50px;
}
${({theme}) => theme.mq.full}{
  height: 60px;

 ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 2rem;
  }
}
`
const StyledTextArea = styled.textarea`
background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  border-style: none;
  margin: 5px;
  padding: 30px;
  outline: none;
  width: 70%;
  
:focus{
  box-shadow: 0 0 3pt 1pt #542CE2;
}
${({theme}) => theme.mq.huge}{
  width: 60%;
  height: 100px;
}
${({theme}) => theme.mq.full}{
  height: 110px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 2rem;
  }
}
`
const StyledButton = styled.button`
color: white;
background-color: #542CE2;
border-radius: 50px;
border-style: none;
padding: 15px;
width: 70%;
${({theme}) => theme.mq.tablet}{
  font-size: 2rem;
  width: 60%;

}
${({theme}) => theme.mq.huge}{
  width: 30%;
}
${({theme}) => theme.mq.full}{
  height: 60px;
}
`

const StyledRecaptcha = styled.div`
transform:scale(0.7)
`

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      message: '',
      recaptchaLoad: false,
    isVerified: false,
    };
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifiedRecaptcha = this.verifiedRecaptcha.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  recaptchaLoaded() {
    this.setState({ recaptchaLoad: true });
  }
  
  verifiedRecaptcha(response) {
    if (response) {
      this.setState({ isVerified: true });
    }
  }
  handleSubmit(event) {
    const { recaptchaLoad, isVerified } = this.state;
    event.preventDefault();
    if (recaptchaLoad && isVerified) {
      const { name, email, message } = this.state;
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Jakub',
        message: message,
      };
    emailjs.send(
      'service_zuw9gk5',
      'template_72t47tb',
       templateParams,
      'user_d2qlNmLBzGtRhxxzPhi0t'
      );

      alert('Twoja wiadomość została wysłana pomyślnie.');
      this.resetForm();
    } else {
      alert('Sprawdź czy kod captcha został poprawnie zrobiony.');
    }
  }
  

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
            
          
            <StyledInput
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
            />
          
          
            <StyledInput
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
        
            <StyledTextArea
              name="message"
              placeholder="Tell me more about..."
              value={message}
              onChange={this.handleChange}
            /><br></br>
            <StyledRecaptcha>
                  <Recaptcha
        sitekey="6LdKCQwaAAAAAL2MbirLf4Lx58H0fHOJF0hZnCdF"
        render="explicit"
        onloadCallback={this.recaptchaLoaded}
        verifyCallback={this.verifiedRecaptcha}
        />
    </StyledRecaptcha>
            <StyledButton color="dark">Send a message</StyledButton>
          
         
        
      
      </StyledForm>
       
    );
  }
}

export default ContactForm;