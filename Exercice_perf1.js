
function isAdult(age){
    if(age >= 18){
      return true;
    }else{
      return false;
    }
  }
  
  function hastValidID(bool){
    return bool;
  }
  
  function canEnterClub(age, bool){
    if(age >= 18 && bool === true){
      return true;
    }else{
      return false;
    }
  }
  
  function canEnterClub(age, bool){
    if(isAdult(age) && hastValidID(bool)){
      return "Accès autorisé";
    }else{
      return "Accès refusé";
    }
  }
  
  console.log(canEnterClub(17, true));
  console.log(canEnterClub(18, false));
  console.log(canEnterClub(19, true));
  console.log(canEnterClub(20, true));
  console.log(canEnterClub(21, false));
  // Exercice 2 
  function caculateDiscount(age, isStudent){
    let reduction = 0;
    if(age < 18){
      reduction += 0.3
      return reduction;
    }
    if(isStudent){
      reduction += 0.2;
      return  reduction;
    }
    if(age >= 65){
      reduction +=0.15;
      return reduction;
    }
    else{
      reduction =0;
      return  reduction;
    }
  }
  console.log(caculateDiscount(17, false));
  console.log(caculateDiscount(19, true));
  console.log(caculateDiscount(66, false));
  console.log(caculateDiscount(50, false));
  console.log(caculateDiscount(21, true));
  // ### Exercice 3 .
  function isEligibleForLoan(age, hasJob, income){
    if(age >= 18 && hasJob && income >= 20000){
      return "Eligible";
    }else{
      return "Non eligible pour le pret";
    }
  }
  console.log(isEligibleForLoan(17, false, 20000));
  console.log(isEligibleForLoan(18, true, 20000));
  console.log(isEligibleForLoan(19, true, 15000));