import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm('service_ofsy0u4', 'template_atz15xx', form.current, 'ElpWi6ycUOvmEst1d')
            .then(
                () => {
                    setSending(false);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    setSending(false);
                    setSuccess(false);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='contact' className="text-white py-20">
            <div className="container mx-auto px-8 md:px-20">
                <div className="text-center mb-16">
                    <h2 className="font-semibold tracking-widest text-sm uppercase mb-4 relative">
                        <span className="absolute inset-0 bg-white h-1 transform -skew-x-12 -translate-y-2"></span>
                        <span className="relative ">Let's Talk</span>
                    </h2>
                    <p className="text-gray-300 text-3xl md:text-4xl lg:text-5xl  mb-8 bg-clip-text font-bold animate-pulse  ">
                        CONNECT WITH ME THROUGH THE PLATFORMS BELOW OR SEND ME A MESSAGE DIRECTLY! 
                    </p>
                </div>
                <div className="flex justify-center mb-12 space-x-6">
                    <a href="mailto:abdulbaset.ayon@gmail.com" className="transition-transform transform hover:scale-110">
                        <FaEnvelope className="text-5xl text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-baset-ayon/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                        <FaLinkedin className="text-5xl text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                    <a href="https://github.com/AyonJR" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                        <FaGithub className="text-5xl text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                    <a href="https://www.facebook.com/Ayonjr.11?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                        <FaFacebook className="text-5xl text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                </div>
                <div className="max-w-lg mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg relative">
                        <h3 className="text-3xl font-bold mb-6 text-center relative">
                            <span className="absolute inset-0 text-white h-1 transform -skew-x-12 -translate-y-2"></span>
                            <span className="relative">Send a Message</span>
                        </h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full p-4 bg-black text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full p-4 bg-black text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                className="w-full p-4 bg-black text-white rounded-lg border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`w-full p-4 text-white font-semibold rounded-lg focus:outline-none transition-colors duration-300 ${sending ? 'bg-gray-600 cursor-not-allowed' : 'bg-black text-white border border-white hover:scale-110'}`}
                            disabled={sending}
                        >
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>
                        {success === true && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
                        {success === false && <p className="text-red-500 mt-4 text-center">Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
