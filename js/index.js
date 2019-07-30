
	let baseDate = new Date();
	let list = [];
	let compList = [];
	
	$(document).ready(function(){

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			if(newItem.val() === "")
				return;
			
			let item = {
				value: newItem.val(),
				date: new Date(),
				completed: false
			}
			
			list.push(item);
			newItem.val("");
			
			$("ol#list").append($("<li>", {
				html: item.value + " <div class='deleteBTN'>X</div>",
				'data-index': list.length - 1
			}));
			
		});
		
		$("#list").on("click", ".deleteBTN", function(){
			
			let toRem = $(this).closest("li");
			let index = toRem.data('index');
			
			//If elm before this is removed "data-index" does not work \/ needs fixing
			list[index].completed = new Date();
			compList.push(list[index]);

			let newIndex = compList.length - 1;
			list.splice(index, 1);
			
			toRem.fadeOut(500, function(){
				
				toRem.remove();
				
				$("ol#compList").append($("<li>", {
					id: 'compItem',
					html: compList[newIndex].value + "<ol class='compData'><li class='compDataItem'>TEMP</li></ol>", //Need data added
					'data-index': newIndex
				}));
				
				$("ol#compList").hide().fadeIn(500);
				
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