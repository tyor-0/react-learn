import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LandingPageLayout from "./pages/landingPageLayout";
import About from "./pages/About";

import AuthComponent from "./pages/Auth/AuthCompo";
import Login from "./pages/Auth/Signin";
import Register from "./pages/Auth/Register";

import Blogs from "./pages/blogs";
import CreateBlog from "./pages/blogs/CreateBlog";
import SingleBlog from "./pages/blogs/SingleBlog";
import EditBlog from "./pages/blogs/EditBlog";

import CreateCar from "./pages/cars/Createcar";
import Cars from "./pages/cars/index";
import SingleCar from "./pages/cars/SingleCar";
import EditCar from "./pages/cars/EditCar";
import DeleteCar from "./pages/cars/DeleteCar";
import SearchCar from "./pages/cars/SearchCar";

import FormComponent from "./pages/form/index";
import Signin from "./pages/Auth/Signin";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard";
import UsersProducts from "./pages/dashboard/UsersProducts/index";
import CreateProduct from "./pages/dashboard/UsersProducts/CreateProduct";

import AdminLayout from "./pages/admin/AdminLayout";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";
import AdminLandingPage from "./pages/admin";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: LandingPageLayout,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
            { path: 'blogs', Component: Blogs },
            { path: "blogs/:id", Component: SingleBlog },
            { path: 'create-blog', Component: CreateBlog },
            { path: 'blogs/:id/edit', Component: EditBlog },

            { path: "cars/add", Component: CreateCar },
            { path: "cars/:id/delete", Component: DeleteCar },
            { path: "cars", Component: Cars },
            { path: "cars/search", Component: SearchCar },
            { path: "cars/:id", Component: SingleCar },
            { path: "cars/:id/edit", Component: EditCar },
        ]
    },

    {
        path: '/auth',
        Component: AuthComponent,
        children: [
            { index: true, Component: Signin },
            { path: 'register', Component: Register },
            // { path: 'signin', Component: Signin },
        ]
    },

    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            { index: true, Component: Dashboard },
            { path: '/dashboard/products', Component: UsersProducts },
            { path: '/dashboard/add-product', Component: CreateProduct },
        ]
    },

    {
        path: '/admin',
        Component: AdminLayout,
        children: [
            { index: true, Component: AdminLandingPage },
            { path: 'users', Component: Users },
            { path: 'products', Component: Products },
        ]
    }
]);