import { Link } from "react-router-dom";
import babyImg from "../img/babyreading.jpg";
import { Button } from "react-bootstrap";
import girlsImg from "../img/starter.jpg";
import intervjugirl from "../img/intervju.jpg";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    position: 'relative',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto'
  };

  const buttonContainerStyle = {
    position: 'absolute',
    bottom: isMobile ? '10%' : '5%',
    right: isMobile ? '10px' : '20px',
    zIndex: 1
  };

  const headerTextStyle = {
    position: 'absolute',
    top: isMobile ? '40%' : '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: isMobile ? '14px' : '100%'
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10%',
    flexDirection: isMobile ? 'column' : 'row'
  };

  const sectionContentStyle = {
    width: isMobile ? '90%' : '50%',
    paddingLeft: '20px',
    textAlign: 'left'
  };

  const imageContainerStyle = {
    width: isMobile ? '90%' : '50%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: isMobile ? '20px' : '0'
  };

  const pStyle = isMobile ? {fontSize: "100%"} : {fontSize: "110%"};


  return (
    <div>
      <div style={containerStyle}>
        <img src={babyImg} alt="babyreading" style={imageStyle} />
        <div style={buttonContainerStyle}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button size="lg" variant="light">Börja shoppa</Button>
          </Link>
        </div>
        <div style={headerTextStyle}>
          <h1>Välkommen till BooksByHeart</h1>
          <p style={pStyle}>Du vet väl att vi har bokklubbar för alla barn mellan 0 - 12 år? <Link to="/bookclub">Läs mer</Link></p>
        </div>
      </div>

      <h3 style={{fontFamily: "fantasy", fontSize: "300%", marginTop: "5%", marginLeft: "5%", marginBottom: "-10%", paddingBottom: "0%"}}>Nyhetsflöde</h3>

      <div style={sectionStyle}>
        <div style={imageContainerStyle}>
          <img src={girlsImg} alt="girls" style={{ width: "100%", maxWidth: "600px" }} />
        </div>
        <div style={sectionContentStyle}>
          <h2>Grundarna av BooksByHeart</h2>
          <h4>Elsa Strand & Agnes Pettersson</h4>
          <p style={{marginLeft: "0%", marginRight: "10%"}}>
            Vi får ofta frågan om varför vi valde att skapa BooksByHeart. Förutom vårt nu gemsamma intresse för böcker och läsning, var det faktiskt en annan anledning som gjorde att de båda tjejerna redan på högstadiet bestämmde sig för att i framtiden skapa ett företag med fokus på läsning. <br></br> För Agnes har läsning varit en naturlig del redan innan hon själv ens kunde läsa. För Agnes har det istället varigt en evig kamp att lära sig läsa och sedan hålla sig ikapp med klasskambraterna. Diagnosen Dyslexi kom först i sena tonåren, men tack vara Agnes kunna hon se det fina med läsning och inte bara all kamp. <br></br> <br></br>Tillsammans är de rörande överens om att läsning är något som behöv introduseras i tidig ålder, och inte bara som något som man måste lära sig utan som något roligt och berikande. 
          </p>
          <div style={{display: "flex", justifyContent: "flex-end", alignSelf: "flex-end", marginTop: "10%", marginRight: "8%"}}>
          <Link  to="/"> Läs hela artikeln</Link>
          </div>
        </div>
      </div>





      <div style={sectionStyle}>
        <div style={imageContainerStyle}>
          <img src={intervjugirl} alt="intervjugirl" style={{ width: "100%", maxWidth: "600px" }} />
        </div>
        <div style={sectionContentStyle}>
          <h2>En av våra prenumeranter berättar...</h2>
          <p style={{marginLeft: "0%", marginRight: "10%"}}>
            Petra är en av våra yngsta prenumeranter. Efter att ha varit enda barnet i sexton år fick hennes mamma och hennes nya man ett tillskott. <br></br>Petra berättar hur hon tyckte det var roligt men var samtidigt lite ledsen över att få ett syskon så sent i hennes eget liv. <br></br>"Jag var rädd att vi inte skulle kunna få någon bra relation. Både på grund av den stora åldersskillnaden men också för att jag bara bor där varannan vecka. Dessutom så ser jag att jag inom några år kommer flytta hemifrån. Därför kände jag att jag ville ha något som var vår grej.", förklarar hon. <br></br> Därav började hon redan när Adam var ett år att premunera på BooksByHeart. Förra året tog Petra studenten och har sedan förra året lämnat Stockholm och bosatt sig i Borås där hon studerar till läkare. Men så ofta hon kan åker hon och hälsar på sin lillebror. <br></br> <br></br>"Nu till sommaren har jag sökt ett jobb i hemtrakten och kommer kunna träffa honom mycket mer. Men det är så kul för det har verkligen blivit vår grej. Nu sist när han och mamma mötte upp mig vid tåget hade han redan en bok i handen. Jag var tvungen att läsa den för honom i bilen.", säger hon och skrattar.  
          </p>
          <div style={{display: "flex", justifyContent: "flex-end", alignSelf: "flex-end", marginTop: "10%", marginRight: "8%"}}>
          <Link to="/"> Läs hela artikeln</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;