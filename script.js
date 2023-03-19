// const spaceContainer = document.getElementById('space-container');

// function randerSpace(data) {

//   spaceContainer.innerHTML = `
//     <p>Name:${data.name}</p>
//     <p>classification:${data.classification}</p>
//     <p>designation:${data.designation}</p>
    
//     `;
  
// }

// async function fetchSpace() {
//   try {
//     const response = await fetch('https://swapi.dev/api/species/4/');
//     const data = await response.json();
//     randerSpace(data);
//   }
//   catch (err) {
//     console.log(err.message)
//   }
// }
// fetchSpace();

// const userName = document.getElementById('user_name')
// const btn = document.getElementById('btn');
// const userData = document.getElementById('user_data');

// btn.addEventListener('click,',() => {
//   userData.innerText = userName.value;
//   userName.value = '';
// })
// localStorage.setItem('userName', JSON.stringify(userName));
// const data = JSON.parse(localStorage.getItem('user'));
// console.log(data)

const btn = document.getElementById('btn');
const output = document.getElementById('output');
const row = document.getElementById('row');

const randomNumber = Math.floor((Math.random()*100)+1);
let count = 0;

function guessNumber() {
  const guess = parseInt(document.getElementById('number').value);
  count ++;
  if (guess === randomNumber ){
    output.innerHTML =`
    Congratulations!You guessed the number in ${count} guesses!
    ` ;
  }
 else  if (guess < randomNumber ){
  output.innerHTML =`Too low.Try again!`;    
  }
  else  {
  output.innerHTML =`
  Too high.Try again!`;
  }
  if (localStorage.getItem('Guess', count))
  localStorage.setItem('Guess', count);

  row.innerText = localStorage.getItem('Guess', count);
 
document.getElementById('number').value='';

}

btn.addEventListener('click', guessNumber);










