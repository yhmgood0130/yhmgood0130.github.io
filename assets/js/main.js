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
  switch(id){
    case 'genie':
      window.open("https://football-genie.firebaseapp.com");
      break;
    case 'gamerz':
      window.open("https://gamerz-79621.firebaseapp.com/");
      break;
    case 'reads':
      window.open("https://galvanize-reads-ec524.firebaseapp.com/");
      break;
  }
}

function showCode(id) {
  switch(id){
  case 'genie':
    window.open("https://github.com/yhmgood0130/Football-Genie");
    break;
  case 'gamerz':
    window.open("https://github.com/yhmgood0130/Gamer-z");
    break;
  case 'reads':
    window.open("https://github.com/yhmgood0130/galvanize-reads-client-side");
    break;
  case 'raspberrypi':
    window.open("https://github.com/KCN8/Raspberry-Pint/tree/production");
    break;
  case 'duck':
    window.open("https://github.com/yhmgood0130/kaffeduck-client-side");
    break;
  }
}
