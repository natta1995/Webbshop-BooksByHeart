import React from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BooksByHeart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Hem</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Produkter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

// const Navbar = () => {
//     return (
//         <AppBar >
//             <Toolbar>
//                 <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/">
//                     Hem
//                 </Button>
//                 <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/products">
//                     Produkter
//                 </Button>
//                 <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/contact">
//                     Kontakt
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     );
//}

export default Navbar