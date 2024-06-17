import { Link } from "react-router-dom";
import babyImg from "../img/babyreading.jpg";
import {Button } from  "react-bootstrap"
import girlsImg from "../img/starter.jpg"

const HomePage = () => {
 

  return (
    
    <div style={{ position: 'relative' }}>
      <img src={babyImg} alt="babyreading" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 1}}>
      
      </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h1>Välkommen till BooksByHeart</h1>
            <p>Mer text om det behövs</p>
            <p>Du vet väl att vi har bokklubbar som du kan gå med i? För barn mellan 0 - 12 år! <Link to="/bookclub">Läs mer här</Link></p>
            <Link to="/products" style={{ textDecoration: "none" }}>
          <Button size="lg" variant="light">Börja shoppa</Button>
        </Link>
    
    </div>

    <div style={{display: "flex", alignItems: "center", paddingTop: "10%"}}>
  <img src={girlsImg} alt="girls" style={{width: "50%"}}/>
  <div style={{paddingLeft: "20px"}}>
    <h2> Grundarna av BooksByHeart</h2>
    <h4> Elsa Strand & Agnes Pettersson</h4>
    <p> Vi får ofta frågan om varför vi valde att skapa BooksByHeart. Förutom vårt nu gemsamma intresse för böcker och läsning, var det faktiskt en annan anledning som gjorde att de båda tjerna redan på högstadiet bestämmde sig för att i framtiden skapa ett företag med fokus på läsning. För Agnes har läsning varit en naturlig del redan innan hon själv ens kunde läsa. För Agnes har det istället varigt en evig kamp att lära sig läsa och sedan hålla sig ikapp med klasskambraterna. Diagnosen Dyslexi kom först i sena tonåren, men tack vara Agnes kunna hon se det fina med läsning och inte bara all kamp. Tillsammans är de rörande överens om att läsning är något som behöv introduseras i tidig ålder, och inte bara som något som man måste lära sig utan som något roligt och berikande.  </p>
  </div>
</div>


</div>
    
  );
};

export default HomePage;
