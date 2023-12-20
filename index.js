document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function showCard() {
    // Hide all cards
    cards.forEach(card => card.classList.remove('active'));
    
    // Show the current card
    cards[currentIndex].classList.add('active');
  }

  // Initial card display
  showCard();

  // Function to handle sliding to the next card
  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
  }

  // Event listener for the "Next" button
  nextBtn.addEventListener('click', nextCard);
});


// ----------------------------------------------------btn of recipe-------------------------------------------

$(".rbtn").click(function() {
  window.location.href = "./recipie.html";
  return false;
});
////scroll effect of nav------------------------------------


$("#recipeid").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".dummy").offset().top
  }, 1000);
});

$("#aboutid").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".headabout").offset().top
  }, 1000);
});

$("#contactid").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".contacthead").offset().top
  }, 1000);
});