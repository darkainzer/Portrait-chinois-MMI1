/*Animation de titre*/
document.addEventListener("DOMContentLoaded", function () {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.oula');
  hiddenElements.forEach((el) => observer.observe(el));

  let liste = document.querySelector("#liste-analogies");
  for (var i = 0; i < data.length; i++) {
      liste.innerHTML +=
      '<section id="' + data[i].id + '" class="section" style="flex-direction:' + data[i].align + ';" data-img="' + data[i].dataimg + '"><img class="image" src="' +data[i].img + '"></div></div><div class="centerCarre"><div class="bordureCarre"></div><div class="carre"><div class="legendAnalogies"><h2 class=\"sijetais\">Si j’étais <span class="titre-ana">' + data[i].analogie + "</span>, </h2><h2 class='jeserais'>je serais <span class='valeur-ana'>" + data[i].valeuranalogie + "</span></h2></div><p class=\"text-ana\">" + data[i].text +"</p></div></div></div></section>";

  }

    document.querySelector("#send").addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector('#nouvelleanalogie').innerHTML +=

          '<section class="section" style="flex-direction:row-reverse";" data-img="' +
          document.querySelector("#dataimg").value +
          '"><img class="image" src="' +
          document.querySelector("#img").value +
          '"></div></div><div class="centerCarre"><div class="bordureCarre"></div><div class="carre"><div class="legendAnalogies"><h2 class=\"sijetais\">Si j’étais <span class="titre-ana">' +
          document.querySelector("#analogie").value +
          ", </h2><h2 class='jeserais'>je serais <span class='valeur-ana'>" +
          document.querySelector("#valeuranalogie").value +
          "</h2></div><p class=\"text-ana\">" +
          document.querySelector("#text").value +
          "</p></div></div></div></section>";


          })
      })


function openNav() {
  document.getElementsByTagName("body")[0].className = "sidebar-open"
}

function closeNav() {
  document.getElementsByTagName("body")[0].className = ""
}


/*background - Code composé de nombreux tutos sur stackoverflow et d'un peu d'aide de mon frère qui est développeur web pour que ça fonctionne. Ce code permet de changer le background en fonction de la section qui est regardé, avec une fonction pour que les transitions s'effectuent au maximum toutes les 500ms*/
const sections = document.querySelectorAll('section')

document.addEventListener('scroll', () => {
  sections.forEach(section => {
    if(section.getBoundingClientRect().top <= document.body.scrollTop) {
      document.body.style.background = section.dataset.color
    }    
  })
})

document.addEventListener("DOMContentLoaded", function () {
  let isTransitioning = false;

  function updateBackground(imgUrl) {
    if (!isTransitioning) {
      isTransitioning = true;
      document.body.style.transition = "background 0.5s";
      document.body.style.backgroundImage = "url('" + imgUrl + "')";
      setTimeout(function() {
        isTransitioning = false;
      }, 500);
    }
  }

  function detectSectionInView(scrollTop) {
    var allDivs = document.querySelectorAll('.section');
    var closestSection = null;
    var minDistance = Infinity;

    for (var i = 0; i < allDivs.length; i++) {
      var curDiv = allDivs[i];
      var distance = Math.abs(curDiv.offsetTop - scrollTop);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = curDiv;
      }
    }

    if (closestSection) {
      var imgUrl = closestSection.getAttribute("data-img");
      updateBackground(imgUrl);
    }
  }

  window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    detectSectionInView(scrollTop);
  });

  window.addEventListener('DOMContentLoaded', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    detectSectionInView(scrollTop);
  });
});


/*pop up*/
document.addEventListener("DOMContentLoaded", function () {
var overlay = document.getElementById("overlay");

document.querySelector("#show-modal").addEventListener("click", () => {
    overlay.style.display = "block";
});

document.querySelector("#close-modal").addEventListener("click", () => {
    overlay.style.display = "none";
});

});

fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=maxime.scholtes&courriel=" + document.querySelector("#mail").value + "Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeuranalogie").value + "Parce que " + document.querySelector("#text").value).then(function (response) {
  response.json().then(function (data) {
      if (data.status == "success") {
          document.querySelector("#succes").innerHTML = "C'est OK";
      } else {
          document.querySelector("#succes").innerHTML = "Problème détecté";
      }
  })
});




