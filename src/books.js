import img1 from "../src/img/snow.jpg"
import img2 from "../src/img/postman.webp"
import img3 from "../src/img/godlonly.jpg"
import img4 from "../src/img/pumkin.jpg"
import img5 from "../src/img/girlanddog.jpg"
import img6 from "../src/img/rabbit.jpg"
import img7 from "../src/img/sleepy.jpg"
import img8 from "../src/img/raccoon-garbage.webp"
import img9 from "../src/img/hijabgirl.webp"


const products = [
    { 
      id: 1, 
      name: "Nalles första snö", 
      image: img1, 
      cost: "69:-", 
      age: "1-3 år", 
      by: "Joakim Karlsson & Anna Jakobsson",
      sort: "Plastat häfte",
      des: "I den första boken om Nalle, får Nalle se snö för första gången. Tillsammans med sina vänner provar han allt man kan göra i snön. Bygga snögubbe, åka pulka och göra snölykta. " 
    },
    { 
      id: 2,
      name: "Postmannen och brevduvan", 
      image: img2, 
      cost: "129:-",
      age: "6-8 år",
      by: "Sam Williams",
      sort: "Inbunden",
      des: "I en svindlande fart åker postmannen förbi på sin röda cykel. Brevduvan tror att det går fortare att flyga. Vem hinner lämna alla brev i tid?" 
    },
    { 
      id: 3, 
      name: "Max - Den lilla bruna hunden", 
      image: img3, 
      cost: "247:-", 
      age: "0-2 år",
      by: "Jennifer Long",
      sort: "Bildbok",
      des: "Den lilla bruna hunden, i det lilla bruna huset, med den lilla bruna sängen, där den lilla röda dockan får ligga."  
    },
    { 
      id: 4, 
      name: "I sagornas värd - pumpflickan", 
      image: img4, 
      cost: "59:-",  
      age: "8-12 år",
      by: "Björn Svensson",
      sort: "Inbunden",
      des: "I sagornas värld besöker vi denna gången pumpflickan på hennes äventyr. Pumpflickan bor ensam i skogen i sin lilla pumpa."
    },
    { 
      id: 5, 
      name: "Flickan, hunden och natten", 
      image: img5, 
      cost: "99:-", 
      age: "8-10 år",
      by: "Sara Lövgren",
      sort: "Inbunden",
      des: "När man inte kan sova och natten redan är här. Hur många stjärnor kan du se?" 
    },
    { 
      id: 6, 
      name: "Familjen Kanin åker pulka", 
      image: img6, 
      cost: "349:-" , 
      age: "1-3 år",
      by: "Göran & Astrid Björk",
      sort: "Inplastad bildbok",
      des: "Mamma kanin, pappa kanin, storasyster kanin och lillebror kanin. Alla vill leka i snön men lillabror kanin vill inte gå in när det börjat bli kallt och mörkt."
    },
    { 
      id: 7,
      name: "Somna med oss",
      image: img7, 
      cost: "89:-",
      age: "0-3 år",
      by: "Elsa Ericcsson och Siv Malm",
      sort: "Inbunden",
      des: "Somna med oss, är en bok som slagit världen över. Dessa lugna texter får barnen att somna inom kort"
    },
    { 
      id: 8,
      name: "Tvättbjörnen som hatade att bada",
      image: img8,
      cost: "119:-",
      age: "4-6 år",
      by: "Magnus Ravsk",
      sort: "Inbunden",
      des: "Tvättbörnen Jens hatar att bada, han hatar att bada så mycket att han gör allt för att slippa."
      },
      {
        id: 9,
        name: "Misras första hijab",
        image: img9,
        cost: "179:-",
        age: "8-12 år",
        by: "Amina Gafur",
        sort: "Inbunden",
        des: "Dagen är här, dagen Misra längtat efter sedan hon var liten. Idag skall kon få sin första egna hijab."

      }
  
    ];

  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export default products;