import bookClubs from "../bookclubs";
import { Link } from "react-router-dom";



const BookClub = () => {
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "2%", marginBottom: "3%", backgroundColor: "#f0f0f0", padding: "2%"}}>
                <h1 style={{fontFamily: "cursive"}}>Välkommen till vår bokklubbsida!</h1>
                <h6 style={{fontFamily: "cursive"}} >Alla våra bokklubbar finns inte här ännu, hittar du inget som passar dig just nu så kommer fler att dyka upp under hösten. <br></br> Du kan alltid skicka ett meddelande till oss under kontakter, för mer information eller önskemål.</h6>
            </div>

            <ul style={{ listStyleType: "none", padding: 0 }}>
        {bookClubs.map(club => (
          <li key={club.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor: "#f0f0f0", padding: "1%" }}>
            <img src={club.image} alt={club.name} style={{ width: "40%", marginLeft: "20px" }} />
            <div style={{ flex: 1, marginLeft: "5%" }}>
              <h2>{club.name}</h2>
              <p>{club.age}</p>
              <p>{club.des}</p>
              <Link to={"/bookclub/apply"}> Anmäl intresse </Link>
            </div>
          </li>
        ))}
      </ul>

        </>
        )
    }


export default BookClub