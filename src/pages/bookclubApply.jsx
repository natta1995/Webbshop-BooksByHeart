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
    align-items: left;
    margin-left: 2%;
    width: 100%
`;

const BookClubSection = styled.div `
    margin: 5%
`

const RadioButton = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

const BookClubLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 18px;
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
                        <label>Förnamn:
                        <input type="text" id="name" name="name" placeholder=" Ditt Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
                        </label>
                        <label>Efternamn:
                        <input type="text" id="name" name="name" placeholder=" Ditt Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
                        </label>
                        <label>Email:
                        <input type="email" id="email" name="email" placeholder=" Din Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
                        </label> 
                        <label>Barnets namn:
                        <input type="text" id="name-kids" name="name-kids" placeholder=" Barnets namn (frivilligt) " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
                        </label>
                    </FormContainer>

                    <div>
                        
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Välj bokformat</option>
                            <option value="Orginal format (Inbunden)">Orginal format (Inbunden)</option>
                            <option value="Blindskrift">Blindskrift</option>
                            <option value="Ljudbok">Ljudbok</option>
                            <option value="Förstorad text">Förstorad text</option>
                        </select>
                        {selectedOption && <p>Valt alternativ: {selectedOption}</p>}
                        
                    </div>

                    <div>
                    <p>Har barnet i frågan någon form av funktionsnedsättning,<br></br>  som vi behöver ta hänsyn till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "60%"}}/>
                </div>
                <div>
                    <p>Finns det något annat som vi bör känna till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="5" style={{marginLeft: "2%", width: "60%"}}/>
                </div>
                <BookClubSection>
                    <img src={img1} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                    <BookClubLabel>
                        <RadioButton 
                            type="radio" 
                            name="book-club" 
                            value="Nyckelpigorna" 
                            checked={selectedClub === 'Nyckelpigorna'} 
                            onChange={handleClubChange} 
                        />
                        Nyckelpigorna
                    </BookClubLabel>
                </BookClubSection>

                <BookClubSection>
                    <img src={img2} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                    <BookClubLabel>
                        <RadioButton 
                            type="radio" 
                            name="book-club" 
                            value="Björnarna" 
                            checked={selectedClub === 'Björnarna'} 
                            onChange={handleClubChange} 
                        />
                        Björnarna
                    </BookClubLabel>
                </BookClubSection>

                <BookClubSection>
                    <img src={img3} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                    <BookClubLabel>
                        <RadioButton 
                            type="radio" 
                            name="book-club" 
                            value="Fåglarna" 
                            checked={selectedClub === 'Fåglarna'} 
                            onChange={handleClubChange} 
                        />
                        Fåglarna
                    </BookClubLabel>
                </BookClubSection> 

                    <p>Vilka Bokklubb vill du anmäla dig och ditt barn till?</p>


                    <button>Skicka ansökan</button>

                </form>
            </ApplicationDiv> 
            )
        }

        export default BookClubApply