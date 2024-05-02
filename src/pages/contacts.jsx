const ContactPage = () => {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1>Kontaktsida</h1>
        <p>Har du frågor eller kommentarer? Kontakta oss gärna genom formuläret nedan eller använd kontaktinformationen nedan.</p>
        
        <form>
          <div>
            <label htmlFor="name">Namn:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">E-post:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Meddelande:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Skicka</button>
        </form>
      </div>
    );
  }
  export default ContactPage