const ContactPage = () => {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1 style={{marginBottom: "1%"}}>Vill du kontakta oss?</h1>
        <p>Har du frågor eller vill du hjälpa oss att bli bättre? <br></br> Att skicka ett meddelande är det bästa sättet att få kontakt med oss. <br></br> Vi kommer höra av oss till dig inom 48h.</p>
        
        <form>
          <div>
            <input type="text" id="name" name="name" placeholder=" Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
          </div>
          <div>
          </div>
          <input type="email" id="email" name="email" placeholder=" Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
      
          <div>
            <textarea id="message" placeholder="Skriv ditt meddelande här..." name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
          </div>
          <button type="submit" style={{marginTop:"2%", padding: "0.5%", width: "7%"}}>Skicka</button>
        </form>
      </div>
    );
  }
  export default ContactPage