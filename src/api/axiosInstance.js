import axios from "axios";

const axiosInstance = axios.create({      //creating your own instance of axios for what you want it to do which is the crud function but it is working with the localhost you provided
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,   // this is telling the axios instance to use the base URL from the environment file and append /api/v1 to it for all requests
  headers: {
    "Content-Type": "application/json",  //converting the data to json format before sending it to the backend
  },
});

// attach token automatically
axiosInstance.interceptors.request.use(  //create an interceptor for the task you want to perform, interceptors are function that works ike a middle ware, they run before or after a request is made, before yo run any function run this.
  (config) => {  //get request information 
    const token = localStorage.getItem("token"); 
    //you are creating a variable token to get token(the original token) from local storage 
    //  something like this should appear in your code- localStorage.setItem("token", jwtToken);

    if (token) { //if token is successfully gotten it means the user is logged in so if user is logged in
      config.headers.Authorization = `Bearer ${token}`;
      //it adds Authorization: Bearer eyJhbGciOiJIUzI1... to every request which mean user is authenticated
    }

    return config;  // send request with changes 
  },
  (error) => Promise.reject(error)
  //if interceptor fails send an error 
);

export default axiosInstance; //export for other apps to use 
