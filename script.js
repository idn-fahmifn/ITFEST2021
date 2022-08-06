// tombol burger untuk menu
let hamburger = document.getElementById("hamburger");
let navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("display_block");
});

// animation for anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});