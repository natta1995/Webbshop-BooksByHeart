const BookClubApply = () => {
    return (
    <>
        <h1>Ansökan om medlemskap</h1>

        <form>
            <div>
            <input type="text" id="name" name="name" placeholder=" Namn " style={{marginLeft: "2%", marginBottom:"1%",width: "30%" }}/>
            </div>
            <div>
            <input type="email" id="email" name="email" placeholder=" Email " style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
            </div>
            <div>
            <input type="number" id="number-of-kids" placeholder=" Antal Barn" style={{marginLeft: "2%",marginBottom:"1%", width: "30%" }}/>
            </div>

            <div>
            <label>
                <input type="checkbox" name="option" value="option1" /> Nyckelpigorna
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" name="option" value="option2" /> Björnarna
            </label>
            </div>
            <div>
            <label>
                <input type="checkbox" name="option" value="option3" /> Fåglarna
            </label>
            </div>
        </form>
     </> 
    )
}

export default BookClubApply