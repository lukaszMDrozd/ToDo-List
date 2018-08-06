//Check off specific Todos by clicking
$("ul").on("click", "li", function(){
	// More dificult version
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "black"	
	// })
	// }
	// else{
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"	
	// })
	// };
	$(this).toggleClass("completed");
});
//click on X to delete ToDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add new ToDos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})