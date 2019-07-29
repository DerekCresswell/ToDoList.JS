
	let baseDate = new Date;

	$(document).ready(function(){
		
		let list = [];

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			if(newItem.val() == "")
				return;
			
			let item = {
				value: newItem.val(),
				date: new Date,
				//
			}
			
			list.push(item);
			newItem.val("");
			
			$("ol").append("<li>" + list[list.length - 1].value + "</li>");
			
		});
		
	});