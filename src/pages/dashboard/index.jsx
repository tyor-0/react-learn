

import { useGetCurrentUser } from "./useGetCurrentUser"

export default function Dashboard() {
  const { currentUser , setCurrentUser, isloading} = useGetCurrentUser();




  if(isloading){
    return(
      <div className="max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Loading...</h1>
        <p className="text-gray-600">Please wait while we fetch your data.</p>
      </div>
    )
  }

  // if (!currentUser) {
  //   return (
  //     <div className="max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col items-center">
  //       <h1 className="text-2xl font-bold text-red-600 mb-2">Logged Out</h1>
  //       <p className="text-gray-600">You have been logged out.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-800">Dashboard</h1>
       
      </div>
      <p className="text-gray-700 text-base mb-6">Welcome to your dashboard! Here you can manage your account, view your activity, and access exclusive features.</p>
      {currentUser && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-indigo-900 mb-3">User Details</h2>
          <div className="flex flex-col gap-2 text-indigo-800">
            <div><span className="font-medium text-indigo-600">Name:</span> {currentUser.firstName} {currentUser.lastName}</div>
            <div><span className="font-medium text-indigo-600">Email:</span> {currentUser.email}</div>
            <div><span className="font-medium text-indigo-600">User ID:</span> {currentUser._id}</div>
            <div><span className="font-medium text-indigo-600">Created At:</span> {new Date(currentUser.createdAt).toLocaleString()}</div>
            <div><span className="font-medium text-indigo-600">Updated At:</span> {new Date(currentUser.updatedAt).toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
  );
}