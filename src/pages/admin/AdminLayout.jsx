import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const AdminLayout = () => {
    // const { currentUser, loading } = useGetCurrentUser();

    // if (loading) return <div>Loading…</div>;

    // redirect to login (or whatever) if not logged in or not an admin

    // if (!currentUser || currentUser.role !== "admin") {
    //     return <Navigate to="/dashboard" replace />;
    // }

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 bg-gray-50  p-8"><Outlet /></main>
        </div>
    );
}

export default AdminLayout;