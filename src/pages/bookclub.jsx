import img1 from "../img/reading smallest.jpg"
import img2 from "../img/readingkid.jpg"
import img3 from "../img/flera barn.jpg"
import { Link } from "react-router-dom";

const BookClub = () => {
    return (
        <>
        
            <div style={{ textAlign: "center", marginTop: "2%", marginBottom: "3%", backgroundColor: "#f0f0f0", padding: "2%"}}>
                <h1 style={{fontFamily: "cursive"}}>Välkommen till vår bokklubbsida!</h1>
                <h6 style={{fontFamily: "cursive"}} >Alla våra bokklubbar finns inte här ännu, hittar du inget som passar dig just nu så kommer fler att dyka upp under hösten. <br></br> Du kan alltid skicka ett meddelande till oss under kontakter, för mer information eller önskemål.</h6>
                <p>Bra att veta! I varje erbjudande ingår två böcker i månaden, vid motagande av bok nummer 2 varje månad följer även en leksak med (som har stark koppling till boken som barnet får) Ifall ni redan äger boken i frågan har ni rätt att inom två veckor skicka tillbaka den och istället få en annan bok. (Observera att detta endast gäller 2 böcker om året.)</p>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor:"#f0f0f0", padding: "1%" }}>
                
                <img src={img1} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>

                <div style={{ flex: 1, marginLeft: "5%",  }}>
                    <h4>Nykelpigorna - Babygruppen</h4>
                    <p>Rekommenderad ålder: 0-3 år</p>
                    <p>Pris: 399:-</p>
                    <h6>Beskrivning: </h6>
                    <p>Varannan tisdag kommer en ny bok i posten. Du kan när som helst välja att avsluta ditt medlemskap hos oss.</p>
                    <Link to={"/bookclub/apply"}> Anmäl intresse </Link>
                </div>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor:"#f0f0f0", padding: "1%" }}>
         
                <img src={img2} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>
                <div style={{ flex: 1, marginLeft: "5%" }}>
                    <h4>Björnarna - Nybörjarna</h4>
                    <p>Rekommenderad ålder: 4-8 år</p>
                    <p>Pris: 499:-</p>
                    <h6>Beskrivning: </h6>
                    <p>Varannan onsdag kommer en ny bok i posten. Du kan när som helst välja att avsluta ditt medlemskap hos oss.</p>
                    <Link to={"/bookclub/apply"}> Anmäl intresse </Link>
                </div>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" , backgroundColor:"#f0f0f0", padding: "1%"}}>
             
                <img src={img3} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>
                <div style={{ flex: 1, marginLeft: "5%"  }}>
                    <h4>Fåglarna - Flerbarnsgänget</h4>
                    <p>Rekommenderad ålder: 0 - 12 år</p>
                    <p>Pris: 599:-</p>
                    <h6>Beskrivning: </h6>
                    <p>Varannan torsdag kommer en ny bok i posten. Du kan när som helst välja att avsluta ditt medlemskap hos oss.</p>
                    <Link to={"/bookclub/apply"}> Anmäl intresse </Link>
                </div>
            </div>
        </>
        )
    }


export default BookClub