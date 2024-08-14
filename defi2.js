// 1. Déclaration de variables
const PI = 3.14;
let nom = "Koulibaly";
let age = 19;
console.log(PI);
console.log(nom);
console.log(age);
// 2. Types de données

let number = 16.4;
let string = "Hello World";
let boolean = true;
let undefined;
let Null = null;
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof undefined);
console.log(typeof Null);
// 3. Opérations mathématiques
let a = 5;
let b = 10;
let c = a + b;
console.log(c);
// soustraction
let d = b - a;
console.log(d);
// Mulplication
let e = a * b;
console.log(e);
// Division
let f = b / a;
console.log(f);
// Reste de la division
let g = b % a;
console.log(g);
// 4. Précédence des opérateurs
console.log(3 * 4 + 5);
console.log(3 * (4 + 5));
// 5. Concaténation de chaînes
let prenom = "mory";
let nom2 = "koulibaly";
let nomComplet = prenom + " " + nom2;
console.log(nomComplet);
// 6. Template literals
let prenom1 = "mory";
let nom3 = "koulibaly";
let age1 = 19;
let message = `Bonjour, je m'appelle ${prenom1} ${nom3} et j'ai ${age1} ans.`;
console.log(message);
// 7. Comparaisons
let x,y;
x = 5;
y = 10;
console.log(x > y);
console.log(x === y);
console.log(x < y);
// 8. Conditions if-else
let note = 15
if(note >= 16){
  console.log("Excellent");
  
}
else if(14 <= note <= 15){
  console.log("Bien");
}
else if(12 <= note <= 13){
  console.log("Assez bien");
}
else if(10 <= note <= 11){
  console.log("Passable");
}
else{
  console.log("insuffisant");
}
// 9. Opérateur ternaire
let age4 = 19;
let message1 = age4 >= 18 ? "majeur" : "mineur";
console.log(message1);
// 10. Conversion de types
let textNombre = '42';
let nombre = Number(textNombre);
nombre = nombre + 8;
console.log(nombre);
let resultatEnChaine = String(nombre);
console.log(resultatEnChaine   + ' ' + "est la reponse");

