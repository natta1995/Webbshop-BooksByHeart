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
        </form>
     </> 
    )
}

export default BookClubApply