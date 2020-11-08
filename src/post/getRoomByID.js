import $ from 'jquery';
export function getRoomByID(roomID, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/chat_room/by_id',
    type: 'post',
    data: {
      roomID: roomID
    },
    async: false,
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(chat_room);
      } else {
        callback(false);
      }
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
