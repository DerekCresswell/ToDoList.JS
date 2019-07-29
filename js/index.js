
	let baseDate = new Date;
	let list = [];
	let compList = [];
	
	$(document).ready(function(){

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			if(newItem.val() == "")
				return;
			
			let item = {
				value: newItem.val(),
				date: new Date,
				completed: undefined
			}
			
			list.push(item);
			newItem.val("");
			
			$("ol").append("<li>" + list[list.length - 1].value + "<div class='deleteBTN'>X</div></li>");
			//Picture may be prefered instead of X
			
		});
		
		$("#list").on("click", ".deleteBTN", function(){
			
			let toRem = $(this).closest("li");	
			
			compList.push(list.splice(toRem.index(), 1));
			compList[compList.length - 1].completed = new Date;
			
			toRem.remove();
			
		});
		
	});