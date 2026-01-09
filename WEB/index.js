/* --- HANBURGESA MENUA (EUSKERA) --- */

// 1. Elementuak bilatu (izen berriekin)
const menuBotoia = document.querySelector('.menu-ikonoa');
const nabigazioMenua = document.getElementById('nabigazioMenua');

// 2. Klik egitean funtzioa exekutatu
if (menuBotoia && nabigazioMenua) {
    menuBotoia.addEventListener('click', () => {
        
        // 'aktiboa' klasea jarri edo kendu
        nabigazioMenua.classList.toggle('aktiboa');
        
        // Ikonoa aldatu (Menua <-> X)
        if (nabigazioMenua.classList.contains('aktiboa')) {
            menuBotoia.textContent = 'close'; // X ikonoa
        } else {
            menuBotoia.textContent = 'menu';  // Hanburgesa ikonoa
        }
    });
}




