import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 bg-gray-50 p-8"><Outlet /></main>
        </div>
    );
}

export default AdminLayout;