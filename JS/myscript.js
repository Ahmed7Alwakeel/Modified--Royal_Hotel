
window.onscroll= function(){
    if(window.scrollY >5){
        $('#y').addClass('containeeer navcustoom');
        
    }
    else{
        $('#y').removeClass('containeeer navcustoom'); 
      
    }
}

$(document).ready(function(){
    $("i").click(function(){
        $('.fa-bars').toggleClass('fa-times');

      });

});




$(document).ready(function() {
    $('select').niceSelect();
  });


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        autoplay: true,
    }
       
    );
  });

  