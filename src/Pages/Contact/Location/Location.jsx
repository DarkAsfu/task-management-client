const Location = () => {
    return (
        <div className="py-32 w-10/12 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mt-14 capitalize">Connect with me</h1>
            <div className="divider w-60 text-[#FFC107] mx-auto">Here is my info</div>
            <div className='grid md:grid-cols-3 gap-12 mt-12'>
                <div className='border p-12 leading-9 text-center hover:border-b-[#FFC107] transition'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#FFC107] mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <h3 className='text-2xl font-semibold'>Address</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='border text-center p-12 leading-9 hover:border-b-[#FFC107] transition'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#FFC107] mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>


                    <h3 className='text-2xl font-semibold'>Phone</h3>
                    <p><span className='font-bold'>Phone:</span> +8801777112564</p>
                </div>
                <div className='border text-center p-12 leading-9 hover:border-b-[#FFC107] transition'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-[#FFC107] mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <h3 className='text-2xl font-semibold'>Email</h3>
                    <p><span className='font-bold'>Email:</span> ashraful.islam0871@gmail.com</p></div>
            </div>
        </div>
    );
};

export default Location;