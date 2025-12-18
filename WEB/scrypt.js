const products = [
 {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta1.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta2.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta3.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta4.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta5.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta6.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta7.png",
    category: 'kamisetak'
  },
   {
    productName: "Kamiseta txuria",
    price: 15,
    img: "img/kamiseta8.png",
    category: 'kamisetak'
  },

  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak1.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak1.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak2.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak3.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak4.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak5.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak6.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak7.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: 30,
    img: "img/galtzak8.png",
    category: 'galtzak'
  },
  {
    productName: "Sudadera beltza",
    price: 30,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt88d9dJBBmsvB5UUL6xY9via7FXJ-2l_jA&s",
    category: 'sudaderak'
  },

 
  {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak1.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak2.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak3.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak4.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak5.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak6.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak7.png",
    category: 'zapatak'
  },
   {
    productName: "Zapatilak",
    price: 70,
    img: "img/zapatilak8.png",
    category: 'zapatak'
  },
  
  {
    productName: "Txaketa",
    price: 80,
    img: "img/txaketa1.png",
    category: 'txaketak'
  },
 
  
]



const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent")

  shopContent.innerHTML = ""
  productsToShow.forEach(product => {
    const div = document.createElement("div")
    div.className = 'card-products'
    div.innerHTML = `
      <img src="${product.img}" alt="algun-alt">
      <h3>${product.productName}</h3>
      <p class="price"> $ ${product.price}</p>
      <button>Karritora gehitu</button>
    `
    shopContent.append(div)
  })
}

const filterProducts = (category) => {
  const productsToShow = products.filter(product => product.category === category)
  displayProducts(productsToShow)
}

const kamisetakBtn = document.getElementById('kamisetakBtn');
const galtzakBtn = document.getElementById('galtzakBtn');
const zapatakBtn = document.getElementById('zapatakBtn');
const txaketakBtn = document.getElementById('txaketakBtn');
const denakBtn = document.getElementById('denakBtn');


kamisetakBtn.addEventListener('click', () => {
  filterProducts('kamisetak');
});


galtzakBtn.addEventListener('click', () => {
  filterProducts('galtzak');
});

zapatakBtn.addEventListener('click', () => {
  filterProducts('zapatak');
});
txaketakBtn.addEventListener('click', () => {
  filterProducts('txaketak');
});
denakBtn.addEventListener('click', () => {
  displayProducts(products)
});

displayProducts(products)