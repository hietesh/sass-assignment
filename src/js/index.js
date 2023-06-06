jQuery('#header-toggle').on('click',function(){
    jQuery('.header .menu').slideToggle();
});

jQuery(window).on('resize',function(){
    if(jQuery( window ).width() > 991){
        jQuery('.header .menu').css('display','flex');
    }
    else{
        jQuery('.header .menu').css('display','none');
    }
})


jQuery('.options-list li').on('click',function(){
    if(!jQuery(this).hasClass('active')){
        jQuery('.options-list li').removeClass('active');
        jQuery(this).addClass('active');
    }
})

jQuery(document).ready(function() {

    // scroll element on click
    jQuery('#slideRight').on('click', function() {
      jQuery('#scroll-container').animate({ scrollLeft: '-=80' }, 'slow');
    });
  
    jQuery('#slideLeft').on('click', function() {
        jQuery('#scroll-container').animate({ scrollLeft: '+=80' }, 'slow');
    });
  });