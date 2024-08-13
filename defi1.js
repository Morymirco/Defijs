let masseMamadou = 75;
let masseFanta = 65;
let imcMamadou = masseMamadou / 1.7 ** 2;
let imcFanta = masseFanta / 1.6 ** 2;
let mamadouIMCPlusEleve = imcMamadou > imcFanta;

console.log(imcMamadou);
console.log(imcFanta);
console.log(mamadouIMCPlusEleve);
// EXO 2
let montantGnf = 500_000;
let tauxEchange = 8700;
let montantUsd = montantGnf / tauxEchange;
console.log(montantUsd);

// EXO 3
let note1 = 14;
let note2 = 16;
let note3 = 18;
// Calculez la somme de ces trois notes.

let somme = note1 + note2 + note3;
console.log(somme);
// Calculez la moyenne en divisant la somme par 3.
let moyenne = somme / 3;
// Affichez le résultat avec
console.log(moyenne);
