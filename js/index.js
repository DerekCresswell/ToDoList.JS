
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
				html: item.value + " <div class='deleteBTN'>X</div> <div id='slideItem'>Temp Data</div>",
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
					html: list[index].value + 
					"<div id='slideItem'>Space for data</div>",
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
		
		$("ol").on("click", "li", function(){

			$(this).find("#slideItem").slideToggle();
			//Update data for item
			
		});
		
	});