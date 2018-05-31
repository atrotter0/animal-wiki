// create branching structure based on input here
function checkAndDisplay(animalInput) {
  if (animalInput === "turtle") {
    $("#turtle").show();
  } else if (animalInput === "insect") {
    $("#insect").show();
  } else if (animalInput === "snake") {
    $("#snake").show();
  } else {
    console.log(animalInput);
  }
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var input = $("#animal").val();
    checkAndDisplay(input);
  });
});
