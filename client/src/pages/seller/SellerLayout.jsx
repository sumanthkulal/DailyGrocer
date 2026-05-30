import { Outlet, useNavigate, NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const SellerLayout = () => {
    const navigate = useNavigate();
    const { isSeller } = useAppContext();

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async () => {
        try {
            // ✅ FIXED: Added withCredentials to ensure the server can clear the cookie
            const { data } = await axios.get("/api/seller/logout", { withCredentials: true });
            if (data.success) {
                toast.success(data.message);
                navigate('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 h-[64px] bg-white z-10 shrink-0">
                <Link to='/'>
                    {/* ✅ FIXED: Corrected cursor layout typo and standard width layout flags */}
                    <img className="cursor-pointer w-32 md:w-36 object-contain" src={assets.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p className="text-sm font-medium">Hi! Admin</p>
                    <button onClick={logout} className='border border-gray-300 rounded-full text-sm px-4 py-1 hover:bg-gray-50 transition-colors'>
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Application Container */}
            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                {/* ✅ FIXED: Layout height calculation matches exact viewport remains */}
                <div className="md:w-64 w-16 border-r h-[calc(100vh-64px)] text-base border-gray-300 pt-4 flex flex-col bg-white sticky top-[64px] shrink-0">
                    {sidebarLinks.map((item) => (
                        <NavLink 
                            to={item.path} 
                            key={item.name} 
                            end={item.path === "/seller"}
                            className={({ isActive }) => `flex items-center py-3 px-4 gap-3 transition-all duration-150
                                ${isActive 
                                    ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary font-medium"
                                    : "hover:bg-gray-50 border-transparent text-gray-600"
                                }`
                            }
                        >
                            <img src={item.icon} alt="" className="w-6 h-6 min-w-[24px]"/>
                            <p className="md:block hidden truncate">{item.name}</p>
                        </NavLink>
                    ))}
                </div>

                {/* Dashboard Page Content view routing container */}
                {/* ✅ IMPROVEMENT: Overflow control allows seamless individual scrolling grids */}
                <main className="flex-1 h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default SellerLayout;