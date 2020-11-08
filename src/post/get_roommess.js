import $ from 'jquery'
export function getmess(roomid, callback) {
	  if(roomid!=0)
	  {
	  $.ajax({
	            url: "http://49.235.190.178:10010/api/get/chat_room/by_id",
	            type: "post",
				data: {
				  roomID:"11",
	             },
	            async:false,
	            success: function (data) {
				console.log(data);
				callback(true);
				},
	            fail: function(error){
			      console.log(error);
	            }
	        });
		}
	}		

