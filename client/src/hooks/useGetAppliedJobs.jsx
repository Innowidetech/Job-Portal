import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from local storage
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the headers
                    },
                    withCredentials: true,
                });

                // console.log(res.data);
                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedJobs();
    },[dispatch])
};
export default useGetAppliedJobs;