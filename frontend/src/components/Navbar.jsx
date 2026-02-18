import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Home,
  LogIn,
  UserPlus,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useSelector } from "react-redux";
import { useSearch } from "../context/SearchContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { search, setSearch } = useSearch();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-cyan-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 cursor-pointer">
                ByteBazaar
              </h2>
            </Link>
          </div>

          {/* Desktop Search Bar - Middle */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${searchFocus ? "scale-105" : ""
                }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 transition-colors duration-300 ${searchFocus ? "text-cyan-500" : "text-gray-400"
                    }`}
                />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search products..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/cart"
              className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
            >
              <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">
                Cart
                {quantity > 0 ? (
                  <span className="ml-1 text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">
                    {quantity}
                  </span>
                ) : (
                  ""
                )}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {user ? (
              <div className="flex items-center space-x-6">
                <Link
                  to="/profile"
                  className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
                >
                  <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">
                    {user.username || "User"}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="group flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-all duration-300 relative"
                  >
                    <div className="h-5 w-5 flex items-center justify-center font-bold border-2 border-gray-600 group-hover:border-purple-600 rounded text-xs group-hover:scale-110 transition-all">
                      A
                    </div>
                    <span className="font-medium">Admin</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="group flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-all duration-300 relative"
                >
                  <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-6">
                <Link
                  to="/login"
                  className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
                >
                  <LogIn className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Login</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                <Link
                  to="/signup"
                  className="group flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-all duration-300 relative"
                >
                  <UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Signup</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-gray-600 hover:text-cyan-600 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {quantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                  {quantity}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-cyan-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-4 pb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </div>
            </Link>

            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Profile ({user.username})</span>
                  </div>
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-5 w-5 flex items-center justify-center font-bold border-2 border-gray-600 rounded text-xs">
                        A
                      </div>
                      <span>Admin Dashboard</span>
                    </div>
                  </Link>
                )}

                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </div>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </div>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    <UserPlus className="h-5 w-5" />
                    <span>Signup</span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;