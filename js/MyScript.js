$(document).ready(function(){
    var $hidenElement = $('#HidenInfo');
    $hidenElement.hide();
    $('#HidenInfoTitle').click(function(){
        $hidenElement.toggle();
    })
});