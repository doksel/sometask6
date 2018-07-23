$(document).ready(function(){
    startDrawFilter();
    $("select").selectWidget({
        // onChange callback
        change : function (changes) {
            return changes;
        },
        // slide or fade animations
        effect: "slide",
        // enable keyboard controls
        keyControl: true,
        // animation speed
        speed: 200,
        // height of the select box
        scrollHeight: 220
    });
    startDrawProducts();
    drawProductsSlider();
    $('.content_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});
