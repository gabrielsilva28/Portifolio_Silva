//barras de pag do header
function setActiveMenuItem() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    var links = document.querySelectorAll('.nav-item');

    links.forEach(function(link) {
        link.classList.remove('active');
    });

    var currentLink = document.querySelector('.nav-link[href="' + filename + '"]');
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

//efeito de digitar
const text = "Gabriel Silva";
let index = 0;

function type() {
  document.getElementById("typing").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 200);
  }
}

setTimeout(function() {
    document.getElementById("typing").style.borderRight = "none";
  }, text.length * 400);


setActiveMenuItem();
type();