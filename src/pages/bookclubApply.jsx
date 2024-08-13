import { useState } from 'react'; 
import styled from 'styled-components';
import bookclubs from '../bookclubs'


const ApplicationDiv = styled.div `
    background-color: lightgray;
    margin: 15%;
    margin-top: 7%;
    padding: 5%;
    text-align: center;

    @media (max-width: 768px) {
    margin: 0%
  }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 22%;
    margin-top: 3%;
    width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  width: 100%;
`;

const BookClubSection = styled.div `
    margin: 5%;
    display: flex;
    align-items: center;
    text-align: left;
    background-color: white;
    padding: 2%;
    border-radius: 5px

      @media (max-width: 768px) {
      display: flex;
     align-items: flex-start;
    
  }
`

const RadioButton = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 10px;

      @media (max-width: 768px) {
        margin-right: 0px;
       
  }
`;


const BookClubInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    flex: 1;

      @media (max-width: 768px) {
        margin-left: 0%;
        width: 100%
  }
`;

const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10%;

      @media (max-width: 768px) {
        margin-left: 0%;
   
  }
`;

const Input = styled.input `
    margin-left: 2%;
    margin-bottom: 1%;
    width: 40%;

    @media (max-width: 768px) {
    margin-left: -8%;
    width: 60%
  }
`
    const BookClubApply = () => {
            
            const [selectedOption, setSelectedOption] = useState('');
            const [selectedClub, setSelectedClub] = useState('');

         

            const handleOptionChange = (event) => {
                setSelectedOption(event.target.value);
              };

              const handleClubChange = (event) => {
                setSelectedClub(event.target.value);
                const selectedValue = event.target.value;
                console.log("Valt klubb-ID:", selectedValue);
                console.log("hej")
            };

            return (
            <ApplicationDiv>
                <h1 style={{marginBottom: "3%"}}>Ansökan om medlemskap</h1>
                <p>(Observera att åldrarna till de olika bokklubbarna endast är en generall rekomendation, och inget krav.)</p>

                <form>
                    <FormContainer>
                        <Label>Förnamn:
                        <Input type="text" id="name" name="name" placeholder=" Förnamn " />
                        </Label>
                        <Label>Efternamn:
                        <Input type="text" id="name" name="name" placeholder=" Efternamn " />
                        </Label>
                        <Label>Email:
                        <Input type="email" id="email" name="email" placeholder=" Email " />
                        </Label> 
                        <Label>Barnets namn:
                        <Input type="text" id="name-kids" name="name-kids" placeholder=" Barnets namn " />
                        </Label>
                        <Label> Välj boktyp:
                        <select style={{marginLeft: "2%", width: "40%", marginBottom: "5%"}} value={selectedOption} onChange={handleOptionChange}>
                            <option value="Orginal format (Inbunden)">Orginal format (Inbunden)</option>
                            <option value="Blindskrift">Blindskrift</option>
                            <option value="Ljudbok">Ljudbok</option>
                            <option value="Förstorad text">Förstorad text</option>
                        </select>
                        </Label>
                    </FormContainer>

                
            <div>
                <p>Har barnet i frågan någon form av funktionsnedsättning,<br></br>  som vi behöver ta hänsyn till?</p> 
                <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "70%"}}/>
            </div>

            <div>
                <p>Finns det något annat som vi bör känna till?</p> 
                <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "70%"}}/>
            </div>

                <h5 style={{marginTop: "5%"}}>Vilka Bokklubb vill du anmäla dig och ditt barn till?</h5>

                <div>
                    {bookclubs.map(club => (
                        <BookClubSection key={club.id}>
                            <img src={club.image} alt={club.name} style={{ width: "40%", marginLeft: "20px", borderRadius: "5px" }}/>
                        <BookClubInfo>
                            <strong>{club.name}</strong>
                            <p>Rek. ålder: {club.age}</p>
                            <p>{club.price}</p>
                        </BookClubInfo>
                        <RadioButtonContainer>
                        <RadioButton 
                            type="radio" 
                            name="book-club" 
                            value= {club.id} 
                            checked={selectedClub === String(club.id)}
                            onChange={handleClubChange} 
                        />
                        </RadioButtonContainer>
                        </BookClubSection>
                    ))}
                </div>

                    <button>Skicka ansökan</button>

                </form>
            </ApplicationDiv> 
            )
        }

        export default BookClubApply