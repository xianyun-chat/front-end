import React from 'react'
import './changeUN.css'
import Button from '@material-ui/core/Button'
import {modname} from "./post/modifyUserName"


  

function ChangeUN() {
   
    const change = () => {
        const userName = document.getElementById('name').value
        var storage = window.localStorage;
        storage['userName'] = userName
        const userId = storage.userId
        modname(userId, userName, (result) => {
            console.log(result);
            console.log(userId)
            if (result) {
              alert('修改成功');
              window.location.href = '/app/xianyun-chat/#/home';
            } else {
              alert('修改失败');
            }
          });
    }
    const toLobby = () => {
        window.location.href = '/app/xianyun-chat/#/lobby'
    }

    return (
        <div className="root">
            <div className="header">
                <Button variant="text" color="default" onClick={toLobby}>
                    取消
                </Button>
                <p>设置名字</p>
                <Button variant="text" color="default" onClick={change} >
                    完成
                </Button>
            </div>
            <div className="body">
                <input id='name'/>
            </div>
        </div>
    )
}

export default ChangeUN
