import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // More advanced email validation (regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, you can proceed with form submission or other actions
        // For now, let's just log the data
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);

        // Optionally, you can reset the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="bg-black bg-opacity-50 rounded-xl p-10">
        <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium text-white">Contact me!</h1>
            <p className="mt-3 text-white">Email me at <b>victorgonzaleztrapero@gmail.com</b> or message me here:</p>

            <form onSubmit={handleSubmit} className="mt-10">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative z-0">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-10 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                    </div>
                    <div className="relative z-0">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-10 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                    </div>
                    <div className="relative z-0 col-span-2">
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required></textarea>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                    </div>
                </div>
                <button type="submit" className="mt-5 rounded-md bg-white px-10 py-2 text-black">Send Message</button>
            </form>
        </div>
        </div>
    );
}

export default ContactForm;
