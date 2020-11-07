import $ from 'jquery'
export function getmessnum(roomID,dataNum, callback) {
	        
	$.ajax({
	            url: "http://49.235.190.178:10010/api/get/chat_history",
	            type: "post",
				data: {
				  roomID:"11",
				  dataNum:"100",
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
