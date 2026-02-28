import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const signinSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    remember: z.boolean().optional(),
});


export const useLogin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        setIsSubmitting(true)

        try {
            const res = await axiosInstance.post('/auth/login', data)
            console.log(res)
            localStorage.setItem('token', res.data.token)
                alert('Login successful!')
                navigate('/dashboard')

        } catch (error) {
            console.log(error)
            alert(error.response?.data?.message || 'Login failed. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    };


    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }
}