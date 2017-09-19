$(function(){

var quotes = [
    {
        "id": 1,
        "text": "I never saw anybody take so long to dress, and with such little result."
    },
    {
        "id": 2,
        "text": "It is what you read when you don't have to that determines what you will be when you can't help it."
    },
    {
        "id": 3,
        "text": "I don't want to go to heaven. None of my friends are there."
    },
    {
        "id": 4,
        "text": "Every saint has a past, and every sinner has a future."
    },
    {
        "id": 5,
        "text": "I am not young enough to know everything."
    },
    {
        "id": 6,
        "text": "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth."
    },
    {
        "id": 7,
        "text": "I can resist anything except temptation."
    },
    {
        "id": 8,
        "text": "Quotation is a serviceable substitute for wit."
    },
    {
        "id": 9,
        "text": "Fashion is a form of ugliness so intolerable that we have to alter it every six months."
    },
    {
        "id": 10,
        "text": "Some cause happiness wherever they go; others whenever they go."
    },
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

$("#quote-text").html(quotes[getRandomIntInclusive(0,9)]["text"]);

$("#btn-get").click(function(){
    $("#quote-text").html(quotes[getRandomIntInclusive(0,9)]["text"]); //Gets the "text" value of the object at a random index of the array
});

});