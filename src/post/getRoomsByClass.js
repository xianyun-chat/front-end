import $ from 'jquery';
export function getRoomsByClass(className, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/get/chat_room/by_class',
    type: 'post',
    data: {
      className: className
    },
    async: false,
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(data.chat_rooms);
      } else {
        callback(false);
      }
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
