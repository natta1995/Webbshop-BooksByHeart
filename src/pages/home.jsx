import { Link } from "react-router-dom";
import babyImg from "../img/babyreading.jpg";
import {Button } from  "react-bootstrap"

const HomePage = () => {
 

  return (
    
    <div style={{ position: 'relative' }}>
      <img src={babyImg} alt="babyreading" style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: "absolute", bottom: "20px", right: "20px", zIndex: 1}}>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button size="lg" variant="light">Börja shoppa</Button>
        </Link>
      </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: 'white', textAlign: 'center' }}>
            <h1>Välkommen till BooksByHeart</h1>
            <p>Mer text om det behövs</p>
            <p>Du vet väl att vi har bokklubbar som du kan gå med i? För barn ifrån 0 - 12 år!</p>
    </div>
</div>

     
    
  );
};

export default HomePage;
