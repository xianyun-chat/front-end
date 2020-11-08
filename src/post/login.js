import $ from 'jquery'
export function login(userID,password,callback){
	
	    $.ajax({
	            url: "http://49.235.190.178:10010/api/login",
	            type: "post",
				data: {
			       userID:userID,
	                       userName:password
	             },
	            async:false,

	            success: function (data) {
                            if(data.code=200)
				console.log(data);
                               alert("登陆成功"+data);
			        callback(true);
			        },
	            fail: function(error){
			      console.log(error);
			      
	            }
	        });
}
