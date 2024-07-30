import {useState} from "react"

const ContactPage = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handelClick = (event) => {
    event.preventDefault();
    setIsClicked(true)
  }
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1 style={{marginBottom: "1%"}}>Vill du kontakta oss?</h1>
        <p>Har du frågor eller vill du hjälpa oss att bli bättre? <br></br> Att skicka ett meddelande är det bästa sättet att få kontakt med oss. <br></br> Vi kommer höra av oss till dig inom 48h.</p>
        
        <form onSubmit={handelClick}>
          <div>
            <input type="text" id="name" name="name" placeholder=" Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
          </div>
          <div>
          <input type="email" id="email" name="email" placeholder=" Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
          </div>
          <div>
            <textarea id="message" placeholder="Skriv ditt meddelande här..." name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
          </div>
          <div style={{marginLeft: "42%"}}>
          {isClicked && (
          <p style={{color: "red", padding: "2%", width: "30%", fontFamily: "cursive"  }}>Tack för ditt meddelande! <br></br> Vi hör av oss så fort vi kan!</p>
        )}
        </div>
          <button type="submit" style={{marginTop:"2%", padding: "0.5%", width: "7%"}}>Skicka</button>
        </form>
     
      </div>
    );
  }
  export default ContactPage