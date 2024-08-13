import bookClubs from "../bookclubs";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const List = styled.li `
display: flex;
align-items: center;
margin-bottom: 20px;
background-color: #f0f0f0;
padding: 1%;

  @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
    
  }
`

const TopTextDiv = styled.div `
text-align: center;
margin-top: 2%;
background-color: #f0f0f0;
padding: 2%;
`


const BookClub = () => {
    return (
        <>
            <TopTextDiv>
                <h1 style={{fontFamily: "cursive"}}>Välkommen till vår bokklubbsida!</h1>
                <h6 style={{fontFamily: "cursive"}} >Alla våra bokklubbar finns inte här ännu, hittar du inget som passar dig just nu så kommer fler att dyka upp under hösten. <br></br> Du kan alltid skicka ett meddelande till oss under kontakter, för mer information eller önskemål.</h6>
            </TopTextDiv>
      <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
        {bookClubs.map(club => (
          <List key={club.id} >
            <img src={club.image} alt={club.name} style={{ width: "40%", marginLeft: "20px" }} />
            <div style={{ flex: 1, marginLeft: "5%" }}>
              <h2>{club.name}</h2>
              <p>Rek ålder: {club.age}</p>
              <p>{club.des}</p>
              <Link to={"/bookclub/apply"}> Anmäl intresse </Link>
            </div>
          </List>
        ))}
      </ul>
      </div>
        </>
        )
    }


export default BookClub