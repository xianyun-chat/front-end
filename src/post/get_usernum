import $ from 'jquery'
export function getusernum(roomID, callback) {
	        $.ajax({
	            url: "http://49.235.190.178:10010/api/get/chat_room/users",
	            type: "post",
				data: {
				  roomID:'11',
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
