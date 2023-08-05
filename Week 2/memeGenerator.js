console.log("loading..");

const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "What do you call a fish with no eyes? Fsh.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call someone who steals energy? A jolt-oholic!"
];

function getRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}
function cleanAll() {
  let memeContent = document.querySelector(".memeContainer");
  let jokeContent = document.querySelector(".jokeContainer");
  let qoutecontent = document.querySelector(".qouteContainer");
  let riddlecontent = document.querySelector(".riddleContainer");
  memeContent.innerHTML = "";
  jokeContent.innerHTML = "";
  qoutecontent.innerHTML = "";
  riddlecontent.innerHTML = "";
}

function showMeme() {
    cleanAll();
    let memeContent = document.querySelector(".memeContainer");
    let img = document.createElement('img');
    img.setAttribute('src', 'https://www.weareteachers.com/wp-content/uploads/School-Jokes-Feature-1536x864.jpg');
    img.setAttribute('width','500px')
    img.setAttribute('height','300px')
    memeContent.appendChild(img);
}


function showJoke() {
    cleanAll();
    let jokeContent = document.querySelector(".jokeContainer");
    let newPara = document.createElement('p');
    newPara.innerText=getRandom(jokes);
    jokeContent.appendChild(newPara);
}


function showQoute() {
    cleanAll();
    let jokeContent = document.querySelector(".qouteContainer");
    let newPara = document.createElement('p');
    newPara.innerText=getRandom(quotes);
    jokeContent.appendChild(newPara);
}
function showRiddle() {
    cleanAll();
    let jokeContent = document.querySelector(".riddleContainer");
    let newPara = document.createElement('p');
    newPara.innerText=getRandom(quotes);
    jokeContent.appendChild(newPara);
}
