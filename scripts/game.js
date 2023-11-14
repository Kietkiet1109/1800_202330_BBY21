$(document).ready(function(){
    // pop up event
    $(".bin_wrap").click(function(){
        $(".pop_up").fadeIn();
    })

    $(".next_stage").click(function(){
        $(".pop_up").fadeOut();
    })
});