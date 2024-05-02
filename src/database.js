import BookImg from "../src/img/book.webp"

const products = [
    { id: 1, name: "Mannen som lekte med elden", image: BookImg, cost: "69:-" },
    { id: 2, name: "Molly, den lilla musen", image: BookImg, cost: "129:-" },
    { id: 3, name: " 2 + 7 = 19 ?", image: BookImg, cost: "247:-" },
    { id: 4, name: "Sandra Larsson - en livshistoria", image: BookImg, cost: "59:-" },
    { id: 5, name: "Självkänsla, självförtroende och självförståelse", image: BookImg, cost: "99:-" },
    { id: 6, name: "Sagan om de två sandslotten", image: BookImg, cost: "349:-"},
    { id: 7, name: "Mellan jord och himmel", image: BookImg, cost: "126:-"},
    { id: 8, name: "På liv och död", image: BookImg , cost: "89:-"},
    { id: 9, name: "En polis memoarer", image: BookImg , cost: "169:-"},
    { id: 10, name: "Kalle och Emma", image: BookImg , cost: "149:-"},
    { id: 11, name: "Första tiden som förälder", image: BookImg , cost: "269:-"},
    { id: 12, name: "Allt om trädgård", image: BookImg , cost: "179:-"},
  ];

  export const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };
  
  export default products;