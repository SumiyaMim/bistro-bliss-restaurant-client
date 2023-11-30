import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-bliss-restaurant-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;