import $ from 'jquery'
export function getroomclass(classname, callback) {
	        
	$.ajax({
	            url: "http://49.235.190.178:10010/api/chat_room/by_class",
	            type: "post",
				data: {
				  classname:'meishi',
	             },
	            async:false,
	            success: function (data) {
				console.log(data);
				},
	            fail: function(error){
			      console.log(error);
	            }
	        });
	}		
