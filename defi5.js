// fonction compterB
function compterB(chaine){
    let compteur = 0;
    for (let i = 0; i < chaine.length; i++){
      if (chaine[i] === 'B'){
        compteur++;
      }
    }
    return compteur;
  }
  console.log(compterB("BOB"));
  // FONCTION comptechar
  function compterChar(chaine, char){
    let compteur = 0;
    for (let i = 0; i < chaine.length; i++){
      if (chaine[i] === char){
        compteur++;
      }
    }
    return compteur;
  }
  console.log(compterChar("kakkerlak", "k"));