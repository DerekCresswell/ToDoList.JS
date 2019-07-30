
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
			
			$("ol#list").append("<li>" + list[list.length - 1].value + "<div class='deleteBTN'>X</div></li>");
			//Picture may be prefered instead of X
			
		});
		
		$("#list").on("click", ".deleteBTN", function(){
			
			let toRem = $(this).closest("li");	
			
			compList.push(list.splice(toRem.index(), 1)[0]);
			compList[compList.length - 1].completed = new Date;
			
			toRem.fadeOut(500, function(){
				
				toRem.remove();
				let toAdd = $("ol#compList");
				toAdd.append("<li id='compItem'>" + compList[compList.length - 1].value + "<ol class='compData'><li class='compDataItem'>temp</li></ol></li>");
				toAdd.hide().fadeIn(500);
				
			});
			
		});
		
		
		$("#list").on({mouseenter: function(){
			
			$(this).parent().css("text-decoration", "line-through");
			
		}, mouseleave: function(){
			
			$(this).parent().css("text-decoration", "none");
			
		}}, ".deleteBTN");
		
		$("#compList").on("click", "#compItem", function(){
			
			$(this).find("ol").slideToggle();
			
		});
		
	});