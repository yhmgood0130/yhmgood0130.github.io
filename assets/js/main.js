$(document).ready(function(){
  	$("#bunny").delay(50).fadeOut("slow");
    $('#myCarousel').carousel({
        interval: false
    });
    showProject();
    showCode();
})

function showProject(id) {
  if(id === 'genie'){
    window.open("https://football-genie.firebaseapp.com");
  } else if(id === 'gamerz'){
    window.open("https://gamerz-79621.firebaseapp.com/");
  } else if(id === 'reads'){
    window.open("https://galvanize-reads-ec524.firebaseapp.com/");
  }
}

function showCode(id) {
  if(id === 'genie'){
    window.open("https://github.com/yhmgood0130/Football-Genie");
  } else if(id === 'gamerz'){
    window.open("https://github.com/yhmgood0130/full-stack-web-client");
  } else if(id === 'reads'){
    window.open("https://github.com/yhmgood0130/galvanize-reads-client-side");
  }
}
