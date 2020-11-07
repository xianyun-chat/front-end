import $ from 'jquery'
export function logon(userID, password, callback) {
      	 $.ajax({
      	          url: "http://49.235.190.178:10010/api/logon",
      	          type: "post",
      	 		  data: {
      	            userID:userID.value,
      	            password:password.value,
      	           },
      	          async:false,
      	          success: function (data) {
      	 				     if(data.code=200)
      	 					  console.log("注册成功");
							  console.log(data);
							  callback(true);
							  if(data.code=1002)
      	 				        console.log("已有账号");
							    callback(false);
      	 				},
      	          fail: function(error){
      	 			      console.log(error);
						  
      	          }
      	      });  	
      	   	
		
		
		
		
		
    }
