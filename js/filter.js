$(document).ready(function () {
    // Open Filter Menu
    $("#filter-button").click( function() {
        // console.log("hi");
        $("#filter-dropdown").slideToggle("fast", "swing", function(){});

    });

    // //close filter menu
    // $(".our-navbar #filter-close").click(function () {
    //     $("#filter-dropdown").slideUp("fast", "swing", function(){});
    // });

});