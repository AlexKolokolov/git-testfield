$(document).ready(function(){
    
    var $hidenElement = $('#HidenInfo');
    $hidenElement.hide();
    $('#HidenInfoBlock').mouseenter(function(){
        $hidenElement.fadeIn('slow');
    });
    $('#HidenInfoBlock').mouseleave(function(){
        $hidenElement.fadeOut('slow');
    });
    
});