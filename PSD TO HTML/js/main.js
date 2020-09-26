//box slider content
$(document).ready(function(){
    $('.slider_area').bxSlider({
        auto: 'true'
    });
    $('#main_menu').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: '991',
        meanExpandableChildren: true
    });
  });