import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-wider">ByteBazaar</h3>
                        <p className="text-sm leading-relaxed">
                            Your one-stop destination for premium tech gadgets and accessories.
                            Elevate your digital lifestyle with our curated collection.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/profile" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/shipping" className="text-sm hover:text-white transition-colors duration-300 hover:pl-2 block">
                                    Shipping Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-sm">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <Phone size={18} className="flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm">
                                <Mail size={18} className="flex-shrink-0" />
                                <span>support@bytebazaar.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} ByteBazaar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
