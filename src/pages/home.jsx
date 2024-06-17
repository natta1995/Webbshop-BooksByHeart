import { Link } from "react-router-dom";
import babyImg from "../img/babyreading.jpg";
import {Button } from  "react-bootstrap"
import girlsImg from "../img/starter.jpg"
import intervjugirl from "../img/intervju.jpg"

const HomePage = () => {
 

  return (
    
    <div style={{ position: 'relative' }}>
      <img src={babyImg} alt="babyreading" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: "absolute", bottom: "20px", top: "900px", right: "20px", zIndex: 1}}>
      <Link to="/products" style={{ textDecoration: "none" }}>
          <Button size="lg" variant="light">Börja shoppa</Button>
        </Link>
        </div>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h1>Välkommen till BooksByHeart</h1>
            <p>Mer text om det behövs</p>
            <p>Du vet väl att vi har bokklubbar som du kan gå med i? För barn mellan 0 - 12 år! <Link to="/bookclub">Läs mer här</Link></p>
            
    
    </div>

    <div style={{display: "flex", alignItems: "center", paddingTop: "10%"}}>
  <img src={girlsImg} alt="girls" style={{width: "50%"}}/>
  <div style={{paddingLeft: "20px"}}>
    <h2> Grundarna av BooksByHeart</h2>
    <h4> Elsa Strand & Agnes Pettersson</h4>
    <p> Vi får ofta frågan om varför vi valde att skapa BooksByHeart. Förutom vårt nu gemsamma intresse för böcker och läsning, var det faktiskt en annan anledning som gjorde att de båda tjerna redan på högstadiet bestämmde sig för att i framtiden skapa ett företag med fokus på läsning. För Agnes har läsning varit en naturlig del redan innan hon själv ens kunde läsa. För Agnes har det istället varigt en evig kamp att lära sig läsa och sedan hålla sig ikapp med klasskambraterna. Diagnosen Dyslexi kom först i sena tonåren, men tack vara Agnes kunna hon se det fina med läsning och inte bara all kamp. Tillsammans är de rörande överens om att läsning är något som behöv introduseras i tidig ålder, och inte bara som något som man måste lära sig utan som något roligt och berikande.  </p>
  </div>
</div>

<div style={{display: "flex", alignItems: "center", paddingTop: "10%"}}>
  <img src={intervjugirl} alt="intervjugirl" style={{width: "50%"}}/>
  <div style={{paddingLeft: "20px"}}>
    <h2> En av våra prenumeranter berättar...</h2>
    <p> Petra är en av våra yngsta prenumeranter. Efter att ha varit enda barnet i sexton år fick hennes mamma och hennes nya man ett tillskott. Petra berättar hur hon tyckte det var roligt men var samtidigt lite ledsen över att få ett syskon så sent i hennes eget liv. "Jag var rädd att vi inte skulle kunna få någon bra relation. Både på grund av den stora åldersskillnaden men också för att jag bara bor där varannan vecka. Dessutom så ser jag att jag inom några år kommer flytta hemifrån. Därför kände jag att jag ville ha något som var vår grej.", förklarar hon. Därav började hon redan när Adam var ett år att premunera på BooksByHeart. Förra året tog Petra studenten och har sedan förra året lämnat Stockholm och bosatt sig i Borås där hon studerar till läkare. Men så ofta hon kan åker hon och hälsar på sin lillebror. "Nu till sommaren har jag sökt ett jobb i hemtrakten och kommer kunna träffa honom mycket mer. Men det är så kul för det har verkligen blivit vår grej. Nu sist när han och mamma mötte upp mig vid tåget hade han redan en bok i handen. Jag var tvungen att läsa den för honom i bilen.", säger hon och skrattar. </p>
  </div>
</div>


</div>
    
  );
};

export default HomePage;
