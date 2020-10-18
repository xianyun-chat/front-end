const numberReducer = (state = 1, action) => {
    switch(action.type) {
        case "JOIN":
            return state + 1;
        case "LEAVE":
            return state - 1;
    }
}

export default numberReducer;