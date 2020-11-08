import $ from 'jquery'
export function login(userID,password,claaback){
	    $.ajax({
	            url: "http://49.235.190.178:10010/api/login",
	            type: "post",
				data: {
				  userID:userID,
	              userName:password
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
