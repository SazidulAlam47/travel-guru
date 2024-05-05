import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const SingleNav = ({ pageTitle, path, setIsMobileMenuOpen }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-[#F9A51A] " : "text-white dark:text-gray-200"
            }
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {pageTitle}
        </NavLink>
    );
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef();

    const navLinks = (
        <>
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Home"
                path="/"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="News"
                path="/news"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Blog"
                path="/blog"
            />
            <SingleNav
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                pageTitle="Contact"
                path="/contact"
            />
        </>
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="h-[12vh] flex items-center">
            <div className="navbar container mx-auto px-3 md:px-6">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost hover:bg-transparent">
                        <img
                            src="logo-white.svg"
                            alt="logo"
                            className="h-full"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end">
                    <div className="hidden lg:block pr-7">
                        <nav className="flex gap-5">{navLinks}</nav>
                    </div>
                    <Link
                        to="/login"
                        className="btn bg-primary px-7 border-0 hover:bg-[#ffb53d]"
                    >
                        Login
                    </Link>
                    <div className="dropdown pl-2" ref={dropdownRef}>
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isMobileMenuOpen && (
                            <nav
                                tabIndex={0}
                                className="absolute flex flex-col right-0 text-lg gap-1 px-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navLinks}
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleNav.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    setIsMobileMenuOpen: PropTypes.func.isRequired,
};

export default Header;
