import $ from 'jquery'
export function creroom(userID, roomName,roomScale,capacity, callback) {
	        $.ajax({
	            url: "http://49.235.190.178:10010/api/create/chat_room",
	            type: "post",
				data: {
				  userID:'11',
	              roomName:roomName.value,
	              className:'美食',
				  capacity:roomScale.value,
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
