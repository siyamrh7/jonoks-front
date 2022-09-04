import axios from 'axios'
export const UserRegAction=(state)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${process.env.REACT_APP_API_KEY}createuser`,{...state})
        dispatch({type:"USER_REG",payload:data})
    } catch (error) {
        dispatch({type:"USER_REG",payload:error.message})
    }
}

export const UserLogAction=(state)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.post(`${process.env.REACT_APP_API_KEY}loginuser`,{...state})
        console.log(data)
        dispatch({type:"USER_LOG",payload:data})
        if(data.status){
            localStorage.setItem("token",data.token)
        }
    } catch (error) {
        dispatch({type:"USER_LOG",payload:error.message})
    }
}


