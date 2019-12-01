 // slider team 

 var teamSlider = $('#team').lightSlider({
    item:4,
    loop:false,
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
loop:false,
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
