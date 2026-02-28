import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import { set } from "zod";

export const useCreateCars = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    brand: "",
    model: "",
    year: "",
    color: "",
    transmission: "",
    price: "",
    isAvailable: false,
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
      year: Number(formData.year),
    }

    try {
      const res = await axiosInstance.post("/cars", userInput);
      console.log("Car created:", res.data);
      setFormData(res.data.allCars);
      alert("Car Created Successfully");
      router("/cars");
    } catch (error) {
      console.error("Error creating car:", error);
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
