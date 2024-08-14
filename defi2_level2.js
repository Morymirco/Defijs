// Exercice 1 : Calculateur de pourboire
let montantFacture = 14;
let pourcentagePourboire = 0.15;
let montantPourboire = montantFacture * pourcentagePourboire;
let montantTotal = montantFacture + montantPourboire;
console.log("Montant de la facture : " + montantFacture);
// Exercice 2 : Convertisseur de devise
const TAUX_CHANGE = 0.85;
let montantDollars = 100;
let montantEuros = montantDollars * TAUX_CHANGE;
console.log(montantDollars + " dollars équivaut à " + montantEuros);
// Exercice 3 : Calculateur d'IMC simplifié
let poids = 54;
let taille = 1.8;
let imc = poids / (taille * taille);
if (imc < 18.5) {
  console.log("Sous-poids");
}
if (imc >= 18.5 && imc < 25) {
  console.log("Poids normal");
}
if (imc >= 25) {
  console.log("Surpoids");
}
console.log(imc);

// Exercice 4 : Comparateur de nombres
let nombre1 = 5;
let nombre2 = 5;
if (nombre1 > nombre2) {
  console.log(nombre1 + " est plus grand que " + nombre2);
}
if (nombre1 < nombre2) {
  console.log(nombre1 + " est plus petit que " + nombre2);
} else {
  console.log(nombre1 + " est égal à " + nombre2);
}
// Exercice 5 : Calculateur d'âge
let ANNEE_ACTUELLE = 2024;
let anneeNaissance = 2003;
let age = ANNEE_ACTUELLE - anneeNaissance;
console.log("Vous avez " + age + " ans");
// Exercice 6 : Vérificateur de nombre pair/impair
let nombre = 5;
if (nombre % 2 == 0) {
  console.log(nombre + " est pair");
}
// Exercice 7 : Calculateur de réduction
let prixOriginal;
let pourcentageReduction;
let montantReduction = (prixOriginal * pourcentageReduction) / 100;
let nouveauPrix = prixOriginal - montantReduction;
console.log("Prix original : " + prixOriginal);
console.log("Montant de la réduction : " + montantReduction);
console.log("Nouveau prix : " + nouveauPrix);
// Exercice 8 : Convertisseur de notes
let note = 16;
// 90-100 : "Excellent"
if (note >= 90 && note <= 100) {
  console.log("Excellent");
}
// 80-89 : "Très bien"
if (note >= 80 && note <= 89) {
  console.log(note, "Très bien");
}
// 70-79 : "Bien"
if (note >= 70 && note <= 79) {
  console.log(note, "Bien");
}
// 60-69 : "Assez bien"
if (note >= 60 && note <= 69) {
  console.log(note, "Assez bien");
}
// 50-59 : "Passable"
if (note >= 50 && note <= 59) {
  console.log(note, "Passable");
}
// Moins de 50 : "Insuffisant"
if (note < 50) {
  console.log(note, "Insuffisant");
}
// Exercice 9 : Calculateur de temps de trajet
let distance = 23;
let vitesse = 80;
let temps = distance / vitesse;
console.log("Le temps de trajet est de " + temps + " heures");
// Exercice 10 : Vérificateur d'éligibilité de vote
let AGE_MINIMUM_VOTE = 18;
let age1 = 17;
if (age1 >= AGE_MINIMUM_VOTE) {
  console.log("Vous êtes éligible à voter");
} else {
  let nombreAnneesRestantes = AGE_MINIMUM_VOTE - age1;
  console.log("Vous êtes éligible à voter dans " + nombreAnneesRestantes);
}
