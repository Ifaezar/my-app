const init_state={
    username: "Luffy",
    id: 0
}

export default (state = init_state, action) =>{
    if (action.type == "USERNAME"){
        return { ...state, username: action.payload}
    } else {
        return { ...state }
    }
}