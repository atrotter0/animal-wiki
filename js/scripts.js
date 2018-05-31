const ANIMAL_LIST = ["snake", "turtle", "insect"];

function disableBtn() {
  $("#submit").prop("disabled", "true");
}

function checkValue(input) {
  for(i = 0; i < ANIMAL_LIST.length; i++) {
    if (input === ANIMAL_LIST[i]) {
      $("#submit").removeAttr("disabled");
      break;
    } else {
      disableBtn();
    }
  }
}

function hideAnimals() {
  $("#turtle").hide();
  $("#insect").hide();
  $("#snake").hide();
}

function checkAndDisplay(animalInput) {
  if (animalInput === "turtle") {
    hideAnimals();
    $("#turtle").show();
  } else if (animalInput === "insect") {
    hideAnimals();
    $("#insect").show();
  } else if (animalInput === "snake") {
    hideAnimals();
    $("#snake").show();
  } else {
    console.log(animalInput);
  }
}

$(document).ready(function() {
  disableBtn();

  $("#animal").keyup(function() {
    var input = $("#animal").val();
    checkValue(input);
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    var input = $("#animal").val();
    checkAndDisplay(input);
  });
});
