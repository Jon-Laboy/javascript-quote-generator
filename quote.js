const life_btn= document.getElementById('btn_life');
const travel_btn = document.getElementById('btn_travel');
const clear_btn = document.getElementById('btn_clear'); 
const quote_area = document.getElementById('quoteArea');

life_btn.addEventListener('click', () => { getQuotes("life") })
travel_btn.addEventListener('click', () => { getQuotes("travel") })
clear_btn.addEventListener('click', () => {document.getElementById("quoteArea").innerHTML= "";})


function getQuotes(type) {
  let sentenceFrag1, sentenceFrag2, sentenceFrag3, quote = ''
  
  if (type === "life") {
    sentenceFrag1 = ['Being happy', 'Living contently', 'Enjoying your life', 'Taking it easy', 'Trying to relax']
    sentenceFrag2 = ['is a challenge', 'is worth it', 'is a possibility', 'is the goal', 'can be done'];
    sentenceFrag3 = ['for a brighter future.', 'to soar higher.', 'for a better you.', 'to achieve greatness.', 'for a stress-free day.'];
  } else {
    sentenceFrag1 = ['Traveling', 'Explorinig', 'Seeing the world', 'Going on a journey', 'Hitchhiking']
    sentenceFrag2 = ['is the ticket to', 'opens your eyes to', 'grants access to', 'opens doors to', 'can make you experience'];
    sentenceFrag3 = ['the earth around us.', 'the lives of others.', 'the many cultures different from your own.', 'the adventures that await.', 'the joys of the world.'];
  }
 let userInput = document.getElementById("userInput").value; 
  for (i = 0; i < userInput; i++) {
    quote += `${sentenceFrag1[Math.floor(Math.random() * sentenceFrag1.length)]} ${sentenceFrag2[Math.floor(Math.random() * sentenceFrag2.length)] } ${sentenceFrag3[Math.floor(Math.random() * sentenceFrag3.length)]} <br> <br>`
    quoteArea.innerHTML = quote
  }
  
  return quote
}
