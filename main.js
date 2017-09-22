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
    "Morality is simply the attitude we adopt towards people we personally dislike.",
    "The world is a stage and the play is badly cast.",
    "I like men who have a future and women who have a past.",
    "To get back my youth I would do anything in the world, except take exercise, get up early, or be respectable.",
    "A bore is someone who deprives you of solitude without providing you with company.",
    "America is the only country that went from barbarism to decadence without civilization in between.",
    "The public have an insatiable curiosity to know everything, except what is worth knowing.",
    "Indeed I have always been of the opinion that hard work is simply the refuge of people who have nothing to do.",
    "The nicest feeling in the world is to do a good deed anonymously - and have somebody find out.",
    "I always pass on good advice. It is the only thing to do with it. It is never of any use to oneself.",
    "They've promised that dreams can come true - but forgot to mention that nightmares are dreams, too.",
    "The basis of optimism is sheer terror.",
    "This wallpaper is dreadful, one of us will have to go.",
    "The mystery of love is greater than the mystery of death.",
    "The world was my oyster, but I used the wrong fork.",
    "No man is rich enough to buy back his past.",
    "Punctuality is the thief of time.",
    "When the Gods wish to punish us, they answer our prayers.",
    "I love to talk about nothing. It's the only thing I know anything about.",
    "People who count their chickens before they are hatched act very wisely because chickens run about so absurdly that it's impossible to count them accurately.",
    "To be natural is such a very difficult pose to keep up.",
];

var colorList = [
  {
    "baseColor": "#d86c70", // light red
    "darkened": "#C45257"
  },
  {
    "baseColor": "#7CD9D5", // robin's egg blue
    "darkened": "#65C9C5"
  },
  {
    "baseColor": "#A3DE5D", // yellow-green
    "darkened": "#8CC944"
  },
  {
    "baseColor": "#B890E8", // violet
    "darkened": "#9B6DD1"
  },
  {
    "baseColor": "#A1ADE3", // slate blue
    "darkened": "#8290D1"
  },
  {
    "baseColor": "#95CAE4", // powder blue
    "darkened": "#75B3D1"
  },
  {
    "baseColor": "#E1CEB1", // light, sandy brown
    "darkened": "#D4B78C"
  },
  {
    "baseColor": "#FFCC33", // gold
    "darkened": "#EBB30C"
  },
  {
    "baseColor": "#38BA79", // kelly green
    "darkened": "#29A366"
  },
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
    var randomColor = colorList[randomColorIndex].baseColor;
    var hoverColor = colorList[randomColorIndex].darkened;
    $("#quote-text").html(quotes[getRandomInt(0,quotes.length)]); 
    $(".quote").css("border-color", randomColor);
    $(".button").css("background-color", randomColor);

    var onHoverBegin = function () {
      $(this).css("background-color", hoverColor);
    };
    var onHoverEnd = function () {
      $(this).css("background-color", randomColor);
    };
    $(".button").hover(onHoverBegin, onHoverEnd);
});

});