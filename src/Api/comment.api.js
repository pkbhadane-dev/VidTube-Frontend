import axiosInstance from "./axiosInstance"

export const postCommentRequest = async(commentData, videoId) =>{
const {data} = await axiosInstance.post(`/comments/${videoId}`, commentData)
return data.data
}

export const fetchCommentRequest = async(videoId) =>{
    const{data} = await axiosInstance.get(`/comments/${videoId}`)
    return data.data.docs
}