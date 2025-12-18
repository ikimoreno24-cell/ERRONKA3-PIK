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
    productName: "Zapata beltzak",
    price: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREK7xXmz6QbsNxV0vPUzHZi8TpjFbFBVYCUQ&s",
    category: 'zapatak'
  },
  {
    productName: "Zapata zuriak",
    price: 60,
    img: "https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-men-white-sneakers-classic-and-fashionable-footwear-for-clipart-illustration-png-image_15187292.png",
    category: 'zapatak'
  },
  {
    productName: "Nike zapatak",
    price: 70,
    img: "https://png.pngtree.com/png-vector/20250129/ourmid/pngtree-trendy-nike-dunk-low-shoes-comfortable-top-sneakers-png-image_15363998.png",
    category: 'zapatak'
  },
  {
    productName: "Txakera bakeroa",
    price: 80,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZM2vqH40N0HNFwxhoRtmC5ZhpCiLpPLERQ&s",
    category: 'txaketak'
  },
  {
    productName: "Txakera larruzkoa",
    price: 80,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xkRQiAsaRvo5xeSv4zHs0fPngxp2Ikbn4g&s",
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