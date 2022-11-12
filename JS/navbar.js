$(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    var $header = $('.nav');
    if(navbar > 750){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
  })
})
