import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        msg: ""
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            // const API_URL = import.meta.env.VITE_API_URL;

           const res = await fetch(`${import.meta.env.VITE_API_URL}/contactus`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                        },
                    body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setResponseMessage("Message sent successfully!");
                setFormData({ name: "", email: "", contact: "", msg: "" });
            } else {
                setResponseMessage("Failed to send message: " + data.msg);
            }
        } catch (error) {
            setResponseMessage("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[clamp(1.25rem,3vw,1.75rem)] uppercase pt-15'>Contact Us</h1>
            <form
                className='flex flex-col gap-6 pt-5 md:p-10 justify-center items-center'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-11/12 md:w-[400px] h-8 rounded border border-amber-950 p-2'
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-11/12 md:w-[400px] h-8 rounded border border-amber-950 p-2'
                    required
                />
                <input
                    type="text"
                    name="contact"
                    placeholder='Contact No.'
                    value={formData.contact}
                    onChange={handleChange}
                    className='w-11/12 md:w-[400px] h-8 rounded border border-amber-950 p-2'
                    required
                />
                <textarea
                    name="msg"
                    placeholder='Message Us'
                    value={formData.msg}
                    onChange={handleChange}
                    className='w-11/12 md:w-[400px] border rounded border-amber-950 h-20 p-2'
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className='bg-gray-300 text-black w-[150px] rounded-2xl py-2 font-semibold hover:bg-gray-400 transition disabled:opacity-50'
                >
                    {loading ? "Sending..." : "Send Msg"}
                </button>
                {responseMessage && (
                    <p className='text-center mt-2 text-red-600'>{responseMessage}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
