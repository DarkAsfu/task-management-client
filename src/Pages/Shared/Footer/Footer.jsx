import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="w-10/12 mx-auto footer py-10">
                <div>
                    <span className="footer-title text-[#ffc107]">Services</span>
                    <a className="link link-hover">Task Management</a>
                    <a className="link link-hover">Free Task Here</a>

                </div>
                <div>
                    <span className="footer-title text-[#ffc107] ">Quick Access</span>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/alltask" className="link link-hover">All Task</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title text-[#ffc107] ">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-[#ffc107] ">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-[#ffc107] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="divider"></div>
            <p className="text-center pb-3">2023 Copyright © Task Management. All rights reserved.</p>
        </div>
    );
};

export default Footer;