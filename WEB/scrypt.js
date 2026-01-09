/*prezio random funtzioa*/
function getPrezioRandom(){
  return (Math.random() * (100 - 20) + 20).toFixed(0);
}
/* BALORAZIO RANDOM FUNTZIOA */
function getBalorazioRandom(){
  return (Math.random() * (5 - 1) + 1).toFixed(1);
}
const products = [
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta1.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta2.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta3.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta4.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta5.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta6.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta7.png",
    category: 'kamisetak'
  },
  {
    productName: "Kamiseta txuria",
    price: getPrezioRandom(),
    img: "img/kamiseta8.png",
    category: 'kamisetak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak1.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak1.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak2.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak3.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak4.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak5.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak6.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak7.png",
    category: 'galtzak'
  },
  {
    productName: "Galtzak",
    price: getPrezioRandom(),
    img: "img/galtzak8.png",
    category: 'galtzak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea1.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea2.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea3.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea4.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea5.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea6.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea7.png",
    category: 'jertseak'
  },
  {
    productName: "Jertsea",
    price: getPrezioRandom(),
    img: "img/jertsea8.png",
    category: 'jertseak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak1.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak2.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak3.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak4.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak5.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak6.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak7.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak8.png",
    category: 'zapatak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa1.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa2.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa3.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa4.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa5.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa6.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa7.png",
    category: 'txaketak'
  },
  {
    productName: "Txaketa",
    price: getPrezioRandom(),
    img: "img/txaketa8.png",
    category: 'txaketak'
  },
   {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta9.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta10.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta11.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta12.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta13.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta14.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta15.png",
  category: 'kamisetak'
 },
 {
  productName: "Kamiseta txuria",
  price: getPrezioRandom(),
  img: "img/kamiseta16.png",
  category: 'kamisetak'
 },
 {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea9.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea10.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea11.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea12.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea13.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea14.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea15.png",
  category: 'jertseak'
  },
  {
  productName: "Jertsea",
  price: getPrezioRandom(),
  img: "img/jertsea16.png",
  category: 'jertseak'
  },
  {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko1.png",
  category: 'soinekoak'
  },
    {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko2.png",
  category: 'soinekoak'
  },
    {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko3.png",
  category: 'soinekoak'
  },
    {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko4.png",
  category: 'soinekoak'
  },
    {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko5.png",
  category: 'soinekoak'
  },
    {
  productName: "Soinekoa",
  price: getPrezioRandom(),
  img: "img/soineko6.png",
  category: 'soinekoak'
  },
  {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa9.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa10.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa11.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa12.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa13.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa14.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa15.png",
  category: 'txaketak'
  },
   {
  productName: "Txaketa",
  price: getPrezioRandom(),
  img: "img/txaketa16.png",
  category: 'txaketak'
  },
 {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak9.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak10.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak11.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak12.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak13.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak14.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak15.png",
    category: 'zapatilak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak16.png",
    category: 'zapatilak'
  },

];
/* --- Balorazioa gehitu --- */
products.forEach(product => {
    product.rating = getBalorazioRandom();
});

/* --- FUNTZIO NAGUSIA: Produktuak bistaratu --- */
const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent");
  shopContent.innerHTML = ""; // Garbitu aurreko edukia

  if (productsToShow.length === 0) {
      shopContent.innerHTML = "<p>Ez dago produkturik aukera honekin.</p>";
      return;
  }

  productsToShow.forEach(product => {
    const div = document.createElement("div");
    div.className = 'produktu-txartela';

    div.innerHTML = `
      <img src="${product.img}" alt="${product.productName}" onerror="this.src='https://via.placeholder.com/150'"> 
      <h3>${product.productName}</h3>
      <div class="txartel-xehetasunak">
          <div class="prezio-kaxa">
             <p class="prezioa">$ ${product.price}</p>
          </div>
          <div class="balorazioa">
             <span class="izarra">★</span>${product.rating}
          </div>
      </div>
      <div class="tailak">
         <span class="taila-etiketa">S</span>
         <span class="taila-etiketa">M</span>
         <span class="taila-etiketa">L</span>
      </div>
      <button class="erosi-btn">Erosi</button>
    `;

    const erosiBotoia = div.querySelector('.erosi-btn');
    erosiBotoia.addEventListener('click', () => {
        window.location.href = 'saskia.html'; 
    });
    shopContent.append(div);
  });
};


/* --- DOM ELEMENTUAK  --- */
const checkboxak = {
  kamisetak: document.getElementById('kamisetakBtn'),
  galtzak: document.getElementById('galtzakBtn'),
  zapatak: document.getElementById('zapatakBtn'),   
  txaketak: document.getElementById('txaketakBtn'),
  jertseak: document.getElementById('jertseakBtn'),
  soinekoak: document.getElementById('soinekoakBtn'),
  zapatilak: document.getElementById('zapatilakBtn'),
  // ZUZENDUTA: 'zapatilakBtn' kendu dut hemen, HTMLan ez duzulako jarri eta errorea ematen zuelako.
  // 'zapatakBtn' nahikoa da oinetakoentzat.
};

const denakBtn = document.getElementById('denakBtn');

/* --- UPDATE PRODUCTS FUNTZIOA (LOGIKA ZUZENDUTA) --- */
const updateProducts = () => {
  const kategoriaaktibatuak = [];

  // Egiaztatu banan-banan (NULL diren begiratu gabe kraskatu ez dezan)
  if(checkboxak.kamisetak && checkboxak.kamisetak.checked) kategoriaaktibatuak.push('kamisetak');
  if(checkboxak.galtzak && checkboxak.galtzak.checked)     kategoriaaktibatuak.push('galtzak');
  if(checkboxak.jertseak && checkboxak.jertseak.checked)   kategoriaaktibatuak.push('jertseak');
  if(checkboxak.txaketak && checkboxak.txaketak.checked)   kategoriaaktibatuak.push('txaketak');
  if(checkboxak.zapatak && checkboxak.zapatak.checked)     kategoriaaktibatuak.push('zapatak');
  if(checkboxak.zapatilak && checkboxak.zapatilak.checked) kategoriaaktibatuak.push('zapatilak');
  if(checkboxak.soinekoak && checkboxak.soinekoak.checked) kategoriaaktibatuak.push('soinekoak');

  console.log("Aktibatutako kategoriak:", kategoriaaktibatuak); // Debug egiteko

  // Iragazteko logika
  if (kategoriaaktibatuak.length === 0) {
    displayProducts(products);
    if(denakBtn) denakBtn.checked = true;
  } else {
    const productsToShow = products.filter(product => 
      kategoriaaktibatuak.includes(product.category)
    );
    displayProducts(productsToShow);
    if(denakBtn) denakBtn.checked = false;
  }
};

/* --- EVENT LISTENERAK --- */
// Segurtasunarekin gehitu (elementua existitzen bada bakarrik)
Object.values(checkboxak).forEach(checkbox => {
  if (checkbox) { // Garrantzitsua: null bada ez saiatu gehitzen
      checkbox.addEventListener('change', updateProducts);
  }
});

/* --- "DENAK" BOTOIA --- */
if (denakBtn) {
    denakBtn.addEventListener('change', (e) => {
      if (e.target.checked) {
        Object.values(checkboxak).forEach(box => {
            if(box) box.checked = false;
        });
        displayProducts(products);
      } else {
        updateProducts();
      }
    });
}

// Hasierako karga
displayProducts(products);