import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

//api call for upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

//get all videos api call
export const getAllVideos=async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}