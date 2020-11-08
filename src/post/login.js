import $ from 'jquery';
export function login(userID, password, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/login',
    type: 'post',
    data: {
      userID: userID,
      password: password
    },
    async: false,
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(true);
      } else {
        callback(false);
      }
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
