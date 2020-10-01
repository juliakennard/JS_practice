$(document).ready(function() {

    // Hiding elements to use later
    $("#slideDown-img").hide();
    $("#slideToggle-img").hide();
    $("#fadeIn-img").hide();



    $("#hide-btn").click(function() {
        $("#hide-p").hide();
    })    

    $("#show-btn").click(function() {
        $("#hide-p").show();
    })

    $("#toggle-btn").click(function() {
        $("#toggle-p").toggle();
    })

    $("#slideDown-btn").click(function() {
        $("#slideDown-img").slideDown("slow");
    })

    $("#slideUp-btn").click(function() {
        $("#slideDown-img").slideUp("slow");
    })

    $("#slideToggle-btn").click(function() {
        $("#slideToggle-img").slideToggle("slow");
    })

    $("#fadeIn-btn").click(function() {
        $("#fadeIn-img").fadeIn("slow");
    })

    $("#fadeOut-btn").click(function() {
        $("#fadeIn-img").fadeOut("slow");
    })

    $("#addClass-btn").click(function() {
        $("#addClass-p").addClass("red");
    })

    $("#before-btn").click(function() {
        $("#before-p").before("<p>You did it!</p>");
    })

    $("#after-btn").click(function() {
        $("#after-p").after("<p>Nice work!</p>");
    })

    $("#append-btn").click(function() {
        $("#append-p").append("<span class='blue-bold'> These words are new!</span>");
    })

    $("#html-btn").click(function() {
        $("#html-div").html("<span id='added-html'>I'm not empty anymore!</span>");
    })

    $("#summer").hover(function() {
        $("#attr-img").attr("src", $("#attr-img").attr("summer"));
    })

    $("#winter").hover(function() {
        $("#attr-img").attr("src", $("#attr-img").attr("winter"));
    })

    $("#mars-text-box").keyup(function() {
        var value = $(this).val();
        $( "#mars" ).text(value);
    })

    $( "#earth-text-box").keyup(function() {
        var value = $(this).val();
        $("#earth").text(value);
    })

})