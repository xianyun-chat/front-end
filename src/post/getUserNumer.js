import $ from 'jquery';
export function getUserNumer(roomID, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/get/chat_room/users',
    type: 'post',
    data: {
      roomID: roomID
    },
    async: false,
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(data.number);
      } else {
        callback(false);
      }
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
