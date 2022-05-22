import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log(admin)
    return (
        <div class="drawer mt-16 drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mx-4">
                <h2 className='text-3xl font-bold text-center text-secondary mt-5'>Dashboard</h2>
                <Outlet />
            </div> 
            <div class="drawer-side border-r-2  border-blue-300">
                <label for="dashboard-sidebar" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='font-bold my-1'><NavLink to='/dashboard/'>My Profile</NavLink></li>
                    { !admin && <>
                        <li className='font-bold my-1'><NavLink to='/dashboard/myOrder'>My Orders</NavLink></li>
                        <li className='font-bold my-1'><NavLink to='/dashboard/addReview'>Add Review</NavLink></li>
                    </>}
                    {admin && <>
                        <li className='font-bold my-1'><NavLink to='/dashboard/manageOrder'>Mange All Order</NavLink></li>
                        <li className='font-bold my-1'><NavLink to='/dashboard/addProduct'>Add Product</NavLink></li>
                        <li className='font-bold my-1'><NavLink to='/dashboard/users'>Make Admin</NavLink></li>
                        <li className='font-bold my-1'><NavLink to='/dashboard/manageProduct'>Manage Product</NavLink></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;