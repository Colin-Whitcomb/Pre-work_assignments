// When the factButton is clicked...
$("#factButton").on("click", function() {
    // We generate a radnom number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * dogFactArray.length));
	// We disaply the fact from the dogFactArray that is in the random position we just generated.
	$("#factText").text(dogFactArray[number])
})

// This array holds all of our Boo Dog facts!
var dogFactArray = ["He's a good boi", "He likes snacky-snacks", "He's the cutest doggo ever", "He likes warm hugs"]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// Change funText to pink.
	$("#funText").css("color", "pink")
})

// When the testOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clickec...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})