import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
        });
        e.target.reset();
    };

    return (
        <div className="container mx-auto px-3 md:px-6">
            <Helmet>
                <title>Travel Guru | Contact Us</title>
            </Helmet>
            <div className="border-t-2 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Contact Us
                </h1>
                <p className="text-lg mb-6">
                    Have questions or need assistance? We&apos;re here to help!
                    Feel free to reach out to us via phone or email, or simply
                    fill out the contact form below and we&apos;ll get back to
                    you as soon as possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Contact Information
                        </h2>
                        <p className="text-lg mb-2">Phone: +88 01555 021 112</p>
                        <p className="text-lg mb-2">
                            Email: sazidulalam20@gmail.com
                        </p>
                        <p className="text-lg mb-2">
                            Address: 220, Dilkhola Road, Khulna
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold mb-4">
                            Send Us a Message
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4"
                        >
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="py-2 px-4 rounded-lg bg-gray-100 focus:outline-none transition-colors duration-200"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="py-2 px-4 rounded-lg bg-gray-100 focus:outline-none transition-colors duration-200"
                                required
                            />
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className="py-2 px-4 rounded-lg bg-gray-100 focus:outline-none transition-colors duration-200"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
