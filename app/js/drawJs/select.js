$(document).ready(function(){
    startDraw();
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
});
