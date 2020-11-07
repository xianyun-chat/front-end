import $ from 'jquery'
export function modpw(userID, passwordOld,passwordNew, callback) {
	        
	$.ajax({
	            url: "http://49.235.190.178:10010/api/modify/password",
	            type: "post",
				data: {
				  userID:'11',
	              passwordOld:"1234",
				  passwordNew:"1234",
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
