$(document).ready(function () {
  // List of necessary variables
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  // Generate random number
  var randomNumber = Math.floor(Math.random() * 120) + 19;
  $("#random-number").text("You must match: " + randomNumber);
  $("#win-total").text("Wins: " + wins);
  $("#loss-total").text("Losses: " + losses);
  $("#total-score").text(totalScore);
  // Generate random values for crystals

  var crystalOneValue = Math.floor(Math.random() * 12) + 1;
  var crystalTwoValue = Math.floor(Math.random() * 12) + 1;
  var crystalThreeValue = Math.floor(Math.random() * 12) + 1;
  var crystalFourValue = Math.floor(Math.random() * 12) + 1;
  // on click
  // add randomly generated value of crystal to total score
  $("#crystal-1").on("click", function () {
    totalScore = totalScore + crystalOneValue;
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      wins++;
      $("#win-total").text("Wins: " + wins);
      console.log(wins);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    } else if (totalScore > randomNumber) {
      losses++;
      $("#loss-total").text("Losses: " + losses);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    }
  });

  $("#crystal-2").on("click", function () {
    totalScore = totalScore + crystalTwoValue;
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      wins++;
      $("#win-total").text("Wins: " + wins);
      console.log(wins);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    } else if (totalScore > randomNumber) {
      losses++;
      $("#loss-total").text("Losses: " + losses);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    }
  });
  $("#crystal-3").on("click", function () {
    totalScore += crystalThreeValue;
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      wins++;
      $("#win-total").text("Wins: " + wins);
      console.log(wins);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    } else if (totalScore > randomNumber) {
      losses++;
      $("#loss-total").text("Losses: " + losses);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    }
  });
  $("#crystal-4").on("click", function () {
    totalScore += crystalFourValue;
    $("#total-score").text(totalScore);
    if (totalScore === randomNumber) {
      wins++;
      $("#win-total").text("Wins: " + wins);
      console.log(wins);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    } else if (totalScore > randomNumber) {
      losses++;
      $("#loss-total").text("Losses: " + losses);
      totalScore = 0;
      $("#total-score").text(totalScore);
      crystalOneValue = Math.floor(Math.random() * 12) + 1;
      crystalTwoValue = Math.floor(Math.random() * 12) + 1;
      crystalThreeValue = Math.floor(Math.random() * 12) + 1;
      crystalFourValue = Math.floor(Math.random() * 12) + 1;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      $("#random-number").text("You must match: " + randomNumber);
    }
  });

  // if (totalScore === randomNumber) {
  //   wins++;
  //   $("#win-total").text("Wins: " + wins);
  //   console.log(wins);
  //   totalScore = 0;
  //   $("#total-score").text(totalScore);
  //   crystalOneValue = Math.floor(Math.random() * 12) + 1;
  //   crystalTwoValue = Math.floor(Math.random() * 12) + 1;
  //   crystalThreeValue = Math.floor(Math.random() * 12) + 1;
  //   crystalFourValue = Math.floor(Math.random() * 12) + 1;
  //   randomNumber = Math.floor(Math.random() * 120) + 19;
  //   $("#random-number").text("You must match: " + randomNumber);
  // } else if (totalScore > randomNumber) {
  //   losses++;
  //   $("#loss-total").text("Losses: " + losses);
  //   totalScore = 0;
  //   $("#total-score").text(totalScore);
  //   crystalOneValue = Math.floor(Math.random() * 12) + 1;
  //   crystalTwoValue = Math.floor(Math.random() * 12) + 1;
  //   crystalThreeValue = Math.floor(Math.random() * 12) + 1;
  //   crystalFourValue = Math.floor(Math.random() * 12) + 1;
  //   randomNumber = Math.floor(Math.random() * 120) + 19;
  //   $("#random-number").text("You must match: " + randomNumber);
  // }
  // if total score = random number add a win and reset game
  // if total score > random number add a loss and reset game
})