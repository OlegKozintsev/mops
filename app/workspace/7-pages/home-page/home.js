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


// mask

$("#inputPhone").mask("9 (999) 999-99-99");
$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[name="inputPhone"]').click(function(){
    $(this).setCursorPosition(0);  // set position number
  });

// 


