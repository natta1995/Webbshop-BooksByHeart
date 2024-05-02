import BookImg from "../src/img/book.webp"
import img1 from "../src/img/ville-gar-pa-pottan.jpg"
import img2 from "../src/img/dodelsedagskalaset.jpg"
import img3 from "../src/img/boken-om-insekter.jpg"
import img4 from "../src/img/mammamu.jpg"
import img5 from "../src/img/vems-bajs.jpg"
import img6 from "../src/img/var-ar-taget.jpg"
import img7 from "../src/img/vera-och-ville-pa-aventyr.jpg"
import img8 from "../src/img/laban-och-labolina-raknar.jpg"
import img9 from "../src/img/var-enormt-stora-tradkoja-med-39-vaningar.jpg"
import img10 from "../src/img/skolmysteriet.jpg"
import img11 from "../src/img/kapten-kalsong-och-professor-pruttenplotts-prilliga-plan.jpg"
import img12 from "../src/img/gissa-ordet.jpg"
import img13 from "../src/img/vem-bits.jpg"
import img14 from "../src/img/greta-och-smakrypen.jpg"
import img15 from "../src/img/aja-baja-alfons-aberg.jpg"



const products = [
    { id: 1, name: "Vill går på pottan", image: img1, cost: "69:-" },
    { id: 2, name: "Familjen Rysberg", image: img2, cost: "129:-" },
    { id: 3, name: "Boken om insekter", image: img3, cost: "247:-" },
    { id: 4, name: "När mamma mu mötte kråkan förstagången", image: img4, cost: "59:-" },
    { id: 5, name: "Vems bajs?", image: img5, cost: "99:-" },
    { id: 6, name: "Var är tåget", image: img6, cost: "349:-"},
    { id: 7, name: "Vera & Ville på äventyr", image: img7, cost: "126:-"},
    { id: 8, name: "Lilla spöket laban", image: img8 , cost: "89:-"},
    { id: 9, name: "Vår enorma stora trädkoja", image: img9 , cost: "169:-"},
    { id: 10, name: "LasseMajas detektivbyrå - Skolmysteriet", image: img10 , cost: "149:-"},
    { id: 11, name: "Kapten Kalsong", image: img11 , cost: "269:-"},
    { id: 12, name: "Gissa ordet", image: img12 , cost: "179:-"},
    { id: 13, name: "Vem bits?", image: img13 , cost: "179:-"},
    { id: 14, name: "Greta och småkrypen", image: img14 , cost: "179:-"},
    { id: 15, name: "Aja baja Alfons Åberg", image: img15 , cost: "179:-"},
    
  ];

  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export default products;