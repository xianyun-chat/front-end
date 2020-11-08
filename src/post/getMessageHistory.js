import $ from 'jquery';
export function getMessageHistory(roomID, dataNum, callback) {
  $.ajax({
    url: 'http://49.235.190.178:10010/api/get/chat_history',
    type: 'post',
    data: {
      roomID: roomID,
      dataNum: dataNum
    },
    async: false,
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(data.chat_history);
      } else {
        callback(false);
      }
    },
    fail: function(error) {
      console.log(error);
    }
  });
}
