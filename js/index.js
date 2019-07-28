
	$(document).ready(function(){
		
		let list = [];

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			if(newItem.val() == "")
				return
			
			list.push(newItem.val());
			newItem.val("");
			
			$("ol").append("<li>" + list[list.length - 1] + "</li>");
			
		});
		
	});