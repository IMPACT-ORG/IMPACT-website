$(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    console.log(navbar);
    var $header = $('#nav');
    if(navbar > 750){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
  })
})
