// selecting two random numbers for the dice rolls
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// console logging to make sure they are calculating correctly
console.log(randomNumber1, randomNumber2);
// created a function to display the first dice
function dice1Picker(randomNumber1){
if (randomNumber1 === 1){
  document.querySelector('.img1').setAttribute('src','images/dice1.png');
}
else if (randomNumber1 === 2){
  document.querySelector('.img1').setAttribute('src','images/dice2.png');
}
else if (randomNumber1 === 3){
  document.querySelector('.img1').setAttribute('src','images/dice3.png');
}
else if (randomNumber1 === 4){
  document.querySelector('.img1').setAttribute('src','images/dice4.png');
}
else if (randomNumber1 === 5){
  document.querySelector('.img1').setAttribute('src','images/dice5.png');
}
else  if(randomNumber1 === 6){
  document.querySelector('.img1').setAttribute('src','images/dice6.png');
}
};

// create function to display the second dice
function dice2Picker(randomNumber2){
  if (randomNumber2 === 1){
    document.querySelector('.img2').setAttribute('src','images/dice1.png');
  }
  else if (randomNumber2 === 2){
    document.querySelector('.img2').setAttribute('src','images/dice2.png');
  }
  else if (randomNumber2 === 3){
    document.querySelector('.img2').setAttribute('src','images/dice3.png');
  }
  else if (randomNumber2 === 4){
    document.querySelector('.img2').setAttribute('src','images/dice4.png');
  }
  else if (randomNumber2 === 5){
    document.querySelector('.img2').setAttribute('src','images/dice5.png');
  }
  else  if(randomNumber2 === 6){
    document.querySelector('.img2').setAttribute('src','images/dice6.png');
  }
  };

// calling functions for dice rolls
dice1Picker(randomNumber1);
dice2Picker(randomNumber2);

if(randomNumber1 > randomNumber2){
  console.log('player 1 wins')
  document.querySelector('h1').innerHTML = 'Player 1 wins! 🚩'
}
else if (randomNumber1 < randomNumber2){
  console.log('player 2 wins')
  document.querySelector('h1').innerHTML = 'Player 2 wins! 🚩'
}
else if (randomNumber1 === randomNumber2){
  console.log('its a draw!')
  document.querySelector('h1').innerHTML = '🚩Its a Draw! 🚩'
}

