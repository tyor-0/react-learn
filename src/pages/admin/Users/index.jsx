import { useGetAllUsers } from "../hooks/useGetAllUsers";

const Users = () => {

    const {loading, users} = useGetAllUsers()
    console.log(users);
    
    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Users Page</h1>
            <p className="mb-8 text-center text-gray-600">This is the users page where you can manage all the users.</p>
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <span className="text-lg text-gray-500">Loading...</span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">#</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">First Name</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Last Name</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Email</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Role</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user, idx) => (
                                    <tr key={user._id} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4 text-gray-600">{idx + 1}</td>
                                        <td className="py-2 px-4 text-gray-800 font-medium">{user.firstName}</td>
                                        <td className="py-2 px-4 text-gray-800 font-medium">{user.lastName}</td>
                                        <td className="py-2 px-4 text-gray-600">{user.email}</td>
                                        <td className="py-2 px-4 text-gray-600 capitalize">{user.role || 'user'}</td>
                                        <td className="py-2 px-4 text-gray-500 text-sm">{new Date(user.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="py-4 text-center text-gray-500">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Users;