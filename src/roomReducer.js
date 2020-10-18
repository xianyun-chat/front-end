export  const initialState = {
    room: [],
    user: null
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type)  {
        case "CREATE":
                // action.item.name = action.name
                // action.item.number = action.number
            return {
                //返回当前状态,但是更新room的状态
                ...state,   
                room: [...state.room,action.item], //plus item
            }
        default:
            return state;
    }
}

export default reducer;