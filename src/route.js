import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/(landingPage)/Home";
import LandingPageLayout from "./pages/(landingPage)/landingPageLayout";
import About from "./pages/(landingPage)/About";

import AuthComponent from "./pages/(landingPage)/Auth/AuthCompo";
import Login from "./pages/(landingPage)/Auth/Signin";
import Register from "./pages/(landingPage)/Auth/Register";

import Blogs from "./pages/(landingPage)/blogs";
import CreateBlog from "./pages/(landingPage)/blogs/CreateBlog";
import SingleBlog from "./pages/(landingPage)/blogs/SingleBlog";
import EditBlog from "./pages/(landingPage)/blogs/EditBlog";

import CreateCar from "./pages/(landingPage)/cars/Createcar";
import Cars from "./pages/(landingPage)/cars/index";
import SingleCar from "./pages/(landingPage)/cars/SingleCar";
import EditCar from "./pages/(landingPage)/cars/EditCar";
import DeleteCar from "./pages/(landingPage)/cars/DeleteCar";
import SearchCar from "./pages/(landingPage)/cars/SearchCar";


import FormComponent from "./pages/(landingPage)/form/index";



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
            { index: true, Component: Login },
            { path: 'register', Component: Register }
        ]
    }
])