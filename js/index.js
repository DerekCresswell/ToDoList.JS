
	$(document).ready(function(){
		
		let list = [];

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			list.push(newItem.val());
			newItem.val("");
			
		});
		
	});