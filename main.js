// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector("#modal")
const modalMessage = document.querySelector("#modal-message")
const heartsList = document.querySelectorAll(".like")

function toggleModal() {
  modal.classList.toggle("hidden")
}


function liker(event) {
  const heart = event.target
  mimicServerCall("bogusUrl")
    .then(response => {
      if (heart.textContent == EMPTY_HEART){
        heart.textContent = FULL_HEART
        heart.className = "activated-heart"
      } else if (heart.textContent == FULL_HEART){
        heart.textContent = EMPTY_HEART
        heart.classList.toggle("activated-heart")
      }
    })
    .catch(error => {
      toggleModal()
      modalMessage.textContent = error
      setTimeout(toggleModal,2000)
    })
}

for(heart of heartsList) {
  heart.addEventListener("click", liker)
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
