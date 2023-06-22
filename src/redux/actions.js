import { GET_ALL_POSTS, GET_ID_POST, CREATE_COMPANY } from "./action-types";
import axios from "axios";




export const getAllPosts = () => {
    return async function (dispatch){
        const {data} = await axios.get(`/posts`);
        const posts = data;
        dispatch({ type: GET_ALL_POSTS, payload: posts });
    }
}
export const getPostById = (id) => {
    return async function (dispatch) {
        const {data} = await axios.get(`/posts/${id}`);
        const post = data;
        dispatch({ type: GET_ID_POST, payload: post });        
    }
}



export const getUsers = () => {
   
}

export const getCompanies = () => {
    
}

export const createCompany = (payload) => {
    return async function (dispatch) {
        await axios.post("/company/", payload)
        return dispatch({type: CREATE_COMPANY})
    }
}