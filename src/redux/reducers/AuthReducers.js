import { toast } from 'react-toastify'

import jwt from 'jwt-decode'
var InitState={
    token:null,
   RegStatus:false,
   LogStatus:false,
   user:{}
}

export const UserReg=(state = InitState,action)=>{

    switch (action.type) {
        case "USER_REG":
            toast.info(action.payload.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        return {...state,RegStatus:action.payload.status }
        case "USER_LOG": 
        toast.info(action.payload.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            var token=action.payload.token
        const {user}= jwt(token)
    return {...state, token:action.payload.token,LogStatus:action.payload.status,user:{...user}}

    case "USER_LOG_BACK":
       
        const user2= jwt(action.payload.token)
        return {...state,token:action.payload.token,user:{...user2.user},LogStatus:action.payload.statuss}
    case "LOGOUT":
            return {...state,LogStatus:false}
        default:
            return state
    }
}



