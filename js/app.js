/* Animaciones */

$(document).ready(function() {
  // Array for planet colors
  var background = ["rgba(143, 189, 255, 0.7)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.9)"];

  // Function for planet colors
  function backgroundColor() {
    return background[Math.floor(Math.random() * background.length)];
  }

  // Get viewport size
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  var viewportSize = viewportWidth + viewportHeight;

  // Set limit for amount of stars and planets based on viewport size
  var starLimit = viewportSize*0.12;
  var planetLimit = viewportSize*0.025; 

  // Get random number
  function getRandom() {
    return Math.random();
  };

  // Function for creating a star
  function newStar() {
    var starDiv = document.createElement('div');
    starDiv.innerHTML = '<figure class="star"></figure>';
    return starDiv.firstChild;
  };

  // Function for creating a planet
  function newPlanet() {
    var planetDiv = document.createElement('div');
    planetDiv.innerHTML = '<figure class="planet"></figure>'; 
    return planetDiv.firstChild;
  };

  // Loop for creating stars
  function createStars() {
    for (var i = 0; i <= starLimit; i++) {
      var star = newStar();
      star.style.top = getRandom()*100+"%";
      star.style.left = getRandom()*100+"%";
      star.style.height = (getRandom()*3)+"px";
      star.style.width = star.style.height;
      star.style.webkitAnimationDelay = getRandom()+"s";
      star.style.mozAnimationDelay = getRandom()+"s";
      star.style.webkitAnimationDuration = getRandom()+1+"s";
      star.style.mozAnimationDuration = getRandom()+1+"s";
      document.body.appendChild(star);
    };
  };

  // Loop for creating planets
  function createPlanets() {
    for (var i = 0; i <= planetLimit; i++) {
      var planet = newPlanet();
      planet.style.top = getRandom()*100+"%";
      planet.style.left = getRandom()*100+"%"; 
      planet.style.height = (getRandom() * 6) + 2+"px";
      planet.style.width = planet.style.height;
      planet.style.opacity = getRandom()+0.15;
      planet.style.webkitAnimationDelay = getRandom()+"s";
      planet.style.mozAnimationDelay = getRandom()+"s";
      planet.style.webkitAnimationDuration = getRandom()+3+"s";
      planet.style.mozAnimationDuration = getRandom()+3+"s";
      planet.style.background = backgroundColor();
      document.body.appendChild(planet);
    };
  };  
  // Call functions
  createStars();
  createPlanets();


  // Cambiar a diferentes secciones de index 

  var home = $('.section-first');
  var navBar = $('nav.navigator');
  var btnAboutme = $('#btn-aboutme');
  var btnPortfolio = $('#btn-portfolio');
  var btnContact = $('#btn-contact');
  var aboutme = $('.aboutme');
  var portfolio = $('#portfolio');
  var contact = $('#contact'); 
  var navPortfolio = $('.nav-portfolio'); 
  var navContact = $('.nav-contact'); 

  navBar.css('display', 'none');

  btnAboutme.click(function() {
    home.css('display', 'none');
    portfolio.css('display', 'none');
    contact.css('display', 'none');
    navBar.removeAttr('style');
    navBar.attr('overflow', 'hidden');
    aboutme.css('display', 'block');
  });

  btnPortfolio.click(function() {
    home.css('display', 'none');
    aboutme.css('display', 'none');
    contact.css('display', 'none');
    navBar.removeAttr('style');
    navBar.attr('overflow', 'hidden');
    portfolio.css('display', 'block');
  });

  btnContact.click(function() {
    home.css('display', 'none');
    aboutme.css('display', 'none');
    portfolio.css('display', 'none');
    navBar.removeAttr('style');
    navBar.attr('overflow', 'hidden');
    contact.css('display', 'block');
  });

  navPortfolio.click(function() {
    home.css('display', 'none');
    aboutme.css('display', 'none');    
    contact.css('display', 'none');
    portfolio.css('display', 'block');
  });

  navContact.click(function() {
    home.css('display', 'none');
    aboutme.css('display', 'none');
    portfolio.css('display', 'none');
    contact.css('display', 'block');
  });

  
});