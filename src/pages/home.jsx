// import React from "react"
// import babyImg from "../img/babyreading.jpg"


// const HomePage = () => {
//     return (
//         <div style={{ marginTop: "100px", textAlign: "center" }}>
//         <h1>Välkommen till BooksByHeart</h1>
//         <p>Upptäkt en ny värld av böcker</p>
//         <p> Du vet väll att vi har bokklubbar som du kan gå med i? Oavsett ålder så har vi e bokklubb som passar dig!</p>
//         <img src={babyImg} alt="babayreading" />
//         </div>
//     )
// }

// export default HomePage

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";

import babyImg from "../img/babyreading.jpg";

const HomePage = () => {
 

  return (
    
    <div style={{ position: 'relative' }}>
      <img src={babyImg} alt="babyreading" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h1>Välkommen till BooksByHeart</h1>
            <p>Mer text om det behövs</p>
            <p>Du vet väl att vi har bokklubbar som du kan gå med i? Oavsett ålder så har vi en bokklubb som passar dig!</p>
    </div>
</div>

     
    
  );
};

export default HomePage;
