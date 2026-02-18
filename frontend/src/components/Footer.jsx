import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent inline-block">
                                ByteBazaar
                            </h3>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Your one-stop destination for premium tech gadgets and accessories.
                            Elevate your digital lifestyle with our curated collection.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-600 transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/profile" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/shipping" className="text-sm hover:text-cyan-600 transition-colors duration-300 hover:pl-2 block">
                                    Shipping Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm text-gray-500">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-cyan-600" />
                                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-gray-500">
                                <Phone size={18} className="flex-shrink-0 text-cyan-600" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-gray-500">
                                <Mail size={18} className="flex-shrink-0 text-cyan-600" />
                                <span>support@bytebazaar.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} ByteBazaar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
