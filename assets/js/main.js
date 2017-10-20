$.mobile.loading( "hide" );
$(document).ready(function(){
  	$("#bunny").delay(50).fadeOut("slow");

    $('#myCarousel').carousel({
        interval: false
    });

    $("#myCarousel").swiperight(function(event) {
      event.preventDefault();
      $(this).carousel('prev');
      });
     $("#myCarousel").swipeleft(function(event) {
       event.preventDefault();
        $(this).carousel('next');
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
    window.open("https://github.com/yhmgood0130/Gamer-z");
  } else if(id === 'reads'){
    window.open("https://github.com/yhmgood0130/galvanize-reads-client-side");
  } else if(id === 'raspberrypi'){
    window.open("https://github.com/KCN8/Raspberry-Pint/tree/production");
  }
}
