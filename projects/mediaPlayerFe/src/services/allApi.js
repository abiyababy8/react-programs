import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

//api call for upload video

export const uploadVideo = async (reqBody) => {
    await commonApi('POST', `${serverUrl}/videos`, reqBody)
}