import React from "react"
import babyImg from "../img/babyreading.jpg"


const HomePage = () => {
    return (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
        <h1>Välkommen till BooksByHeart</h1>
        <p>Upptäkt en ny värld av böcker</p>
        <p> Du vet väll att vi har bokklubbar som du kan gå med i? Oavsett ålder så har vi e bokklubb som passar</p>
        <img src={babyImg} alt="babayreading" />
        </div>
    )
}

export default HomePage