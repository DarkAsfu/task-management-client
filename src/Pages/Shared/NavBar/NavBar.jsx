import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const signOut = () => {
        logOut()
            .then(() => { })
            .then(e => console.log(e.message))
    }
    return (
        <div className="bg-[#fff] shadow-sm">
            <header>
                <div className="relative z-20 md:w-10/12 mx-auto">
                    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <Link to="/">
                                    <h1 className="text-[#4d4d4d] text-3xl font-bold"><span className="text-[#ffc107]">T</span>ask Management</h1>
                                </Link>
                            </div>

                            <div className="flex items-center justify-end border-l lg:border-l-0 ">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label htmlFor="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden ">
                                    <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-[#ffc107] transition duration-300"></div>
                                    <div aria-hidden="true" className="m-auto mt-2 h-0.5 w-6 rounded bg-[#ffc107] transition duration-300"></div>
                                </label>
                                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 bg-[#fff]">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="px-6 pt-32 text-[#000] text-[17px] space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 ">
                                            <li>
                                                <Link to='/' className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ffc107] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative" >Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/alltask' className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ffc107] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative " >All Task</span>
                                                </Link>
                                            </li>
                                            {
                                                user &&
                                                <>
                                                    <li>
                                                        <Link to='/mytask' className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ffc107] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                            <span className="relative " >My Task</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/addtask' className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ffc107] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                            <span className="relative " >Add Task</span>
                                                        </Link>
                                                    </li>
                                                </>
                                            }
                                            <li>
                                                <Link to='/contact' className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ffc107] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                                                    <span className="relative " >Contact</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        {
                                            user &&
                                            <div className="dropdown px-6 -mt-16 md:mt-0">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            user.photoURL ? <img src={user.photoURL} /> : <img src="https://i.ibb.co/2qr381T/user-1.png"></img>
                                                        }
                                                    </div>
                                                </label>
                                            </div>
                                        }
                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                                            {
                                                user ? <button onClick={signOut} className="block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-center text-white">Sign Out</button> : <Link to="/signin" className="block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-center text-white">
                                                    Sign In
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
