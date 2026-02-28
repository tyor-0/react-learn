import axios from "axios";
import { useState, useEffect } from "react"
import axiosInstance from "../../../api/axiosInstance";

 export const useGetAllCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState("")
    const [error, setError] = useState(null)

    async function getAllCars(){
        setLoading(true)
         try {
            const res = await axiosInstance.get(`/cars?search=${encodeURIComponent(search)}`)
            console.log(res.data.allCars);
            // setCars(res.data)
            setCars(res.data.allCars);
        } catch (error) {
            console.log(error);
            setError(error.message || "something went wrong")
        } finally {
            setLoading(false)
        }
    }

    function handleQuery(e){
        const value = e.target.value
        setQuery(value)
    }
    
    function handleSearch(){
        setSearch(query)
    }

    useEffect(() => {
    getAllCars()
}, [search]);

    return{
        cars, 
        loading, 
        error,
        handleQuery, 
        handleSearch,
        getAllCars,
        query
    }
}
