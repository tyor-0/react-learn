import { useEffect } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { useState } from "react";

export const useGetAllUsers = () => {

   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);

    async function getAllUsers() {
        try {
            setLoading(true);
            const response = await axiosInstance("/admin/users");
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);
    
    return { loading, users };
}