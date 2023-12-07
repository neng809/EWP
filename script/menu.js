$(function(){
    var mMenu = $('.gnb > li');
    var tHeader = $('#header');
    $('.sub').hide();
    mMenu.mouseenter(function(){
           tHeader.stop().animate({height:'400px'},400);
           $('.sub').show();

       });
    mMenu.mouseleave(function(){
           tHeader.stop().animate({height:'150px'},200);
           $('.sub').hide();
       }); 
});
