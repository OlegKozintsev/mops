$(document).ready(function() {
// tabs-contact

(function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);


  (function($) {
    $(function() {
      $("ul.menu__list").on("mouseover", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);
// menu


(function($) {
    $(function() {
      $("#burgerLabel").on("click", function() {
        
        
        if($("#burgerLabel").hasClass('active')) {
            $("#burgerLabel").removeClass('active');
            $('.header-content').removeClass("show");
            $(".menu__list > li > a.expanded").each(function(){
              $(this).removeClass("expanded")
              $(this).parent().children("ul").slideUp(500);
              
            });
      
           
        }
        else {
            $("#burgerLabel").addClass('active');
            $('.header-content').addClass("show");
           
        }
       
      });
    });

   
    
   


  })(jQuery);


  $(".menu__list > li > a").click(function(e) {
    
   

    e.preventDefault();
    var $this = $(this);

   
    if ($this.hasClass("expanded")) {

        $this.removeClass("expanded");
        
        $(".menu__list > li > a.expanded").each(function(){
          $(this).removeClass("expanded")
          $(this).parent().children("ul").slideDown(500);
          
        });
        
        $(this).parent().children("ul").slideUp(500);
        
    } else {
        
        $(".menu__list > li > a.expanded").each(function(){
          $(this).removeClass("expanded")
          $(this).parent().children("ul").slideUp(500);
          
        });
        
        $(this).parent().children("ul").slideDown(500);
        $this.addClass("expanded");
       
    }

});



 // slider portfolio


 var autoplaySlider = $('#portfolio').lightSlider({
    item:3,
    loop:true,
    adaptiveHeight: false,
    slideMargin:0,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:769,
            settings: {
                item:3,
                slideMove:1,
                slideMargin:0,
                enableTouch: true,
                adaptiveHeight: true
              }
        }
    ]
});

$('#portfolioLeft').click(function(){
    autoplaySlider.goToPrevSlide(); 
});

$('#portfolioRight').click(function(){
    autoplaySlider.goToNextSlide(); 
});
 
 
 
 
 // slider team 

 var teamSlider = $('#team').lightSlider({
    item:4,
    loop:true,
    adaptiveHeight: true,
    slideMargin:20,
    pager: false,
    slideMove:1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    responsive : [
        {
            breakpoint:1025,
            settings: {
                item:1,
                slideMove:1,
                slideMargin:10,
              }
        },
        {
            breakpoint:691,
            settings: {
                item:1,
                slideMove:1,
                enableTouch: true,
                adaptiveHeight: true,
                slideMargin:0
                

              }
        }
    ]
});

$('#teamLeft').click(function(){
    teamSlider.goToPrevSlide(); 
});

$('#teamRight').click(function(){
    teamSlider.goToNextSlide(); 
});


// slider case 


var caseSlider = $('#case').lightSlider({
item:4,
loop:true,
adaptiveHeight: true,
slideMargin:20,
pager: false,
slideMove:1,
easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
speed:600,
responsive : [
    {
        breakpoint:1025,
        settings: {
            item:1,
            slideMove:1,
            slideMargin:10,
          }
    },
    {
        breakpoint:691,
        settings: {
            item:1,
            slideMove:1,
            enableTouch: true,
            slideMargin:0
          }
    }
]
});

$('#caseLeft').click(function(){
caseSlider.goToPrevSlide(); 
});

$('#caseRight').click(function(){
caseSlider.goToNextSlide(); 
});

});


