import img1 from "../img/reading smallest.jpg"
import img2 from "../img/readingkid.jpg"
import img3 from "../img/flera barn.jpg"
import { Link } from "react-router-dom";

const BookClub = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "2%", marginBottom: "5%"}}>
                <h1>Välkommen till vår bokklubbsida!</h1>
                <h6>Alla våra bokklubbar finns inte här ännu, hittar du inget som passar dig just nu så kommer fler att dyka upp under hösten.</h6>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor:"skyblue", padding: "1%" }}>
                
                <img src={img1} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>

                <div style={{ flex: 1, marginLeft: "5%",  }}>
                    <h4>Nykelpigorna</h4>
                    <h5>Babygruppens bokklubb</h5>
                    <p>Rekommenderad ålder: 0-3 ålder</p>
                    <h6>Beskrivning: </h6>
                    <Link> Anmäl intresse </Link>
                </div>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor:"skyblue", padding: "1%" }}>
         
                <img src={img2} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>
                <div style={{ flex: 1, marginLeft: "5%" }}>
                    <h4>Björnarna</h4>
                    <h5>De nybörjade läsarnas bokklubb</h5>
                    <p>Rekommenderad ålder: 4-8 ålder</p>
                    <h6>Beskrivning: </h6>
                    <Link> Anmäl intresse </Link>
                </div>
            </div>
    
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" , backgroundColor:"skyblue", padding: "1%"}}>
             
                <img src={img3} alt="babyreading" style={{ width: "40%", marginLeft: "20px" }}/>
                <div style={{ flex: 1, marginLeft: "5%"  }}>
                    <h4>Fåglarna</h4>
                    <h5>Flerbarns gruppens bokklubb</h5>
                    <p>Rekommenderad ålder: Valfri</p>
                    <h6>Beskrivning: </h6>
                    <Link> Anmäl intresse </Link>
                </div>
            </div>
        </>
        )
    }


export default BookClub