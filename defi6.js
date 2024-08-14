
calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgElephants = calcAverage(85,54, 41);
let avgPantheres = calcAverage(23,34,27);
//
function checkWinner(avgElephants, avgPantheres) {
  if (avgElephants >= 2 * avgPantheres) {
    console.log(
      `Les éléphants gagnent (${avgElephants} contre ${avgPantheres})`,
    );
  } else if (avgPantheres >= 2 * avgElephants) {
    console.log(
      `Les panthères gagnent (${avgPantheres} contre ${avgElephants})`,
    );
  }
}
console.log(avgElephants, avgPantheres);

checkWinner(avgElephants, avgPantheres);
