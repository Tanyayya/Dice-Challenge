if (window.performance.navigation.type === 1) {
    rollDice();
  }
  function rollDice()
  {
var randomNumber=Math.floor(Math.random()*6)+1;
var image=new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
var randomImage=image[randomNumber];
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

  
            var randomImage2=image[randomNumber2];
        document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

        if(randomNumber>randomNumber2)
        {
            document.querySelector("h1").innerHTML="Player A wins";
        }
        else if(randomNumber<randomNumber2){
            document.querySelector("h1").innerHTML="Player B wins";
        }
        else
        {
            document.querySelector("h1").innerHTML="Match is Draw";
        }
  }
