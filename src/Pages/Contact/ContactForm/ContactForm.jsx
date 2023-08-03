
const ContactForm = () => {
        return (
                <div className="bg-black w-10/12 text-gray-100 mx-auto mb-32">
                    <div
                        className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg shadow-lg items-center">
                        <div className="flex flex-col justify-between ">

                            <div className="mt-8 text-center">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6999580.965858689!2d-105.36810531834661!3d31.06066485284552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2sbd!4v1681895611856!5m2!1sen!2sbd" className='w-11/12' height="500" style={{ border: '0' }}  ></iframe>
                            </div>
                        </div>
                        <form  className="">
                            <div className="mb-4">
                                <label htmlFor="name" className="text-white block mb-2 font-bold">Name</label>
                                <input
                                    name='from_name'
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="text-white block mb-2 font-bold">Email</label>
                                <input
                                    name='from_email'
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="text-white block mb-2 font-bold">Message</label>
                                <textarea
                                    id="message"
                                    name='message'
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                                    rows={4}
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-semibold btn btn-outline text-white shadow-xl shadow-[] w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        );
    };

    export default ContactForm;