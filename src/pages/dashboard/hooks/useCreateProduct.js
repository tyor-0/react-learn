import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    description: "",
    price: "",
    rating: {
      rate: "",
      count: 1
    },
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const userInput = {
      ...formData,
      price: Number(formData.price),
      rating: formData.rating ? Number(formData.rating) : undefined,
    };

    try {
      const res = await axiosInstance.post("/products", userInput);
      console.log(res.data);
      setFormData(res.data);
      alert("Product Created Successfully");
      navigate("/dashboard/products");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
  };
};
