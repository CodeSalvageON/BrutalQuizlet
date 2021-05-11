// Brutal Quizlet
// Variables

const rounds_in_clip = document.querySelector(".StudentPlayingHeader-progress");

// Functions 

function initText () {
  rounds_in_clip.innerText = rounds_in_clip.innerText + " rounds left in clip.";
}

// Begin brutalizing the page

setInterval(initText, 500);
