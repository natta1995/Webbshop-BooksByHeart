import img1 from "../img/reading smallest.jpg"

const BookClub = () => {
    return (
    <>
        <div>
            <h1>Välommen till vår bokklubbsida!</h1>
            <h6> Alla våra bokklubbar finns inte här ännu, hittar du inget som passar dig just nu så kommer fler att dycka upp under hösten.</h6>
        </div>
        <div>
        <h5>Babygruppens bokklubb</h5>
        <img src={img1} alt="babyreading" style={{width: "50%"}}/>
        
        </div>

    </>
    )
}

export default BookClub