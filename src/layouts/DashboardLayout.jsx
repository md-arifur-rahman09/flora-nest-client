import React from "react";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            {/* Drawer toggle for small screen */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />






            <div className="drawer-content flex flex-col p-6">
                {/* Top Bar for small screen */}
                <div className="lg:hidden mb-4 flex justify-between items-center">
                    <label htmlFor="dashboard-drawer" className="btn btn-sm btn-outline">
                        ☰
                    </label>
                    <div className="flex-1 text-center">
                        <Link to='/' className="text-xl font-bold text-green-700">
                            🌿 Flora Nest
                        </Link>
                    </div>
                </div>







                {/* Main Outlet content */}
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <aside className="w-64 bg-green-100 min-h-screen p-6">
                    <Link to='/'>  <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">🌿 Flora Nest</h2></Link>
                    <ul className="menu space-y-2">
                        <li><Link className="text-green-700 text-xl font-semibold hover:bg-green-200 rounded" to="/dashboard">Dashboard </Link></li>
                        <li><Link className="text-green-700 hover:bg-green-200 rounded" to="/dashboard/allplants">📦 All Plants</Link></li>
                        <li><Link className="text-green-700 hover:bg-green-200 rounded" to="/dashboard/myPlants">📦 My Plants</Link></li>
                        <li><Link className="text-green-700 hover:bg-green-200 rounded" to="/addPlant">➕ Add New Plant</Link></li>
                        <li><Link className="text-green-700 hover:bg-green-200 rounded" to="/">🏠 Back to Home</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
