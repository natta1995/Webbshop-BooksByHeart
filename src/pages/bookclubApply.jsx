import { useState } from 'react'; 
import { Button } from 'react-bootstrap';
import img1 from "../img/reading smallest.jpg"
import img2 from "../img/readingkid.jpg"
import img3 from "../img/flera barn.jpg"
import styled from 'styled-components';


const ApplicationDiv = styled.div `
background-color: green
`;

const OptionsContainer = styled.div`
    margin-top: 10px;
`;

const OptionButton = styled(Button)`
    display: block;
    margin-top: 5px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2%;
`;

const BookClubSection = styled.div `
margin: 5%
`


    const BookClubApply = () => {

            const [showOptions, setShowOptions] = useState(false);
            const [selectedOption, setSelectedOption] = useState('');
          
            const toggleOptions = () => {
              setShowOptions(!showOptions);
            };
          
            const handleOptionClick = (option) => {
              setSelectedOption(option);
              setShowOptions(false);
            };

            return (
            <ApplicationDiv>
                <h1>Ansökan om medlemskap</h1>
                <p>(Observera att åldrarna till de olika bokklubbarna endast är en generall rekomendation, och inget krav.)</p>

                <form>
                    <FormContainer>
                        <input type="text" id="name" name="name" placeholder=" Ditt Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
                        <input type="email" id="email" name="email" placeholder=" Din Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
                        <input type="number" id="number-of-kids" placeholder=" Antal Barn" style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
                        <input type="text" id="name-kids" name="name-kids" placeholder=" Barn/Barnens namn (frivilligt) " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
                    </FormContainer>

                    <div>
                        <p>Var god att välj i vilket format du vill ha böckerna i</p>
          <Button onClick={toggleOptions}>Välj ett alternativ</Button>
          {showOptions && (
            <OptionsContainer>
              <OptionButton variant="secondary" onClick={() => handleOptionClick('Orginal format (permbok)')}>Orginal formt (permbok)</OptionButton>
              <OptionButton variant="secondary" onClick={() => handleOptionClick('Blindskrift')}>Blindskrift</OptionButton>
              <OptionButton variant="secondary" onClick={() => handleOptionClick('Ljudbok')}>Ljudbok</OptionButton>
              <OptionButton variant="secondary" onClick={() => handleOptionClick('Förstorad text')}>Förstorad text</OptionButton>
            </OptionsContainer>
          )}
          {selectedOption && <p>Valt alternativ: {selectedOption}</p>}
        </div>

                    <div>
                    <p>Har barnet i frågan någon form av funktionsnedsättning,<br></br>  som vi behöver ta hänsyn till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
                </div>
                <div>
                    <p>Finns det något annat som vi bör känna till?</p> 
 
                    <textarea id="message" placeholder="Skriv ditt svar här..." name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
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