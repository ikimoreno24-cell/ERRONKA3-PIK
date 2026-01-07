/*prezio random funtzioa*/
function getPrezioRandom(){
  return (Math.random() * (100 - 20) + 20).toFixed(0);
}
/* BALORAZIO RANDOM FUNTZIOA */
function getBalorazioRandom(){
  return (Math.random() * (5 - 1) + 1).toFixed(1);
}
/*GIZONEZKOEN PRODUKTUAK*/
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
  
];
/*EMAKUMEAK*/
const products2=[
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
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak10.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak11.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak12.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak13.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak14.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak15.png",
    category: 'zapatak'
  },
  {
    productName: "Zapatilak",
    price: getPrezioRandom(),
    img: "img/zapatilak16.png",
    category: 'zapatak'
  },

 
];
/* --- LOGIKA: ZEIN LISTA ERABILI? --- */
// Begiratu ea URLak "emakumeak.html" dion. Hala bada, emakumeen lista kargatu.
let currentProducts = [];

if (window.location.pathname.includes("emakumeak")) {
    currentProducts = products2;
    console.log("Emakumeen orria detektatuta");
} else {
    currentProducts = products;
    console.log("Gizonen orria detektatuta ");
}

/* --- KODE BERRIA: Balorazioa behin bakarrik kalkulatu --- */
currentProducts.forEach(product => {
    product.rating = getBalorazioRandom();
});
/* --- FUNTZIO NAGUSIA: Produktuak bistaratu --- */
const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent");
  if (!shopContent) return;
  shopContent.innerHTML = ""; // Garbitu aurreko edukia


  productsToShow.forEach(product => {
    
    /* Html kodea sortzen du produktu bakoitzarentzako zeren eta html idatziz ezkero,
    produtku bakoitzerako kodea errepikatu beharko genuelako*/
    const div = document.createElement("div");
    div.className = 'produktu-txartela';

    div.innerHTML = `
      <img src="${product.img}" alt="${product.productName}">
      
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
         <span class="taila-etiketa">XL</span>
      </div>

      <button class="erosi-btn">Erosi</button>
    `;
    // --- EROSI BOTOIAREN LOGIKA (SASKIRA BIDERATU) ---
    
    // 1. Sortu berri dugun txartelaren barruko botoia bilatu
    const erosiBotoia = div.querySelector('.erosi-btn');
    
    // 2. Klik egitean 'saskia.html' orrira eraman
    erosiBotoia.addEventListener('click', () => {
        // Kontsolan mezua erakutsi (frogak egiteko)
        console.log("Saskira bideratzen: " + product.productName);
        
        // Erabiltzailea saskiaren orrira bidali
        window.location.href = 'saskia.html'; 
    });
    shopContent.append(div);
  });
};

/* --- IRAGAZKIA  --- */
const filterProducts = (category) => {
  const productsToShow = products.filter(product => product.category === category);
  console.log(productsToShow);
  displayProducts(productsToShow);
};




/*CHECKBOXAK*/
/* --- DOM ELEMENTUAK --- */
const checkboxak = {
  kamisetak: document.getElementById('kamisetakBtn'),
  jertseak:  document.getElementById('jertseakBtn'),
  txaketak:  document.getElementById('txaketakBtn'),
  
  // Gizonezkoena bakarrik
  galtzak:   document.getElementById('galtzakBtn'),
  zapatak:   document.getElementById('zapatakBtn'),
  
  // Emakumezkoena bakarrik
  soinekoak: document.getElementById('soinekoakBtn'),
  zapatilak: document.getElementById('zapatilakBtn')
};

const denakBtn = document.getElementById('denakBtn');

/* --- CHECKBOX BAT ALDATZEAN EXEKUTATZEN DEN FUNTZIOA --- */
const updateProducts = () => {
  // 1. Array hutsa sortu momentuan zer dagoen aukeratuta gordetzeko
  const kategoriaaktibatuak = [];

  // 2. Banan-banan egiaztatu ea markatuta dauden
  if(checkboxak.kamisetak && checkboxak.kamisetak.checked) kategoriaaktibatuak.push('kamisetak');
  if(checkboxak.jertseak && checkboxak.jertseak.checked)   kategoriaaktibatuak.push('jertseak');
  if(checkboxak.txaketak && checkboxak.txaketak.checked)   kategoriaaktibatuak.push('txaketak');
  
  // Gizonak
  if(checkboxak.galtzak && checkboxak.galtzak.checked)     kategoriaaktibatuak.push('galtzak');
  if(checkboxak.zapatak && checkboxak.zapatak.checked)     kategoriaaktibatuak.push('zapatak');
  
  // Emakumeak
  if(checkboxak.soinekoak && checkboxak.soinekoak.checked) kategoriaaktibatuak.push('soinekoak');
  if(checkboxak.zapatilak && checkboxak.zapatilak.checked) kategoriaaktibatuak.push('zapatak');
  // 3. Iragazteko logika
  if (kategoriaaktibatuak.length === 0) {
    // Ezer ez badago aukeratuta, produktu guztiak erakutsi
    displayProducts(currentProducts);
    
    //"Denak" botoia markatu bisualki, erabiltzaileak jakin dezan
    if(denakBtn) denakBtn.checked = true;

  } else {
    // Kategoriaren bat aukeratuta badago, iragazi
    const productsToShow = currentProducts.filter(product => 
      kategoriaaktibatuak.includes(product.category)
    );
    displayProducts(productsToShow);

    // "Denak" botoia desmarkatu, iragazten ari garelako
    if(denakBtn) denakBtn.checked = false;
  }
};

/* --- EVENT LISTENERAK --- */

// Checkbox bakoitzari updateProducts funtzioa gehitu
Object.values(checkboxak).forEach(checkbox => {
  if (checkbox) checkbox.addEventListener('change', updateProducts);
});

/* --- "DENAK" BOTOIAREN LOGIKA BEREZIA --- */
denakBtn.addEventListener('change', (e) => {
  if (e.target.checked) {
    // 1. Beste checkbox guztiak desmarkatu bisualki
    Object.values(checkboxak).forEach(box => { if (box) box.checked = false; });

    // 2. Produktu guztiak erakutsi
    displayProducts(currentProducts);
  } else {
    // "Denak" eskuz desmarkatzen bada, updateProducts deitu egoera eguneratzeko
    updateProducts();
  }
});

// Hasierako karga (Dena erakutsi orrialdea irekitzean)
displayProducts(currentProducts);
