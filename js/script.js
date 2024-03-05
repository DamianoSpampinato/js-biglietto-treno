//input km viaggio + età passeggero
const travelLength = parseInt(prompt('Quanto è lungo il viaggio in km'));
console.log(travelLength);
const age = parseInt(prompt('Quanti anni hai?'));
console.log(age);
// varbiabili tasso di sconto  e definizione costo per km
const defaultPricePerKm = 0.21;
console.log(defaultPricePerKm);
const minorDiscount = 20;
const over65Discount = 40;

// applicazione sconto selezionato dalla fascia di età
let travelPrice = travelLength * defaultPricePerKm;
    if (age < 18) { travelPrice = (travelLength * defaultPricePerKm) - (travelLength * defaultPricePerKm * 20 / 100)};
    if (age > 65) { travelPrice = (travelLength * defaultPricePerKm) - (travelLength * defaultPricePerKm * 40 / 100)};
    
//output utente
document.getElementById("output-price").innerHTML = (travelPrice.toFixed(2))