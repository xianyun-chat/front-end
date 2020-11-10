#前端接口测试逻辑
引入iquery依赖
ajax函数（）
import $ from 'jquery';
export function fname(参数, 参数, callback) {
  $.ajax({
    url: 接口地址,
    type: 'post',//传参方式
    //参数
    data: {
      
    },
    async: false,//异步
    //连接成功返回
    success: function(data) {
      console.log(data);
      if (data.code === 200) {
        callback(true);
      } else {
        callback(false);
      }
    },
    //连接失败跟踪
    fail: function(error) {
      console.log(error);
    }
  });
继承测试文档
