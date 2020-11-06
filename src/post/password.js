export function login(userID, password, callback) {
    // 你的获取逻辑
    fetch('http://49.235.190.178:10010/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `userID=${userID}&password=${password}`
    }).then(data => data.json()).then(body => {
         callback(true)
       })
}