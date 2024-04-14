import React from "react";
import {Link} from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import { Toolbar, Button } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar >
            <Toolbar>
                <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/">
                    Hem
                </Button>
                <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/products">
                    Produkter
                </Button>
                <Button sx={{backgroundColor: "white", color: "black"}} component={Link} to="/contact">
                    Kontakt
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar