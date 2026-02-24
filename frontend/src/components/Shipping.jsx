import React from "react";
import { Link } from "react-router-dom";
import { Truck, Info, Clock, ShieldCheck } from "lucide-react";

const Shipping = () => {
    const policies = [
        {
            title: "Fast Delivery",
            description: "We process and ship all orders within 24-48 hours. Most customers receive their items in 3-5 business days.",
            icon: <Clock className="h-8 w-8 text-cyan-500" />
        },
        {
            title: "Free Shipping",
            description: "Enjoy free standard shipping on all orders over $50 across the country. No hidden fees at checkout.",
            icon: <Truck className="h-8 w-8 text-fuchsia-500" />
        },
        {
            title: "Order Tracking",
            description: "Once your order ships, you'll receive a tracking number via email to follow your package until it arrives.",
            icon: <Info className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Safe Packaging",
            description: "All products are carefully inspected and packed with protective materials to ensure they reach you in perfect condition.",
            icon: <ShieldCheck className="h-8 w-8 text-green-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                        Shipping Policy
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about how we get your gadgets to you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {policies.map((policy, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-4">{policy.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{policy.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{policy.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Domestic Shipping</h2>
                        <p className="text-gray-600">
                            Standard Shipping: 3-5 business days (FREE on orders over $50)<br />
                            Express Shipping: 1-2 business days ($14.99)
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns & Exchanges</h2>
                        <p className="text-gray-600">
                            Not happy with your purchase? We offer a 30-day return policy. Items must be in original packaging and condition. Visit our returns portal to start a request.
                        </p>
                    </section>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/"
                        className="inline-flex items-center text-cyan-600 font-semibold hover:underline"
                    >
                        ← Back to Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
