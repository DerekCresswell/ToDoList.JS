
	let baseDate = new Date();
	let list = [];
	
	$(document).ready(function(){

		$("#addItem").click(function(){
			
			let newItem = $("#inputText");
			if(newItem.val() === "")
				return;
			
			let item = {
				value: newItem.val(),
				date: new Date(),
				completionDate: null,
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
			
			list[index].completionDate = new Date();
			list[index].completed = true;
			
			toRem.fadeOut(500, function(){
				
				toRem.remove();
				
				$("ol#compList").append($("<li>", {
					id: 'compItem',
					html: list[index].value + "<ol class='compData'><li class='compDataItem'>TEMP</li></ol>", //Need data added
					'data-index': index
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