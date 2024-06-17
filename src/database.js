import BookImg from "../src/img/book.webp"
import img1 from "../src/img/snow.jpg"
import img2 from "../src/img/postman.webp"
import img3 from "../src/img/godlonly.jpg"
import img4 from "../src/img/pumkin.jpg"
import img5 from "../src/img/girlanddog.jpg"
import img6 from "../src/img/rabbit.jpg"




const products = [
    { id: 1, name: "Nalles första snö", image: img1, cost: "69:-" },
    { id: 2, name: "Postmannen och brevduvans galna race emot klockan", image: img2, cost: "129:-" },
    { id: 3, name: "Max - Den lilla bruna hunden", image: img3, cost: "247:-" },
    { id: 4, name: "I sagornas värd - pumpflickan", image: img4, cost: "59:-" },
    { id: 5, name: "Flickan, hunden och natten", image: img5, cost: "99:-" },
    { id: 6, name: "Familj Kanin åker pulka", image: img6, cost: "349:-"},
    { id: 7, name: "Nalles första snö", image: img1, cost: "69:-" },
    { id: 8, name: "Postmannen och brevduvans galna race", image: img2, cost: "129:-" },
    { id: 9, name: "Max - Den lilla bruna hunden", image: img3, cost: "247:-" },
    { id: 10, name: "I sagornas värd", image: img4, cost: "59:-" },
    { id: 11, name: "Flickan, hunden och natten", image: img5, cost: "99:-" },
    { id: 12, name: "Familjen kanin åker pulka", image: img6, cost: "349:-"},
    
  ];

  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export default products;