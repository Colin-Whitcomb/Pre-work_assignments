// When the Grow button is clicked...
$("#button1").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast")
})

// When Blue is pressed...
$("#button2").on("click", function() {
	// Change background-color to blue.
	$("box").css("background-color", "blue")
})

// When Fade is pressed...
$("#button3").on("click", function() {
	// Change funText to blue.
    $("box").animate("opacity", "-90%")
})

// When the Reset button is clicked...
$("#button4").on("click", function() {
	// Decrease the size of the box.
    $("#box").animate({height:"=150px", width:"=150px", margin:"25px"})
})

// When Reset button is clicked...
$("#button4").on("click", function() {
	// Change background-color to orange.
    $("box").css("background-color", "orange")
})

// Can't figure out why the Blue, Fade, and Reset buttons are unresponsive.