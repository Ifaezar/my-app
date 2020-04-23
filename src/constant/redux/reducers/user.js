const init_state = {
    id: 0,
    username: "",
    fullName: "",
    role: "",
    testing: "",
    testing2: "",
    errMsg: ''
}

export default (state = init_state, action) => {
    if (action.type == "USERNAME") {
        return { ...state, username: action.payload }
    } else if (action.type == "ON_LOGIN_SUCCESS") {
        const { username, fullName, id, role } = action.payload
        return {
            ...state,
            username,
            fullName,
            id,
            role,
            errMsg: " "
        }
    } else if (action.type == "REGISTER_SUCCESS") {
        const { username, fullName, id, role } = action.payload
        return {
            ...state,
            username,
            fullName,
            id,
            role,
            errMsg: "Selamat Anda berhasil membuat akun"
        }
    } else if (action.type == "ON_LOGIN_FAIL") {
        return { ...state, errMsg: action.payload }
    } else if (action.type == "ON_LOGOUT") {
        return {
            ...state,
            username: action.payload,
            errMsg: "Anda Berhasil Log Out"
        }
    } else {
        return { ...state }
    }
}