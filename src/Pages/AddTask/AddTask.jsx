const AddTask = () => {
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        console.log({title, description, status});
    }
    return (
        <div className="my-28 md:w-2/5 mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-center mb-6">ADD TASK</h2>
            <form onSubmit={handleAddTask} className="space-y-6 p-8 bg-white rounded-lg shadow-md">
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold mb-1 text-[#ffc107]">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#ffc107]"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg text-[#ffc107] font-semibold mb-1">
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        rows="4"
                        className="w-full border rounded-md py-2 px-3 resize-none focus:outline-none focus:border-[#ffc107]"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-[#ffc107] text-lg font-semibold mb-1">
                        Status
                    </label>
                    <input
                        type="text"
                        name="status"
                        placeholder="Set status"
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#ffc107]"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTask;