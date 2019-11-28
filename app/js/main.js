$(document).ready(function() {
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





});


