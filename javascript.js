// Add event listeners to each square of the chessboard
const squares = document.querySelectorAll('.chessboard td:not(:first-child)');
squares.forEach(square => {
  square.addEventListener('click', () => {
    const position = square.id;
    revealLoveLetter(position);
  });
});
// Function to reveal the love letter with each move
function revealLoveLetter(position) {
  const loveLetter = {
    'a8': 'Hear me out, my love...',
    'b7': 'I have something special to say to you...',
    'c6': 'You mean everything to me...',
    'd5': 'Your love fills my heart with joy...',
    'e4': 'Every moment with you is a treasure...',
    'f3': 'I cherish you more than words can express...',
    'g2': 'I am grateful for your love every day...',
    'h1': 'You are my everything, forever and always...'
    // Add more positions and corresponding lines as needed
  };

  // Display the corresponding line of the love letter for the given position
  const letterLine = loveLetter[position];
  if (letterLine) {
    document.getElementById('loveLetter').textContent = letterLine;
  } else {
    document.getElementById('loveLetter').textContent = "This move doesn't reveal a part of the love letter.";
  }
}
function checkAnswers() {
  const answers = {
    answer1: 'Miniso',
    answer2: 'Chocolate Milkshake',
    answer3: 'Pink',
    answer4: 'Miniso',
    answer5: 'Fourth Floor',
    answer6: 'Yes',
    answer7: 'Rainy',
    answer8: 'Dark',
    answer9: 'Playing Pool',
    answer10: 'Sun',
    answer11: 'Tomahawk',
    answer12: 'Nolimit'
    // Add more answers for each question
  };
  
  let allCorrect = true;
  for (const question in answers) {
    const userInput = document.getElementById(question).value;
    if (userInput.toLowerCase() !== answers[question].toLowerCase()) {
      allCorrect = false;
      break;
    }
  }
  
  if (allCorrect) {
    document.querySelector('.smile-collection').classList.remove('hidden');
  } else {
    alert('Oops! Not all answers are correct...BABY...I THINK YOU ARE SITTING ON IT...Yeah, your brain');
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit-btn").addEventListener("click", function() {
      var song1 = document.getElementById("song1").value;
      var song2 = document.getElementById("song2").value;
      var song3 = document.getElementById("song3").value;

      if (song1 === "Golden Hour" && song2 === "Like My Father" && song3 === "The Way I Loved You") {
          document.getElementById("message-box").style.display = "block";
          document.getElementById("unlock-link").style.display = "block";
          document.getElementById("submit-btn").style.display = "none";
      } else {
          alert("Awh..., Sorry Baby..NICE TRY tho! Now get yo lazy ass up and TRY AGAIN!!!");
      }
  });
});
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

// Initial page display
showPage(currentPage);

// Example: Navigate to the next page when clicking on the book
document.querySelector('.book').addEventListener('click', () => {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
});


