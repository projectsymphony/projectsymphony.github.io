$(document).ready(function () {
    // Open Filter Menu
    $(".navbar #filter-button").click( function() {
        $("#filter-dropdown").slideToggle("fast", "swing", function(){});
    });

    // //close filter menu
    // $(".our-navbar #filter-close").click(function () {
    //     $("#filter-dropdown").slideUp("fast", "swing", function(){});
    // });

});