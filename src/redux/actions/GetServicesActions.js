import axios from "axios";


export const GetServices=()=>async(dispatch)=>{

try {
    const {data}=await axios.get(`${process.env.REACT_APP_API_KEY}services`)
    dispatch({type:"GET_SERVICES",payload:data.msg})
} catch (error) {
    
}
}

export const GetService=(id)=>async(dispatch)=>{
    try {
        console.log(id)
        const {data}=await axios.get(`${process.env.REACT_APP_API_KEY}service?id=${id}`)
        dispatch({type:"GET_SERVICE",payload:data.msg})
    } catch (error) {
        
    }

}