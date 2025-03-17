import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

//api call for upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

//get all videos api call
export const getAllVideos = async () => {
    return await commonApi('GET', `${serverUrl}/videos`, "")
}

//delete video
export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`, "")
}

// add to history
export const addToHistory = async (data) => {
    return await commonApi('POST', `${serverUrl}/history`, data)
}

// get history
export const getHistory = async () => {
    return await commonApi('GET', `${serverUrl}/history`, "")
}

// delete history
export const deleteWatchHistory = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/history/${id}`, "")
}

// add category
export const addCategory = async (data) => {
    return await commonApi('POST', `${serverUrl}/categories`, data)
}

// get categories
export const getAllCategories= async()=>{
    return await commonApi('GET',`${serverUrl}/categories`,"")
}