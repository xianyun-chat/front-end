import $ from 'jquery';
export function modifyPassword(userID, passwordOld, passwordNew, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/modify/password',
    type: 'post',
    data: {
      userID: userID,
      passwordOld: passwordOld,
      passwordNew: passwordNew
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
