import $ from 'jquery'
export function modname(userID, userName, callback) {
	        
	$.ajax({
	            url: "http://49.235.190.178:10010/api/modify/user_name",
	            type: "post",
				data: {
				  userID:'11',
	              userName:"nihao"
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
