import { useState } from 'react'; 
import img1 from "../img/reading smallest.jpg"
import img2 from "../img/readingkid.jpg"
import img3 from "../img/flera barn.jpg"
import styled from 'styled-components';


const ApplicationDiv = styled.div `
    background-color: lightgray;
    margin: 15%;
    margin-top: 7%;
    padding: 5%;
    text-align: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2%;
    margin-top: 3%;
    width: 100%
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  margin-bottom: 1%; 
  width: 100%;
`;

const BookClubSection = styled.div `
    margin: 5%;
    display: flex;
    align-items: center;
    text-align: left;
    background-color: white;
`

const RadioButton = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;


const BookClubInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    flex: 1;
`;

const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10%;
`;

    const BookClubApply = () => {
            
            const [selectedOption, setSelectedOption] = useState('');
            const [selectedClub, setSelectedClub] = useState('');
          
    
            const handleOptionChange = (event) => {
                setSelectedOption(event.target.value);
              };

              const handleClubChange = (event) => {
                setSelectedClub(event.target.value);
            };

            return (
            <ApplicationDiv>
                <h1>Ansökan om medlemskap</h1>
                <p>(Observera att åldrarna till de olika bokklubbarna endast är en generall rekomendation, och inget krav.)</p>

                <form>
                    <FormContainer>
                        <Label>Förnamn:
                        <input type="text" id="name" name="name" placeholder=" Förnamn " style={{marginLeft: "2%", marginBottom:"1%",width: "40%" }}/>
                        </Label>
                        <Label>Efternamn:
                        <input type="text" id="name" name="name" placeholder=" Efternamn " style={{marginLeft: "2%", marginBottom:"1%",width: "40%" }}/>
                        </Label>
                        <Label>Email:
                        <input type="email" id="email" name="email" placeholder=" Email " style={{marginLeft: "2%",marginBottom:"1%", width: "40%" }}/>
                        </Label> 
                        <Label>Barnets namn:
                        <input type="text" id="name-kids" name="name-kids" placeholder=" Barnets namn " style={{marginLeft: "2%",marginBottom:"1%", width: "40%" }}/>
                        </Label>
                        
                        <div>
                        
                        <Label> Välj bokformat:
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Välj</option>
                            <option value="Orginal format (Inbunden)">Orginal format (Inbunden)</option>
                            <option value="Blindskrift">Blindskrift</option>
                            <option value="Ljudbok">Ljudbok</option>
                            <option value="Förstorad text">Förstorad text</option>
                        </select>
                        </Label>
                        {selectedOption && <p>Valt alternativ: {selectedOption}</p>}
                        
                    </div>
                    
                    
                    </FormContainer>

                

                    <div>
                    <p>Har barnet i frågan någon form av funktionsnedsättning,<br></br>  som vi behöver ta hänsyn till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "60%"}}/>
                </div>
                <div>
                    <p>Finns det något annat som vi bör känna till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "60%"}}/>
                </div>

                <h6>Vilka Bokklubb vill du anmäla dig och ditt barn till?</h6>

               
                <BookClubSection>
    <img src={img1} alt="babyreading" style={{ width: "20%" }}/>
    <BookClubInfo>
        <strong>Nyckelpigorna</strong>
        <p>För barn 0-3 år.</p>
        <p>Innehåll: I paket ingår två böcker i månaden. Med varannan bok tillkommer en leksak föreställande en av karaktärerna i boken. En välkomstgåva tillkommer också.</p>
        <p>Pris: 399:-</p>
    </BookClubInfo>
    <RadioButtonContainer>
        <RadioButton 
            type="radio" 
            name="book-club" 
            value="Nyckelpigorna" 
            checked={selectedClub === 'Nyckelpigorna'} 
            onChange={handleClubChange} 
        />
    </RadioButtonContainer>
</BookClubSection>

<BookClubSection>
    <img src={img2} alt="babyreading" style={{ width: "20%" }}/>
    <BookClubInfo>
        <strong>Björnarna</strong>
        <p>För barn 4-6 år.</p>
        <p>Innehåll: I paket ingår två böcker i månaden. Med varannan bok tillkommer en leksak föreställande en av karaktärerna i boken. En välkomstgåva tillkommer också. </p>
        <p>Pris: 499:-</p>
    </BookClubInfo>
    <RadioButtonContainer>
        <RadioButton 
            type="radio" 
            name="book-club" 
            value="Björnarna" 
            checked={selectedClub === 'Björnarna'} 
            onChange={handleClubChange} 
        />
    </RadioButtonContainer>
</BookClubSection>

<BookClubSection>
    <img src={img3} alt="babyreading" style={{ width: "20%" }}/>
    <BookClubInfo>
        <strong>Fåglarna</strong>
        <p>För barn 7-9 år.</p>
        <p>Innehåll: I paket ingår två böcker i månaden. Med varannan bok tillkommer en leksak föreställande en av karaktärerna i boken. En välkomstgåva tillkommer också. </p>
        <p>Pris: 599:-</p>
    </BookClubInfo>
    <RadioButtonContainer>
        <RadioButton 
            type="radio" 
            name="book-club" 
            value="Fåglarna" 
            checked={selectedClub === 'Fåglarna'} 
            onChange={handleClubChange} 
        />
    </RadioButtonContainer>
</BookClubSection>

             

                    <button>Skicka ansökan</button>

                </form>
            </ApplicationDiv> 
            )
        }

        export default BookClubApply