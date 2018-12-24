// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){

	//console.log($("li").css("color"));
	/*if ($(this).css("color") === "rgb(128, 128, 128)") {
		// change li to black
		$(this).css("color", "black");
	} else{
		// click makes li to gray
		$(this).css({
		"color": "gray",
		"text-decoration": "line-through"
		});
	}*/

	//和以上代码段功能一致
	$(this).toggleClass("completed");

});

$("ul").on("click", "span", function(event){
	//alert("clicked!!!");

	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
})

$("input").keypress(function(event){
	if (event.which === 13) {
		// read the input message
		// console.log(newTask);
		var newTask = $(this).val();
		$(this).val("");
		// append the text message to the li list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newTask+"</li>")
	}
})

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});