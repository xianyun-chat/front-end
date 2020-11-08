import $ from 'jquery';
export function createChatRoom(userID, roomName, className, capacity, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/create/chat_room',
    type: 'post',
    data: {
      userID: userID,
      roomName: roomName,
      className: className,
      capacity: capacity
    },
    async: false,
    success: function(data) {
      if (data.code === 200) {
        callback(true);
      } else {
        callback(false);
      }
      console.log(data);
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
