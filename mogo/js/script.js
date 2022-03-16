$(function(){
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".left",
        nextArrow:".right",
        pauseOnHover:false

        
      });
      $('.about-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".about-l",
        nextArrow:".about-r",
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          
           ],
      

       
      });
      $('.team-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".team-l",
        nextArrow:".team-r",
        pauseOnHover:true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
         
           ],

       
      });
      $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    $('.comment-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow:".right-c",
      nextArrow:".left-c",
      pauseOnHover:false

     
    });
    //sticky menu & top to bottom
    $(window).scroll(function(){
      var top= $(this).scrollTop();
    if( top > 400){
      $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }

      if (top>500){
        $(".back-to-top").fadeIn(200)
      }
      else{
        $(".back-to-top").fadeOut(200)
      }

    });
    $(".back-to-top").click(function(){
      $("html,body") .animate({scrollTop: 0},1000)
    });

 new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'plane'
});

//scroll-spy & Smooth-scrolling
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 400;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});


});