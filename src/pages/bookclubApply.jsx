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


    const BookClubApply = () => {
            
            const [selectedOption, setSelectedOption] = useState('');
          
    
            const handleOptionChange = (event) => {
                setSelectedOption(event.target.value);
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


                    <h5>Vilka eller vilken Bokklubb vill du anmäla dig till?</h5>

                    <BookClubSection>
                        <img src={img1} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                        <label>
                            <input type="checkbox" name="option1" value="option1" /> Nyckelpigorna
                        </label>
                    </BookClubSection>

                    <BookClubSection>
                        <img src={img2} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                        <label>
                            <input type="checkbox" name="option2" value="option2" /> Björnarna
                        </label>
                    </BookClubSection>

                    <BookClubSection>
                        <img src={img3} alt="babyreading" style={{ width: "20%", marginLeft: "20px" }}/>
                        <label>
                            <input type="checkbox" name="option3" value="option3" /> Fåglarna
                        </label>
                    </BookClubSection>  

                    <button>Skicka ansökan</button>

                </form>
            </ApplicationDiv> 
            )
        }

        export default BookClubApply