$(function(){

var quotes = [
    "I never saw anybody take so long to dress, and with such little result.",
    "It is what you read when you don't have to that determines what you will be when you can't help it.",
    "I don't want to go to heaven. None of my friends are there.",
    "Every saint has a past, and every sinner has a future.",
    "I am not young enough to know everything.",
    "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
    "I can resist anything except temptation.",
    "Quotation is a serviceable substitute for wit.",
    "Fashion is a form of ugliness so intolerable that we have to alter it every six months.",
    "Some cause happiness wherever they go; others whenever they go.",
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive 
  }

function getRandomColor() {
    var letters = '789ABCD';
    var color = '#';
    for (var i = 0; i < 6; i++) {                       //6 because of the hexidecimal format
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  }

$("#quote-text").html(quotes[getRandomInt(0,quotes.length)]);

$("#btn-get").click(function(){
    var randomColor = getRandomColor();
    $("#quote-text").html(quotes[getRandomInt(0,quotes.length)]); //Gets the "text" value of the object at a random index of the array
    $(".quote").css("border-color", randomColor);
    $("button").css("background", randomColor);
});

});