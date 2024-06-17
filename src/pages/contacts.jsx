const ContactPage = () => {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1>Kontaktsida</h1>
        <p>Har du frågor eller kommentarer? Kontakta oss gärna genom formuläret nedan eller använd kontaktinformationen nedan.</p>
        
        <form>
          <div>
            <label htmlFor="name">Namn: </label>
            <input type="text" id="name" name="name" style={{marginLeft: "2%", marginBottom:"1%"}}/>
          </div>
          <div>
            <label htmlFor="email">E-post: </label>
            <input type="email" id="email" name="email" style={{marginLeft: "2%",marginBottom:"1%" }}/>
          </div>
          <label htmlFor="message">Meddelande:</label>
          <div>
            
            <textarea id="message" name="message" rows="8" style={{marginLeft: "2%", width: "30%"}}/>
          </div>
          <button type="submit" style={{marginTop:"2%"}}>Skicka</button>
        </form>
      </div>
    );
  }
  export default ContactPage