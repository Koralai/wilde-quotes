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

var colorList = [
  ['red', 'black'],
  ['blue', 'silver'],
  ['green', 'yellow'],
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //  The maximum is exclusive and the minimum is inclusive 
  };

function getRandomColorIndex () {
  return Math.floor(Math.random() * colorList.length); //  0 is included and colorList.length is excluded because of Math.floor
};

$("#quote-text").html(quotes[getRandomInt(0,quotes.length)]);   //  Gets the value of a random index of the quotes array

$("#btn-get").click(function(){
    var randomColorIndex = getRandomColorIndex();
    var randomColor = colorList[randomColorIndex][0];
    var hoverColor = colorList[randomColorIndex][1];
    $("#quote-text").html(quotes[getRandomInt(0,quotes.length)]); 
    $(".quote").css("border-color", randomColor);
    $("button").css("background-color", randomColor);

    var onHoverBegin = function () {
      $(this).css("background-color", hoverColor);
    };
    var onHoverEnd = function () {
      $(this).css("background-color", randomColor);
    };
    $("button").hover(onHoverBegin, onHoverEnd);
});

});