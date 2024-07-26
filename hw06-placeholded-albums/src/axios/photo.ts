import axios from "axios";
import axiosConfig from "./axiosConfig.json"


export function getAllPhotos(){
    return axios.get(axiosConfig.photos.getAllPhotos)
}

export function getPhotoByIdAlbum(id:string){
    return axios.get(axiosConfig.photos.getPhotoByIdAlbum+id)
}

export function getPhotoByIdUser(id:string){
    return axios.get(axiosConfig.photos.getPhotosById+id)
}
