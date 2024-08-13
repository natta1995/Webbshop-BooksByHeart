import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 50px;  
  }
`;

const Heading = styled.h1`
  margin-bottom: 1%;

  @media (max-width: 768px) {
    font-size: 1.5rem;  
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;  
  }
`;

const Input = styled.input`
  margin-left: 2%;
  margin-bottom: 1%;
  width: 30%;

  @media (max-width: 768px) {
    width: 90%;  
    margin-left: 5%;
  }
`;

const Textarea = styled.textarea`
  margin-left: 2%;
  width: 30%;

  @media (max-width: 768px) {
    width: 90%;  
    margin-left: 5%;
  }
`;

const Button = styled.button`
  margin-top: 2%;
  padding: 0.5%;
  width: 7%;

  @media (max-width: 768px) {
    width: 30%;  
    padding: 1%;
  }
`;

const ContactPage = () => {


  
    return (
      <Container>
        <Heading>Vill du kontakta oss?</Heading>
        <Paragraph>Har du frågor eller vill du hjälpa oss att bli bättre? <br></br> Att skicka ett meddelande är det bästa sättet att få kontakt med oss. <br></br> Vi kommer höra av oss till dig inom 48h.</Paragraph>
        
        <form >
          <div>
            <Input type="text" id="name" name="name" placeholder=" Namn " />
          </div>
          <div>
          <Input type="email" id="email" name="email" placeholder=" Email " />
          </div>
          <div>
            <Textarea id="message" placeholder="Skriv ditt meddelande här..." name="message" rows="8" />
          </div>
          <Button>Skicka</Button>
        </form>
      </Container>
    );
  }
  export default ContactPage