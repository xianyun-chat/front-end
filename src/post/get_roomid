import $ from 'jquery'
export function getroom(roomID, callback) {
	        
	$.ajax({
	            url: "http://49.235.190.178:10010/api/chat_room/by_id",
	            type: "post",
				data: {
				  userID:'11',
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
