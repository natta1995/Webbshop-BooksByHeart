import BookImg from "../src/img/book.webp"
import img1 from "../src/img/snow.jpg"
import img2 from "../src/img/postman.webp"
import img3 from "../src/img/godlonly.jpg"
import img4 from "../src/img/pumkin.jpg"
import img5 from "../src/img/girlanddog.jpg"
import img6 from "../src/img/rabbit.jpg"




const products = [
    { id: 1, name: "Nalles första snö", image: img1, cost: "69:-", age: "2-4 år", des: "I den första boken om Nalle, får Nalle se snö för första gången. Tillsammans med sina vänner provar han allt man kan göra i snön. Bygga snögubbe, åka pulka och göra snölykta. " },
    { id: 2, name: "Postmannen och brevduvans galna race emot klockan", image: img2, cost: "129:-", des: "I en svindlande fart åker postmannen förbi på sin röda cykel. Brevduvan tror att det går fortare att flyga. Vem hinner lämna alla brev i tid?" },
    { id: 3, name: "Max - Den lilla bruna hunden", image: img3, cost: "247:-", des: "Den lilla bruna hunden, i det lilla bruna huset, med den lilla bruna sängen, där den lilla röda dockan får ligga."  },
    { id: 4, name: "I sagornas värd - pumpflickan", image: img4, cost: "59:-",  des: "I sagornas värld besöker vi denna gången pumpflickan på hennes äventyr. Pumpflickan bor ensam i skogen i sin lilla pumpa."},
    { id: 5, name: "Flickan, hunden och natten", image: img5, cost: "99:-", des: "När man inte kan sova och natten redan är här. Hur många stjärnor kan du se?" },
    { id: 6, name: "Familj Kanin åker pulka", image: img6, cost: "349:-" , des: "Mamma kanin, pappa kanin, storasyster kanin och lillebror kanin. Alla vill leka i snön men lillabror kanin vill inte gå in när det börjat bli kallt och mörkt."},
    
    
  ];

  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export default products;