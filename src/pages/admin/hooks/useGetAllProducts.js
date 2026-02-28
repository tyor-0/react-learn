import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

export const useGetAllProducts = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

     async function getAllProducts() {
         try {
             setLoading(true);
             const response = await axiosInstance("/admin/products");
             setProducts(response.data.products);
         } catch (error) {
             console.error("Error fetching products:", error);
         } finally {
             setLoading(false);
         }
     }

     useEffect(() => {
         getAllProducts();
     }, []);
     
     return { loading, products };
 }