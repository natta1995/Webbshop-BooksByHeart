

const BookClubApply = () => {
    return (
    <>
        <h1>Ansökan om medlemskap</h1>
        <p>Observera att åldrarna till de olika bokklubbarna endast är en generall rekomendation, och inget krav.</p>

        <form>
            <div>
            <input type="text" id="name" name="name" placeholder=" Ditt Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
            </div>
            <div>
            <input type="email" id="email" name="email" placeholder=" Din Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
            </div>
            <div>
            <input type="number" id="number-of-kids" placeholder=" Antal Barn" style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
            </div>
            <div>
            <input type="text" id="name-kids" name="name-kids" placeholder=" Barn/Barnens namn (frivilligt) " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
            </div>

            <div>
            <p>Har du ett/flera barn med någon form av funktionsnedsättning,<br></br>  som vi behöver ta hänsyn till?</p> 
            <textarea id="message" placeholder="Skriv ditt meddelande här..." name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
          </div>

            <h5>Vilka eller vilken Bokklubb vill du anmäla dig till?</h5>
            <div>
            <label>
                <input type="checkbox" name="option1" value="option1" /> Nyckelpigorna
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" name="option2" value="option2" /> Björnarna
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" name="option3" value="option3" /> Fåglarna
            </label>
            </div>
            <button>Skicka ansökan</button>
        </form>
     </> 
    )
}

export default BookClubApply